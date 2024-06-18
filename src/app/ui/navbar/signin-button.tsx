import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("keycloak");
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
