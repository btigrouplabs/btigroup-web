import { getMeAction, signInAction } from "@/lib/api";
import Keycloak from "next-auth/providers/keycloak";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Keycloak],
  callbacks: {
    jwt: async ({ account, token, user }) => {
      if (account?.provider === "github") {
        const { access_token } = await signInAction(account.provider, user);
        return { ...token, accessToken: access_token };
      }
      return token;
    },
    session: async ({ session, token }) => {
      const user = await getMeAction();
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
});
