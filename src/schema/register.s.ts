

import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters.")
      .max(30, "Name must not exceed 30 characters.")
      .regex(
        /^[A-Za-z\u0600-\u06FF\s]+$/,
        "Name must contain letters only."
      ),

    email: z
      .email("Please enter a valid email address.")
      .trim()
      .toLowerCase(),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(32, "Password must not exceed 32 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "Password must contain uppercase, lowercase, number and special character."
      ),

    rePassword: z.string(),

    phone: z
      .string()
      .trim()
      .regex(
        /^01[0125][0-9]{8}$/,
        "Please enter a valid Egyptian phone number."
      ),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });


export  type RegisterSchemaType = z.infer<typeof registerSchema>