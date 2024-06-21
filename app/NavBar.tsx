"use client";
// have to make this a client component now bc with useSession hook, we access the context obj that...
// is passed using the SessionProvider
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  // useSession: custom react hook provided by next auth library...
  // used to access current session data and status within a component...
  // useSession hook returns obj w many properties... among them are:
  // status: indicates current authentication status of user
  // data: contains session data if user is authenticated
  // status can be 1 of 3 values: "authenticated", "loading", and "unauthenticated"

  return (
    <div className="flex bg-slate-200 p-5 gap-5">
      <Link href="/">Next.js</Link>
      {/* Link only downloads the content of the target page */}
      {/* Link also pre-fetches the links that are in the viewport... */}
      {/* ie on Users page, next.js will pre-fetch sortOrder for name and email to enhance performance time */}
      {/* when navigating in app, next.js stores payload of pages on client thru caching... */}
      {/* so, when navigating to another page, next.js wont make a request to backend again, it will reference client cache... */}
      {/* caches only exists for one session and clears after full page reload */}
      <Link href="/users">Users</Link>
      {status === "loading" && <div>Loading...</div>}
      {status === "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="ml-5">
            Sign Out
          </Link>
          {/* when clicked, link takes user to auto generated sign out page provided by next auth */}
        </div>
      )}
      {/* ! bc when status is loading we don't have user obj, but... */}
      {/* if status === "authenticated" we will always have a user here */}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
      {/* only want to render login link if the status is "unauthenticated" */}
    </div>
  );
};

export default NavBar;
