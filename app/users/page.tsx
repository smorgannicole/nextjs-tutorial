import React, { cache } from "react";
import UserTable from "./UserTable";

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
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
