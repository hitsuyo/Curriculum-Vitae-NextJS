"use client";

/**
 * Tạo 1 cái AppProvider cho chức năng Context API.
 * Nhiệm vụ là để lưu sessionToken để dùng ở client.
 */

import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (sessionToken: string) => { },
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context || context == undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  initialSessionToken = "",
}: {
  children: React.ReactNode;
  initialSessionToken?: string;
}) {
  const [sessionToken, setSessionToken] = useState(initialSessionToken);
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </AppContext.Provider>
  );
}
