'use client'

import { useRouter } from "next/navigation"; // Client
import { cookies } from "next/headers"; // Server

/**
 * Header là SSR nên không dùng trực tiếp hàm onClick,
 * Cách giải quyết là tạo component Client rồi import vô
 */

// const router = useRouter();


function useLogout() {
  async () => {
    await fetch('https://localhost:3000/api/logout', {
      method: "POST",
    }).then(async (res) => {
      res = await res.json();
      console.log(res.status)
      console.log(1)
    })
  }

  console.log("Click Logout")

  // return Response.json(
  //   {
  //     status: 200,
  //     headers: { 'Set-Cookie': `sessionToken=''}; Path=/; MaxAge=0` },
  //   }
  // )

  // router.refresh()

}

const LogoutButton = () => {
  return (
    <>
      {/* <a href="https://localhost:3000/api/logout"
        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
      >
        Sign out
      </a> */}

      {/* <button onClick={() => useLogout({ callbackUrl: '/', redirect: true })}> */}
      <button onClick={() => { useLogout(); callbackUrl: '/'; redirect: true }}>
        Sign out
      </button >
    </>
  );
};

export default LogoutButton;
