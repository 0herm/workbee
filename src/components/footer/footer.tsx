import Link from 'next/link'
import { SiGithub, SiGitlab, SiLinkedin } from 'react-icons/si'
import no from '@dictionaries/footer/no.json'
import en from '@dictionaries/footer/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'

export default async function Footer() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text = lang === 'no' ? no : en
    const textPersonal = lang === 'no' ? noPersonal : enPersonal
    const year = new Date().getFullYear()
    const version = process.env.version || '1.0.0'

    return (
        <div className='flex flex-col sm:flex-row items-center p-[1.5rem] sm:p-[2rem] rounded-b-lg space-y-4'>
            <div className='flex flex-col w-full gap-[0.75rem]'>
                {/* Copyright */}
                <h1 className='text-sm sm:text-base text-almostbright text-center sm:text-left'>{text.copyright} © {year} {textPersonal.name}</h1>
                
                {/* Social Links */}
                <div className='flex justify-center sm:justify-start'>
                    <div className='flex flex-row gap-[0.75rem]'>
                        <Link href={textPersonal.links.github} className='group'>
                            <SiGithub className='fill-almostbright size-[1.25rem] group-hover:fill-bright' />
                        </Link>
                        <Link href={textPersonal.links.gitlab} className='group'>
                            <SiGitlab className='fill-almostbright size-[1.25rem] group-hover:fill-[#FC6D26]' />
                        </Link>
                        <Link href={textPersonal.links.linkedIn} className='group'>
                            <SiLinkedin className='fill-almostbright size-[1.25rem] group-hover:fill-[#0a66c2]' />
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Version */}
            <div className='h-min p-[0.5rem_0.75rem] rounded-lg bg-dark border border-extralight hover:border-superlight'>
                <span className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400'>v{version}</span>
            </div>
        </div>
    )
}
