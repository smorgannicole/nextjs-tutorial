// in a given folder (URL segment), we can either have a page file or route file, but can't have both...
// page files are for showing html content whereas route files are for handling http requests
// in this route file, we create one or more ROUTE HANDLERS- a fxn that handles an http request
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // though we aren't using request: NextRequest we can't remove it, bc...
  // if it's removed, next.js will cache the result of this response on client side...
  // meaning if we hit this endpoint again, we'd see cached data (don't want this bc potentially stale data)

  // return NextResponse.json("hello");
  // hard coding data for now
  // can return any kind of message or obj
  // hitting http://localhost:3000/api/users gives us "hello"

  return NextResponse.json([
    {
      id: 1,
      name: "Name1",
    },
    { id: 2, name: "Name2" },
  ]);
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
