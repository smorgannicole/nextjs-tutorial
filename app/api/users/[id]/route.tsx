import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

// interface Props {
//   params: { id: number };
// }

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // *fetch data from actual db* if not found, return 404. else return data
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: "Name1" });
  // hitting http://localhost:3000/api/users/1 gives us...
  // {
  //   "id": 1,
  //   "name": "Name1"
  // }
  // hitting http://localhost:3000/api/users/11 gives us...
  // {
  //   "error": "User not found"
  // }
}

// to update a user, should send request to endpoint that represents individual user via id and include updated user obj
// PUT for replacing obj, PATCH for updating one or more properties

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // validate request body -> if invalid, return 400 -> else, fetch user by given id -> if doesn't exist, return 404 -> else, update user in db and return updated user
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({ error: "Name is required" }, { status: 400 });

  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({ id: 1, name: body.name });
}

// to delete a user, send delete request to the endpoint that represents individual user
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  // fetch user from db -> if not found, return 404 -> else, delete user from db and return 200 response
  if (params.id > 10)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json({});
  // can return empty response ^^^ or include user that was deleted...
  // no right or wrong- different apps have different requirements
}
