import React from "react";

// this loading page (located intentionally in the app directory) puts a suspense boundary between every page

const loading = () => {
  return <span className="loading loading-spinner loading-md"></span>;
};

export default loading;
