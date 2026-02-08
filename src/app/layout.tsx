import type { Metadata, Viewport } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
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

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    display: 'swap',
})

export default async function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
    const Cookies = await cookies()
    const theme = Cookies.get('theme')?.value || 'dark'
    const lang = (Cookies.get('lang')?.value || 'no') as Lang

    return (
        <html lang={lang} className={theme} suppressHydrationWarning>
            <head/>
            <body className={`
              ${jetbrainsMono.className}
              relative m-0 min-h-screen w-screen overflow-x-hidden bg-dark pb-8
              align-middle leading-normal tracking-normal wrap-break-word
              antialiased
              sm:px-8
              md:px-16
              lg:px-32
            `}>
                <div className='
                  fixed inset-0 -z-10 max-h-screen rounded-b-xl border-x
                  border-b border-light/20 bg-normal
                  sm:mx-8
                  md:mx-16
                  lg:mx-32
                '></div>
                <div className='
                  relative grid min-h-screen w-full
                  grid-rows-[min-content_1fr_min-content] rounded-b-xl bg-normal
                  pt-24
                '>
                    <nav className='
                      fixed top-0 z-99 flex w-full justify-center rounded-b-xl
                      border-b border-light/10 bg-normal/80 py-4
                      backdrop-blur-md
                      sm:w-[calc(100vw-4rem)]
                      md:w-[calc(100vw-8rem)]
                      lg:w-[calc(100vw-16rem)]
                    '>
                        <NavBar />
                    </nav>
                    <main className='w-full'>
                        {children}
                    </main>
                    <footer className='mt-auto w-full'>
                        <Footer />
                    </footer>
                </div>
            </body>
        </html>
    )
}
