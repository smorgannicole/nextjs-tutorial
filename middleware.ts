// sidenote- spelling of this file is important: it's one of the conventions next.js looks for
// middleware protects our routes
// it allows us to run code before a request is completed
// we can create a middleware fxn that gets exectued on every request
// in this fxn we can check the user's session...
// if user is trying to access a private part of the website w/o having a session...
// we can redirect them to the login page...
// HOWEVER, most the time we don't want to redirect user on every request, only certain paths...
// to control that we export const called config (another naming convention next.js looks for)

// import { NextRequest, NextResponse } from "next/server";
// // to export user to automated next auth google login vvvv
// import middleware from "next-auth/middleware";
// export default middleware;
// there's an easier way to import and export this fxn all in one line tho...

export { default } from "next-auth/middleware";

// to export user to designated page vvvv
// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/new-page", request.url));
//   // logic to redirect user is already implemented in next auth
//   // 1st arg: pass the url for page we're trying to redirect user to
//   // 2nd arg: pass base url of our website (in production will be localhost, deployment will be something else)...
//   // request.url will grab whatever it is
// }

export const config = {
  matcher: ["/dashboard/:path*"],
  // matcher property can either be set to a string which represents a path or...
  // an arr of strings for passing multiple paths
  // the middleware fxn will only be executed by the endpoints we provide here
  // can also pass parameters ie "/user/:path"...
  // if an asterisk is following parameter (/:path*) we're going to have zero or more parameters (still redirects /users)
  // /:path+ would mean to include one or more parameter while...
  // /:path? would mean to include zero or one
};
