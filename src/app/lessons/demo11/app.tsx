"use client";
import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";
import styles from "./Demo11.module.css";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo11
*/

interface AppContextType {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextType | null>(null);

function ContextTutorial() {
  const [username, setUsername] = useState<string>("");

  return (
    <div className={styles.demo11}>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login /> <User />
      </AppContext.Provider>
    </div>
  );
}

export default ContextTutorial;
