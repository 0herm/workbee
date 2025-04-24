import type { Metadata, Viewport } from 'next'
import './globals.css'

import NavBar from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

export const metadata: Metadata = {
    title: 'Dummy',
    description: 'From frontend to firewall — a student of Digital Infrastructure and Cybersecurity',
}

export const viewport: Viewport = {
    themeColor: 'background',
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const theme = 'dark'
    return (
        <html lang='en' className={`${theme}`} suppressHydrationWarning>
            <head/>
            <body className='bg-dark w-screen h-screen m-0 min-h-screen sm:px-[2rem] md:px-[4rem] lg:px-[8rem] pb-[1rem] font-[family-name:Inter] antialiased align-middle break-words leading-[1.5] tracking-normal'>
                <div className='relative bg-normal w-full h-full rounded-b-lg pt-[1rem] grid grid-rows-[min-content_1fr_min-content]'>
                    <nav className='w-full flex justify-center'>
                        <NavBar />
                    </nav>
                    <main className='w-full h-full'>
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
