import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // validate request body

  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  // making sure valid user id

  return NextResponse.json({ id: 1, name: body.name, price: body.price });
  // if so, update product and return updated product
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json({});
}
