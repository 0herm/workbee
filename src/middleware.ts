import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const theme = req.cookies.get('theme')?.value || 'dark'
    const lang = req.cookies.get('lang')?.value || 'no'
    const res = NextResponse.next()
    res.headers.set('x-theme', theme)
    res.headers.set('x-lang', lang)
    res.headers.set('x-current-path', req.nextUrl.pathname)
    return res
}
