import Link from 'next/link'
import { SiGithub, SiGitlab } from 'react-icons/si'
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
                            <svg 
                                width='256'
                                height='256'
                                preserveAspectRatio='xMidYMid'
                                viewBox='0 0 256 256'
                                className='size-5 fill-almostbright group-hover:fill-[#0a66c2]'
                            >
                                <path d='M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453' />
                            </svg>
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
