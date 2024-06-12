import Link from "next/link";
import React from "react";

const NavBar = () => {
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
    </div>
  );
};

export default NavBar;
