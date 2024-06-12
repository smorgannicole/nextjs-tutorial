"use client";
// import { useRouter } from "next/router";
// ^^ won't work bc it's part of old pages router and it won't mount
import { useRouter } from "next/navigation";
import React from "react";

const NewUserPage = () => {
  const router = useRouter();
  return (
    <button className="btn btn-primary" onClick={() => router.push("/users")}>
      Create
    </button>
  );
  // in anon fxn in onClick we can't use Link, so we must use programmatic navigation ie Router obj
};

export default NewUserPage;
