import { getToken } from "next-auth/jwt";
// getToken fxn is used to retrieve json web token from a request
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
  });
  // await used to pause execution of fxn until getToken promise resolves
  // getToken({ req: request }): invokes getToken with obj containing the request...
  // tells getToken to look for a jwt in provided request
  return NextResponse.json(token);
}
// viewing json web token in browser (id card that client sends to server w each request)
// recap: when user logs in, nextauth creates an authentication session for that user and...
// session is represented via json web token
// {
//   "name": "Morgan Smith",
//   "email": "smorgannicole@gmail.com",
//   "picture": "https://lh3.googleusercontent.com/a/ACg8ocK0TwbJNJbdJh_vhfhswoyhLMLVB0EIB8ju7aGFoF-ZSqkBrg=s96-c",
//   "sub": "117641777469687784167",
//   "iat": 1718747195,
//   "exp": 1721339195,
//   "jti": "99f31676-602f-4da1-bb22-75f25fb7a91d"
// }
