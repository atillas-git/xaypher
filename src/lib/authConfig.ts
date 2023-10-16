import User from "@/models/User";
import { AuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

interface NSession extends Session {
  id?: string;
  accessToken?: string | unknown;
}

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }
        const user = await User.findOne({ email: credentials?.email });
        if (!user) {
          return null;
        }
        const compare = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!compare) {
          return null;
        }
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      (session as NSession).accessToken = token.accessToken;
      (session as NSession).id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
export default authOptions;
