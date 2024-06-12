import React from "react";

// this not-found page (located intentionally in the app directory and intentionally named not-found) is another special file that next.js looks for
// for customizing default next.js not-found page
// will be rendered any time user goes to page that doesn't exist

const NotFoundPage = () => {
  return <div>The requested page doesn&apos;t exist.</div>;
  // production build doesn't like the apostrophe. It reccommends &apos;
};

export default NotFoundPage;
