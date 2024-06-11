import React from "react";

interface Props {
  params: { id: number };
  //property called params (also an obj)
}
//defines shape of props obj

const UserDetailPage = ({ params: { id } }: Props) => {
  // this approach only works in pages
  // if a component on this page needed id, it would have to be grabbed at page level and passed as props
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
