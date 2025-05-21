import type { Metadata, Viewport } from 'next'
import './globals.css'

import NavBar from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import { cookies } from 'next/headers'
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
    const theme = 'dark'
    const lang = (Cookies.get('lang')?.value || 'no') as Lang

    return (
        <html lang='en' className={`${theme}`} suppressHydrationWarning>
            <head/>
            <body className='bg-dark w-screen min-h-screen m-0 sm:px-[2rem] md:px-[4rem] lg:px-[8rem] pb-[2rem] font-[family-name:Inter] antialiased align-middle break-words leading-[1.5] tracking-normal'>
                <div className='relative bg-normal w-full min-h-screen rounded-b-lg pt-[1rem] grid grid-rows-[min-content_1fr_min-content]'>
                    <nav className='w-full flex justify-center'>
                        <NavBar lang={lang} />
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
