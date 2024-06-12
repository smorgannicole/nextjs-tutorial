// parent folder ([id]) is considered a route parameter
// to acces route parameters, we need to pass props to this component via typescript interfaces
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: number };
  //property called params (also an obj)
}
// to access
//defines shape of props obj

const UserDetailPage = ({ params: { id } }: Props) => {
  // this approach only works in pages
  // if a component on this page needed id, it would have to be grabbed at page level and passed as props
  if (id > 10) notFound();
  // will redirect user to not-found page in app directory unless there's a not-found page in parent directory ([id])
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
