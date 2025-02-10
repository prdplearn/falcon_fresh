import { z } from "zod";

export const loginFormSchema=  z.object({
  email: z.string().email({ message: "Please enter a valid Email" }).trim(),
  password: z
  .string()
  .min(1, { message: "Password cannot be empty" })
  .min(5, { message: "Password must be at least 5 characters long" })
  .trim(),
  password: z
  .string()
  .min(1, { message: "Password must be required." })
  .trim(),
})


export const registerFormSchema = z.object({
  name: z.string().min(1, { message: "User Name is required" }).trim(),
  email: z.string().email({ message: "Please enter a valid Email" }).trim(),
  password: z
    .string()
    .min(1, { message: "Password cannot be empty" })
    .min(5, { message: "Password must be at least 5 characters long" })
    .trim(),
  confirmPassword: z.string().trim(),
}).superRefine((val, ctx) => {
  if (val.password !== val.confirmPassword) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Password fields do not match",
      path: ["confirmPassword"], // Targeting confirmPassword for error feedback
    });
  }
});
