"use server";

import connectToDatabase from "@/config/dbConfig";
import { registerFormSchema } from "@/lib/rules";
import { createSession } from "@/lib/session";
import { User } from "@/models/users.model";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const register = async (state, formData) => {
  await connectToDatabase();

  try {
    // Validate form data
    const validatedFields = registerFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        email: formData.get("email"),
      };
    }

    const { name, email, password } = validatedFields.data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return console.log("Email Already Registered in DB");
    }

    // Hash the password
    const saltRounds = 10; // Adjust the number of salt rounds for your needs
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with the hashed password
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Save hashed password
    });

    await newUser.save();
    console.log("New User Saved in Database!!!");

    await createSession(newUser.insertedId)

    return {
        success: true,
        redirectUrl: "/login", // Return the redirect URL
      };
  } catch (error) {
    console.log("Error:", error);
  }
};
