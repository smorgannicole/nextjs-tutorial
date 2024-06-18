import NextAuth from "next-auth";

const handler = NextAuth({});
// handler fxn and give it a configuration obj

export { handler as GET, handler as POST };
// exporting this fxn with 2 diff names: GET & POST so...
// any GET or POST request sent to this endpoint will be handled inside handler fxn so...
// what we're doing here is letting next auth expose a bunch of endpoints starting with /auth
