"use client";

import { signInByPhoneAction } from "@/app/data/actions/auth-actions";
import { ApiErrors } from "@/components/common/ApiErrors";
import { SubmitButton } from "@/components/common/SubmitButton";
import { ZodErrors } from "@/components/common/ZodErrors";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useFormState } from "react-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const INITIAL_STATE = {
  data: null,
  message: null,
  zodErrors: null,
  apiErrors: null,
};

export function PhoneSignInForm() {
  const [value, setValue] = useState<any>();
  const [formState, formAction] = useFormState(
    signInByPhoneAction,
    INITIAL_STATE
  );
  if (formState?.data === "ok") {
    redirect("/profile");
  }

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="phone_number">Phone Number</Label>
        <PhoneInput
          id="phone_number"
          name="phone_number"
          inputComponent={Input}
          placeholder="Enter your phone number"
          onChange={setValue}
          value={value}
        />
        <ZodErrors error={formState?.zodErrors?.phone_number} />
      </div>
      <div className="space-y-2">
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
