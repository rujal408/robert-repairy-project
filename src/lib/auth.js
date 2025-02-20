import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const providers = [
  Credentials({
    credentials: {
      password: { label: "Password", type: "password" },
      username: { label: "Username", type: "text" },
    },
    async authorize(c) {
      // TODO: Validate or login from Datatase
      return {
        id: 1,
        email: "",
      };
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
