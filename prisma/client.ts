// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
// export default prisma;
// // this obj gives us access to the models defined in schema..
// // ex: prisma.user.create for creating a user
// // any time a model is defined or changed and then a migration is created, prisma CLI automatically generates this PrismaClient so...
// // it's always in sync with our models
// // technically, this prisma client can be created anywhere in app, but...
// // best practice tells us we should make sure there's only a single instance running
// // the 1st time this file is imported in the app somewhere, there's a new instance of the PrismaClient created and...
// // 2nd time this file is imported, this code isn't re-executed (it's cached) so the result will be reused
// // fast refresh (only in development- changing source code refreshes some modules) causes the creation of too many prisma clients (error)...
// // must borrow some code from prisma documentation to avoid this

import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
// it's using this ^^ global namespace to store a single instance of prisma
// so, when initializing this constant, if there's a prisma client in the global space, it's used. otherwise, a new prisma client is created

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
