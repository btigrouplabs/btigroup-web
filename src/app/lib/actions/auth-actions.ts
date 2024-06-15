"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import axiosInstance from "../axios";

const config = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 7, // 1 week
  // domain: process.env.HOST ?? "localhost",
  path: "/",
};

const signinSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(5).max(100, {
    message: "Password must be between 5 and 100 characters",
  }),
});

const signinByPhoneSchema = z.object({
  phone_number: z.string().refine(
    (phone) => {
      const regex = /^[+]?[1-9]\d{1,14}$/; // Example regex for E.164 format
      return phone && regex.test(phone.replace(/\s/g, ""));
    },
    {
      message: "Invalid phone number format.",
    }
  ),
  password: z.string().min(5).max(100, {
    message: "Password must be between 5 and 100 characters",
  }),
});

export async function signInAction(prevState: any, formData: FormData) {
  try {
    const fields = signinSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!fields.success) {
      return {
        ...prevState,
        zodErrors: fields.error.flatten().fieldErrors,
        message: "Missing Fields.",
        data: "error",
      };
    }

    const { data } = await axiosInstance.post<ISignInResponse>(
      "api/auth/sign-in-by-email",
      fields.data
    );

    cookies().set("auth.token", data.access_token, config);
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Sign In Successful.",
      data: "ok",
    };
  } catch (error: any) {
    return {
      ...prevState,
      apiErrors: error,
      zodErrors: null,
      message: "Sign In Failed.",
      data: "error",
    };
  }
}

export async function signInByPhoneAction(prevState: any, formData: FormData) {
  try {
    const fields = signinByPhoneSchema.safeParse({
      phone_number: formData.get("phone_number"),
      password: formData.get("password"),
    });

    if (!fields.success) {
      return {
        ...prevState,
        zodErrors: fields.error.flatten().fieldErrors,
        message: "Missing Fields.",
        data: "error",
      };
    }

    const { data } = await axiosInstance.post<ISignInResponse>(
      "api/auth/sign-in-by-phone",
      {
        ...fields.data,
        phone_number: fields.data.phone_number.replace(/\s/g, ""),
      }
    );

    cookies().set("auth.token", data.access_token, config);
    return {
      ...prevState,
      apiErrors: null,
      zodErrors: null,
      message: "Sign In Successful.",
      data: "ok",
    };
  } catch (error: any) {
    return {
      ...prevState,
      apiErrors: error,
      zodErrors: null,
      message: "Sign In Failed.",
      data: "error",
    };
  }
}

export async function signOutAction() {
  cookies().delete("auth.token");
  redirect("/auth/signin");
}
