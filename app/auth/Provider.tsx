"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
// SessionProvider is like a container that wraps around application to manage user authentication sessions
// SessionProvider uses react context to pass the session down our component tree...
// react context is a feature in react that allows the sharing of data (like user auth info) across entire component tree...
// without passing props down manually at every level

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
