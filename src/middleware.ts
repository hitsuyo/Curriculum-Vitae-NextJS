import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const privatePaths = ['/auth/me']
const logoutPaths = ['/api/logout']
const authPaths = ['/auth/login', '/auth/register']

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const sessionToken = request.cookies.get('sessionToken')?.value

    // Nếu path thuộc privatePaths mà ko có sessionToken
    if (privatePaths.some(path => pathname.startsWith(path)) && !sessionToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    if (logoutPaths.some(path => pathname.startsWith(path)) && !sessionToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    // Nếu login rồi, khi vào lại trang login/register thì phải redirect qua trang profile
    if (authPaths.some(path => pathname.startsWith(path)) && sessionToken) {
        return NextResponse.redirect(new URL('/auth/me', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [...privatePaths, ...authPaths, ...logoutPaths]
}