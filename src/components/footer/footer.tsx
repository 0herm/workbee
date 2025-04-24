import Link from 'next/link'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className='flex flex-row justify-between p-[2rem]'>
            <h1>Copyright © {year} Dummy</h1>
            <div className='flex flex-row gap-[0.75rem]'>
                <Link href={'Dummy'} className='group'>
                    <SiGithub className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-white' />
                </Link>
                <Link href={'Dummy'} className='group'>
                    <SiGitlab className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#FC6D26]' />
                </Link>
                <Link href={'Dummy'} className='group'>
                    <SiLinkedin className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#0a66c2]' />
                </Link>
            </div>
        </div>
    )
}
