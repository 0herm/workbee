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
        <div className='
          flex flex-col items-center space-y-4 rounded-b-lg p-6
          sm:flex-row sm:p-8
        '>
            <div className='flex w-full flex-col gap-3'>
                {/* Copyright */}
                <h1 className='
                  text-center text-sm text-almostbright
                  sm:text-left sm:text-base
                '>{text.copyright} © {year} {textPersonal.name}</h1>
                
                {/* Social Links */}
                <div className='
                  flex justify-center
                  sm:justify-start
                '>
                    <div className='flex flex-row gap-3'>
                        <Link href={textPersonal.links.github} className='group'>
                            <SiGithub className='
                              size-5 fill-almostbright
                              group-hover:fill-bright
                            ' />
                        </Link>
                        <Link href={textPersonal.links.gitlab} className='group'>
                            <SiGitlab className='
                              size-5 fill-almostbright
                              group-hover:fill-[#FC6D26]
                            ' />
                        </Link>
                        <Link href={textPersonal.links.linkedIn} className='
                          group
                        '>
                            <SiLinkedin className='
                              size-5 fill-almostbright
                              group-hover:fill-[#0a66c2]
                            ' />
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Version */}
            <div className='
              h-min rounded-sm border border-extralight bg-dark
              p-[0.25rem_0.75rem] font-mono text-almostbright
            '>
                <span>v{version}</span>
            </div>
        </div>
    )
}
