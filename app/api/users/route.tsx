// in a given folder (URL segment), we can either have a page file or route file, but can't have both...
// page files are for showing html content whereas route files are for handling http requests
// in this route file, we create one or more ROUTE HANDLERS- a fxn that handles an http request
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
import { error } from "console";

export async function GET(request: NextRequest) {
  // though we aren't using request: NextRequest we can't remove it, bc...
  // if it's removed, next.js will cache the result of this response on client side...
  // meaning if we hit this endpoint again, we'd see cached data (don't want this bc potentially stale data)

  // return NextResponse.json("hello");
  // hard coding data for now
  // can return any kind of message or obj
  // hitting http://localhost:3000/api/users gives us "hello"

  const users = await prisma.user.findMany();

  return NextResponse.json(users);
  // hitting http://localhost:3000/api/users gives us...
  // [
  //  {
  //   "id": 1,
  //   "name": "Name1"
  //   },
  //   {
  //   "id": 2,
  //   "name": "Name2"
  //   }
  // ]
}

// to create user, we send request to users endpoint and include user object in body of request
export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate -> if invalid return 400 -> else return data that was created
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // if (!body.name)
  //   return NextResponse.json({ error: "Name is required" }, { status: 400 });

  const user = await prisma.user.findUnique({
    // before user is created (and potentially gets 500 error if email is already in use)
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      // don't need other properties bc they have a default val assigned
    },
  });
  return NextResponse.json(newUser, { status: 201 });
}
