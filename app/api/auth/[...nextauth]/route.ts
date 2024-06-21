import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
// adapters allow us to store user data in a db...
// if we use an adapter, when someone logs in, next auth will automatically store their data in our db

import prisma from "@/prisma/client";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
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
