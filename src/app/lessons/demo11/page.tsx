"use client";
import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";
import styles from "./Demo11.module.css";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo11
*/

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");

  return (
    <div className={styles.demo10}>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </AppContext.Provider>
    </div>
  );
}

export default ContextTutorial;
