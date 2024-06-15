import { EmailSignInForm } from "@/app/ui/auth/signin/email-signin-form";
import { PhoneSignInForm } from "@/app/ui/auth/signin/phone-signin-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="w-96">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your details to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="email">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <EmailSignInForm />
            </TabsContent>
            <TabsContent value="phone">
              <PhoneSignInForm />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col"></CardFooter>
      </Card>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <Link className="underline ml-2" href="/auth/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
