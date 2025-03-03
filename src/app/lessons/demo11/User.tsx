"use client";
import React, { createContext, useContext } from "react";
import { AppContext } from "./page.tsx";

function User() {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1 className="text-red-500">User: {username}</h1>
    </div>
  );
}

export default User;
