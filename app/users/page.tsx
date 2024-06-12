import React, { cache, Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}
// to sort data, access to query string parameters is needed
// that can't be done in components, only PAGES
// anything URL related must be accessed here and passed to components

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
        {/* suspense is a react 18 feature that can be used to show a fallback UI while component is being rendered */}
        {/* fallback prop is what we want to display while we wait */}
        {/* server generates loading page and sends it to client, but it doesn't close the connection; it doesn't terminate the request-response lifecycle... */}
        {/* it will then wait for table component to render and then send addtl data back to client. this is called STREAMING (same technology as streaming videos, audios, etc) */}
        {/* after all data has been sent and client has a fully rendered page, server closes the connection */}
        {/* users get faster initial response (seeing loading state). then content updates in place as it becomes ready, improving perceived performance */}
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
