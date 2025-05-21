import Link from 'next/link'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'
import no from '@dictionaries/personal/no.json'
import en from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'

export default async function Footer() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text = lang === 'no' ? no : en

    const year = new Date().getFullYear()
    return (
        <div className='flex flex-row justify-between p-[2rem]'>
            <h1>Copyright © {year} {text.name}</h1>
            <div className='flex flex-row gap-[0.75rem]'>
                <Link href={text.links.github} className='group'>
                    <SiGithub className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-white' />
                </Link>
                <Link href={text.links.gitlab} className='group'>
                    <SiGitlab className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#FC6D26]' />
                </Link>
                <Link href={text.links.linkedIn} className='group'>
                    <SiLinkedin className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#0a66c2]' />
                </Link>
            </div>
        </div>
    )
}
