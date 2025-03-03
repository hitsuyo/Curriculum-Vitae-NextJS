// import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache";
// import { useAppContext } from "@/app/AppProvider";

/** Tạo folder api và code trong này thì tự động hiểu là api */

/* Đây là API thuộc Next server */

/* Nhiệm vụ là xóa cookie sessionToken để logout */

export async function POST() {
    // Tell Next.js to purge the entire cache, no stale data should stay after the redirect back to the index page.
    // revalidatePath("/", "layout");

    // const res = await request.json()
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get("sessionToken")

    if (!sessionToken) {
        return Response.json(
            { message: 'sessionToken không tồn tại !' },
            {
                status: 400,
            }
        )
    }

    /* Delete cookie for browser's client */
    cookieStore.delete("sessionToken")


    // console.log("I'm here")

    // const { setSessionToken } = useAppContext();
    // setSessionToken("")

    // console.log(sessionToken)

    // return Response.json({
    //     status: 200,
    // })

    /** Delete cookie bằng cách set Expire */
    // return Response.json(
    //     {
    //         status: 200,
    //         headers: { 'Set-Cookie': `sessionToken=${sessionToken}; Path=/; MaxAge=0` },
    //     }
    // )

    // return NextResponse.redirect('/auth/login', {
    //     headers: {
    //         "Clear-Site-Data": `"*"`,

    //         "Cache-Control": "no-store",
    //     },
    // });
}