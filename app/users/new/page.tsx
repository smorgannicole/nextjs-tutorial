"use client";
// import { useRouter } from "next/router";
// ^^ won't work bc it's part of old pages router and it won't mount
import { useRouter } from "next/navigation";
// Router uses convention over configuration to define routes by looking for special files like page.tsx, layout.tsx, etc
// can colocate our pages and their building blocks (components, services, etc) which helps organize projects bc...
// we can keep highly related files next to each other- no need to dump all the components in a centralized components directory
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
