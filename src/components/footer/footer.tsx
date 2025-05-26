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
    return (
        <div className='flex flex-row justify-between p-[1rem] sm:p-[2rem]'>
            <h1 className='text-sm sm:text-base'>{text.copyright} © {year} {textPersonal.name}</h1>
            <div className='flex flex-row gap-[0.75rem]'>
                <Link href={textPersonal.links.github} className='group'>
                    <SiGithub className='fill-almostbright size-[1.25rem] group-hover:fill-white' />
                </Link>
                <Link href={textPersonal.links.gitlab} className='group'>
                    <SiGitlab className='fill-almostbright size-[1.25rem] group-hover:fill-[#FC6D26]' />
                </Link>
                <Link href={textPersonal.links.linkedIn} className='group'>
                    <SiLinkedin className='fill-almostbright size-[1.25rem] group-hover:fill-[#0a66c2]' />
                </Link>
            </div>
        </div>
    )
}
