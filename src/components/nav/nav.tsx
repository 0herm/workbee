'use client'

import { CircleUser, Globe, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
    const page = usePathname().split('/')[1]

    return (
        <div className='w-full h-full flex flex-row justify-around'>
            <div className='flex items-center bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Link href='/'>
                    <CircleUser className='size-[1.75rem]'/>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-[2rem] bg-darker px-[1.5rem] rounded-full border-[0.15rem] border-light'>
                <Link href='/' className='relative flex items-center h-full'>
                    <h1>About</h1>
                    {page === '' &&
                        <span className='absolute inset-x-1 -bottom-[0.15rem] h-[0.15rem] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0'></span>
                    }
                </Link>
                <Link href='/projects' className='relative flex items-center h-full'>
                    <h1>Projects</h1>
                    {page === 'projects' &&
                        <span className='absolute inset-x-1 -bottom-[0.15rem] h-[0.15rem] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0'></span>
                    }
                </Link>
                <Link href='/skills' className='relative flex items-center h-full'>
                    <h1>Skills</h1>
                    {page === 'skills' &&
                        <span className='absolute inset-x-1 -bottom-[0.15rem] h-[0.15rem] bg-gradient-to-r from-sky-500/0 via-sky-500/40 to-sky-500/0'></span>
                    }
                </Link>
            </div>
            <div className='flex flex-row items-center gap-[0.5rem] bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Sun className='size-[1.75rem]'/>
                <Globe className='size-[1.75rem]'/>
            </div>
        </div>
    )
}
