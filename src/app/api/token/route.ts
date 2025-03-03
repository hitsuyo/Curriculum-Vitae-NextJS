import { type NextRequest } from 'next/server'

/** Tạo folder api và code trong này thì tự động hiểu là api */

/* Đây là API thuộc Next server */

/* Nhiệm vụ là set 1 cookie vào Client */

export async function POST(request: NextRequest) {
    const res = await request.json()

    const accessToken = res.accessToken /* Token trả về sau khi login */

    if (!accessToken) {
        return Response.json(
            { message: 'Không nhận được session token !' },
            {
                status: 400,
            }
        )
    }

    /* Set cookie for browser's client */
    return Response.json(
        { res },
        {
            status: 200,
            headers: { 'Set-Cookie': `sessionToken=${accessToken}; Path=/; HttpOnly=true` }, /* HttpOnly để ngăn Javascript có thể đọc được, ngăn attacker đánh cắp cookie */
        }
    )
}