"use client";

// import envConfig from '@/config'
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState, useActionState, useEffect, useContext, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation"; // Client
import { cookies } from "next/headers"; // Server
import { useAppContext } from "@/app/AppProvider";

import axios from "axios";

export default function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();

  /* CSRF-TOKEN tạm không dùng, vì phía Back-end đã setup bỏ qua validate Csrf token cho các URL bên Front-end */
  /* TODO: Dùng CSRF-TOKEN khi dùng method POST */
  // const [csrfToken, setCsrfToken] = useState("")
  // useEffect(() => {
  //   axios
  //       .get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/csrf-cookie`)
  //       .then(res => {
  //           setCsrfToken(res.data.csrf)
  //       })
  // }, [])

  /* accessToken is used when call to Nextjs server to set token */
  const [accessToken, setAccessToken] = useState("");

  const { sessionToken, setSessionToken } = useAppContext();
  console.log("sessionToken (Context API)", sessionToken ?? null);

  /* Khi sessionToken có sụ thay đổi */
  useEffect(() => {
    // if (sessionToken !== null) {
    toast({
      title: "Login Page",
      description: "Chưa xác thực người dùng",
    });
    // }
  }, [sessionToken])

  // async function submitLogin(event: FormEvent<HTMLFormElement>) {
  async function submitLogin() {
    // event.preventDefault()
    console.log("Submit login");

    try {
      // console.log("csrf", csrfToken)

      /* Cách 1: Dùng fetch */

      await loginWithFetch()

      /* Cách dùng axios */
      // await loginWithAxios();

      /* Set Token for Client - Nextjs server */
      /* Có thể lần đầu ko set được cookie 'sessionToken' xuống browser */
      /* Thử login lại sẽ được */
      const setTokenResult = await fetch("https://localhost:3000/api/token", {
        method: "POST",
        body: JSON.stringify({
          accessToken: accessToken,
        }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const payload = await res.json();
        const data = {
          status: res.status,
          payload,
        };
        if (!res.ok) {
          throw data;
        }
        console.log("set access token for browser OK");
      });

      router.push('/auth/me')
      router.refresh()
    } catch (error) {
      // handleErrorApi({
      //     error,
      //     setError: form.setError
      // })
      console.log(error);
    } finally {
      // setLoading(false)
    }
  }

  return (
    <>
      <form id="login-form" action={submitLogin} className="space-y-3">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
          <div className="w-full">
            <div>
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="email"
              >
                Email
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={6}
                />
              </div>
            </div>
          </div>
          <Button className="mt-4 w-full">Log in</Button>
        </div>
      </form>
    </>
  );

  async function loginWithFetch() {
    var postData = {
      email: "test@example.com",
      password: "123456789",
    };

    const result = await fetch(
      //  `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/api/authentication`, // chưa fix được
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/authentication`,
      {
        method: "POST",
        body: JSON.stringify(postData),

        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          // 'Access-Control-Allow-Methods': 'POST',
          // 'Access-Control-Allow-Credentials': 'true',
          // 'X-CSRF-TOKEN': csrfToken,
        },
        // credentials: 'same-origin',
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
      setAccessToken(payload.accessToken); // set state cho accessToken
      console.log("Login thành công. accessToken : ", accessToken);
    });

    toast({
      title: "Login",
      description: "Login thành công",
    });
  }

  async function loginWithAxios() {
    await axios
      // CSRF保護の初期化
      .get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/csrf-cookie`,
      )
      .then((res) => {
        // ログイン処理
        axios
          .post(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/authentication`,
            {
              email: "test@example.com",
              password: "123456789",
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
                // "X-CSRF-TOKEN": res.data.csrf
              },
            },
          )
          .then((res) => {
            // Nếu login thành công, nhận được accessToken, set state cho accessToken
            setAccessToken(res.data.accessToken);
            console.log("Login thành công. accessToken : ", accessToken);
          })
          .catch((err) => {
            console.log(err);
          });
      });
  }
}
