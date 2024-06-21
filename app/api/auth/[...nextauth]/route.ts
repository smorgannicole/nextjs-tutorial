import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
// allows users to login with any email and password rather than relying on only google
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// adapters allow us to store user data in a db...
// if we use an adapter, when someone logs in, next auth will automatically store their data in our db
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // checking if user is valid. if valid, return valid user obj. else return null...
        // first we check if credentials obj has valid email and psswrd
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) return null;

        // now we have to check psswrd and make sure it matches email. using bcrypt library to do this
        // using bcrypt we can ecrypt psswrds upon inserting them into db
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword!
        );
        // will return a boolean
        // we're comparing two psswrds: 1st- one passed in credentials obj (sign in form)...
        // 2nd- psswrd in user model (user model currently doesn't have a psswrd field so have to make a migration)
        // ! bc since hashedPassword was made optional in model, but compare method doesn't accept null vals and...
        // we know at this point, this user would have a hashed psswrd in db

        return passwordsMatch ? user : null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      // process.env- read our environment variables, in this case, the one named GOOGLE_CLIENT_ID
      // ! tells ts we def have a value stored in that variable and it won't be undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};
// by defining authOptions as a separate export, this obj can be used elsewhere in app

const handler = NextAuth(authOptions);
// handler fxn and give it a configuration obj

export { handler as GET, handler as POST };
// exporting this fxn with 2 diff names: GET & POST so...
// any GET or POST request sent to this endpoint will be handled inside handler fxn so...
// what we're doing here is letting next auth expose a bunch of endpoints starting with /auth
