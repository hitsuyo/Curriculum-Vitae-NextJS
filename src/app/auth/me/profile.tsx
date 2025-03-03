"use client";

import { useAppContext } from "@/app/AppProvider";
// import { cookies } from 'next/headers'
import { useEffect } from "react";

export default function Profile() {
  const { sessionToken } = useAppContext(); // cốt lõi là dùng useContext()

  console.log("sessionToken (Context API)", sessionToken);

  useEffect(() => {
    const fetchRequest = async () => {
      const _result = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/me/profile`, // Backend API
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionToken}`, // Cách 1
            // Cookie: `sessionToken=${sessionToken}` // Cách 2
          },
        },
      ).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        return data;
      });
      console.log("child profile", _result);
    };
    fetchRequest();
  }, [sessionToken]);

  return (
    <>
      <div>profile</div>
    </>
  );
}
