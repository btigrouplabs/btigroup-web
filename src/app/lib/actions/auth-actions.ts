"use server";

import { User } from "next-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOutAction() {
  cookies().delete("auth.token");
  redirect("/auth/signin");
}
