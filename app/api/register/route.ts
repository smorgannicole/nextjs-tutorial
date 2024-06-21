import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";
// to make sure in the body we have a valid email and password

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  // could also add uppercase requirement, number, etc
});
// creating a schema

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  // returns a validation obj

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // if request is valid, we have to make sure we don't have a user in the db with same email
  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  // else (if email is unique and not in db), we need to hash their password
  const hashedPassword = await bcrypt.hash(body.password, 10);
  // 2nd arg is encryption level
  const newUser = await prisma.user.create({
    data: {
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email });
}
