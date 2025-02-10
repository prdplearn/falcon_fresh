"use server";

import connectToDatabase from "@/config/dbConfig";
import { loginFormSchema, registerFormSchema } from "@/lib/rules"; // Assumes you have Zod schemas defined here
import { createSession } from "@/lib/session"; // Your session creation logic
import { User } from "@/models/users.model"; // Your Mongoose User model
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Register a User
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
            return {
                errors: { email: ["Email is already registered."] },
            };
        }

        // Hash the password
        const saltRounds = 10; // Adjust based on security requirements
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create and save the new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // Store hashed password
        });

        await newUser.save();
        console.log("New user saved to the database!");

        // Create a session for the new user
        await createSession(newUser._id.toString());

        // Redirect to the login page or dashboard
       
        
    } catch (error) {
        console.error("Error during registration:", error);
        return {
            errors: { general: ["Something went wrong. Please try again."] },
        };
    }
    redirect("/");
};

// Login a User
export const login = async (state, formData) => {
    await connectToDatabase();

    try {
        // Validate login form data
        const validatedFields = loginFormSchema.safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
                email: formData.get("email"),
            };
        }

        const { email, password } = validatedFields.data;

        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return {
                errors: { email: ["No user found with this email."] },
            };
        }

        // Check if the password matches
        const isPasswordMatched = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatched) {
            return {
                errors: { password: ["Invalid password."] },
            };
        }

        // Create a session for the user
        await createSession(existingUser._id.toString());
        console.log("User logged in successfully!");

        // Redirect to the dashboard
      
    } catch (error) {
        console.error("Error during login:", error);
        return {
            errors: { general: ["Something went wrong. Please try again."] },
        };
    }
    redirect("/");
};

// Logout a User 

export const logout = async ()=>{
  try {
    const cookieStore = await cookies();
    cookieStore.delete("Session")
  } catch (error) {
    console.log("Facing Error in Logout", error);
  }
  redirect("/login")
}

