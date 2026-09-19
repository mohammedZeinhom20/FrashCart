

import * as z from "zod";

export const loginSchema = z
  .object({


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
  })



export  type LoginSchemaType = z.infer<typeof loginSchema>