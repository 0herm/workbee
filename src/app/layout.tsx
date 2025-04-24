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
            <body className='bg-dark w-screen h-screen m-0 min-h-screen px-[4rem] pb-[1rem] font-[family-name:Inter] antialiased align-middle break-words leading-[1.5] tracking-normal'>
                <div className='relative bg-normal w-full h-full rounded-b-lg pt-[1rem]'>
                    <nav className='w-full flex justify-center'>
                        <NavBar />
                    </nav>
                    <main className='w-full'>
                        {children}
                    </main>
                    <footer className='absolute bottom-0 w-full'>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    )
}
