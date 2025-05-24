import LangToggle from '@components/langtoggle/LangToggle'
import { CircleUser } from 'lucide-react'
import Link from 'next/link'
import no from '@dictionaries/navBar/no.json'
import en from '@dictionaries/navBar/en.json'
import ThemeToggle from '@components/themetoggle/themeToggle'
import { cookies } from 'next/headers'
import MobileMenu from './mobileMenu'

type NavBarProps = {
    path: string
}

export default async function NavBar({path}: NavBarProps) {
    const page = path.split('/')[1]
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text : NavBarDictionary = lang === 'no' ? no : en

    return (
        <div className='w-full h-full flex flex-row px-[1rem] sm:px-0 justify-between sm:justify-around'>
            <div className='flex items-center bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Link href='/'>
                    <CircleUser className='size-[1.75rem]'/>
                </Link>
            </div>
            <div className='hidden sm:flex flex-row items-center gap-[2rem] bg-darker px-[1.5rem] rounded-full border-[0.15rem] border-light relative overflow-hidden'>
                <Link
                    href='/'
                    className='relative flex items-center h-full'
                >
                    {page === '' &&
                        <span
                            className="absolute left-1/2 -translate-x-1/2 z-0 w-16 h-8 rounded-full bg-teal-500/40 blur-md"
                            aria-hidden="true"
                        />
                    }
                    <h1 className="relative z-10">{text.links.about.title}</h1>
                </Link>
                <Link
                    href='projects'
                    className='relative flex items-center h-full transition-shadow duration-300'
                >
                    {page === 'projects' &&
                        <span
                            className="absolute left-1/2 -translate-x-1/2 z-0 w-16 h-8 rounded-full bg-cyan-500/40 blur-md"
                            aria-hidden="true"
                        />
                    }
                    <h1 className="relative z-10">{text.links.projects.title}</h1>
                </Link>
                <Link
                    href='skills'
                    className='relative flex items-center h-full transition-shadow duration-300'
                >
                    {page === 'skills' &&
                        <span
                            className="absolute left-1/2 -translate-x-1/2 z-0 w-16 h-8 rounded-full bg-blue-500/40 blur-md"
                            aria-hidden="true"
                        />
                    }
                    <h1 className="relative z-10">{text.links.skills.title}</h1>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-[0.5rem] bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <ThemeToggle />
                <LangToggle />
                <div className='block sm:hidden'>
                    <MobileMenu text={text} />
                </div>
            </div>
        </div>
    )
}
