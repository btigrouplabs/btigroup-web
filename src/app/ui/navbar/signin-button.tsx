import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export function SignInButton() {
  return <Button onClick={() => redirect("/auth/signin")}>Sign In</Button>;
}
