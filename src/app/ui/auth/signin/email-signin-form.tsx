"use client";

import { signInAction } from "@/app/data/actions/auth-actions";
import { ApiErrors } from "@/components/common/ApiErrors";
import { SubmitButton } from "@/components/common/SubmitButton";
import { ZodErrors } from "@/components/common/ZodErrors";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";

const INITIAL_STATE = {
  data: null,
  message: null,
  zodErrors: null,
  apiErrors: null,
};

export function EmailSignInForm() {
  const [formState, formAction] = useFormState(signInAction, INITIAL_STATE);
  if (formState?.data === "ok") {
    redirect("/profile");
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter your email"
          type="text"
        />
        <ZodErrors error={formState?.zodErrors?.email} />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <ZodErrors error={formState?.zodErrors?.password} />
      </div>
      <div>
        <SubmitButton
          text="Sign In"
          loadingText="Signing In..."
          className="w-full"
        />
        <ApiErrors error={formState?.apiErrors} />
      </div>
    </form>
  );
}
