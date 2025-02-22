import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import prismadb from "./prismadb";

const providers = [
  Credentials({
    credentials: {
      password: { label: "Password", type: "text" },
      email: { label: "Email", type: "text" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }
      // Check If email is available or not
      const user = await prismadb.user.findFirst({
        where: {
          email: credentials.email,
        },
      });

      if (!user) {
        return null;
      }

      const isPasswordValid = credentials.password === user.password;
      if (!isPasswordValid) {
        return null;
      }

      return {
        email: user.email,
        name: user.name,
      };
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  debug: true,
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.password = user.password;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
