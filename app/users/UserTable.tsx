import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  // passing users arr to sort fxn
  // asc sorts a -> z
  // sorts name by default

  return (
    <table className="table table-order">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
            {/* href is happening on server as opossed to client-side rendering in standard react */}
            {/* moving to server allows for the use of query string parameters (a way to pass state on server) rather than client-side state */}
            {/* no anchor tags here bc it causes a full page reload D:< */}
            {/* Link instead gives client-side navigation */}
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
