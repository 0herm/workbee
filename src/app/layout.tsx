import type { Metadata, Viewport } from 'next'
import './globals.css'

import NavBar from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import { cookies, headers } from 'next/headers'
import en from '@dictionaries/personal/en.json'

export const metadata: Metadata = {
    title: en.websiteTitle,
    description: en.websiteDescription,
}

export const viewport: Viewport = {
    themeColor: 'background',
}

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const Cookies = await cookies()
    const theme = Cookies.get('theme')?.value || 'dark'
    const lang = (Cookies.get('lang')?.value || 'no') as Lang
    const Headers = headers()
    const path = (await Headers).get('x-current-path') || ''

    return (
        <html lang={lang} className={theme} suppressHydrationWarning>
            <head/>
            <body className='relative bg-dark w-screen min-h-screen m-0 sm:px-[2rem] md:px-[4rem] lg:px-[8rem] pb-[2rem] font-[family-name:Inter] antialiased align-middle break-words leading-[1.5] tracking-normal overflow-x-hidden'>
                <div className="fixed sm:mx-[2rem] md:mx-[4rem] lg:mx-[8rem] inset-0 bg-normal max-h-[calc(100vh-2rem)] -z-10 rounded-b-lg"></div>
                <div className='relative bg-normal w-full min-h-screen rounded-b-lg pt-[6rem] grid grid-rows-[min-content_1fr_min-content]'>
                    <nav className='fixed w-full sm:w-[calc(100vw-4rem)] md:w-[calc(100vw-8rem)] lg:w-[calc(100vw-16rem)] top-0 py-[1rem] flex justify-center backdrop-blur-xs z-99'>
                        <NavBar path={path} />
                    </nav>
                    <main className='w-full'>
                        {children}
                    </main>
                    <footer className='w-full mt-auto'>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    )
}
