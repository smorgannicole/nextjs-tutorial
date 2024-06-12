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
