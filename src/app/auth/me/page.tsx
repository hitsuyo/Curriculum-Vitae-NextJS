// import envConfig from '@/config'
import { cookies } from "next/headers";
import Profile from "@/app/auth/me/profile";
import { useToast } from "@/hooks/use-toast"

/**
 * Fetch đến server Back-end
 * API: https://laravel-repository-symlinks.laragon.com:8443/api/me/profile
 */

async function fetchProfile() {
  const cookieStore = cookies(); // hoặc await cookies()
  const sessionToken = cookieStore.get("sessionToken");

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/me/profile`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",

        /* Cách 1: Gửi Authorization qua Header */
        Authorization: `Bearer ${sessionToken}`,
        /* Cách 2: Gửi Token qua Cookie tốt hơn gửi Authorization qua Header */
        // Cookie: `sessionToken=${sessionToken}`
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
}

export default async function MeProfile() {
  /* Part 1: Submit login; get cookie từ browser (client) */

  /* Part 2: Get personal information */

  // const url = `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/me/profile`

  /* Fetch await phải nằm trong 1 hàm async */
  // const fetchResult = await fetchProfile()

  // }
  // console.log("parent profile", fetchResult)

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-sky-600 p-5">
          <h1 className="p-5">Profile</h1>
          {/* <div>Xin chào {result.payload.name}</div> */}
          <Profile />
        </div>
      </div>
    </>
  );
}
