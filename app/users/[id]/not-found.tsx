import React from "react";

// this allows for a more customized not-found message/page

const UserNotFoundPage = () => {
  return <div>This user doesn&apos;t exist.</div>;
  // production build doesn't like the apostrophe. It reccommends &apos;
};

export default UserNotFoundPage;
