import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().optional(),
  department: z.string().optional(),
  needs: z.string().optional(),
});

export const accessRequestSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  companySize: z.string().optional(),
  primaryUseCase: z.string().optional(),
});

export const authSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = authSchema.extend({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  company: z.string().min(2, "Company name is required"),
});

export type DemoRequestFormData = z.infer<typeof demoRequestSchema>;
export type AccessRequestFormData = z.infer<typeof accessRequestSchema>;
export type AuthFormData = z.infer<typeof authSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;