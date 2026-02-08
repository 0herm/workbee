import LangToggle from '@components/langtoggle/langToggle'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import no from '@dictionaries/navBar/no.json'
import en from '@dictionaries/navBar/en.json'
import ThemeToggle from '@components/themetoggle/themeToggle'
import { cookies } from 'next/headers'
import MobileMenu from './mobileMenu'
import NavBarAccent from './navAccent'

export default async function NavBar() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text : NavBarDictionary = lang === 'no' ? no : en

    return (
        <div className='
          flex size-full flex-row justify-between px-4
          sm:justify-around sm:px-0
        '>
            <div className='
              flex items-center rounded-full border-[0.15rem] border-light
              bg-darker p-2
            '>
                <Link href='/'>
                    <CircleUser className='size-7'/>
                </Link>
            </div>
            <div className='
              relative hidden flex-row items-center gap-8 overflow-hidden
              rounded-full border-[0.15rem] border-light bg-darker px-6
              sm:flex
            '>
                <Link
                    href='/'
                    className='relative flex h-full items-center'
                >
                    <NavBarAccent page='' color='bg-teal-500/40'/>
                    <h1 className='relative z-10'>{text.links.about.title}</h1>
                </Link>
                <Link
                    href='projects'
                    className='relative flex h-full items-center'
                >
                    <NavBarAccent page='projects' color='bg-cyan-500/40'/>
                    <h1 className='relative z-10'>{text.links.projects.title}</h1>
                </Link>
                <Link
                    href='skills'
                    className='relative flex h-full items-center'
                >
                    <NavBarAccent page='skills' color='bg-blue-500/40'/>
                    <h1 className='relative z-10'>{text.links.skills.title}</h1>
                </Link>
            </div>
            <div className='
              flex flex-row items-center gap-2 rounded-full border-[0.15rem]
              border-light bg-darker p-2
            '>
                <ThemeToggle />
                <LangToggle />
                <div className='
                  block
                  sm:hidden
                '>
                    <MobileMenu text={text} />
                </div>
            </div>
        </div>
    )
}
