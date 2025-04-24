import { CircleUser, Globe, Sun } from 'lucide-react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className='w-full flex flex-row justify-around'>
            <div className='bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Link href='/'>
                    <CircleUser className='size-[1.75rem]'/>
                </Link>
            </div>
            <div className='flex flex-row items-center gap-[2rem] bg-darker px-[1.5rem] py-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Link href='/'>
                    <h1>About</h1>
                </Link>
                <Link href='/projects'>
                    <h1>Projects</h1>
                </Link>
                <Link href='/skills'>
                    <h1>Skills</h1>
                </Link>
            </div>
            <div className='flex flex-row gap-[0.5rem] bg-darker p-[0.5rem] rounded-full border-[0.15rem] border-light'>
                <Sun className='size-[1.75rem]'/>
                <Globe className='size-[1.75rem]'/>
            </div>
        </div>
    )
}
