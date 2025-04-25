import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'
import no from '@text/landing/no.json'
import en from '@text/landing/en.json'
import { cookies } from 'next/headers'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text = lang === 'no' ? no : en

    return (
        <div className='p-[4rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>{text.title}</h1>
                <p  className='font-light text-almostbright max-w-[40rem]'>{text.description}</p>
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
            <div>
                <div>
                    <div>
                        {text.education.title}
                    </div>
                    <ol>
                        {Object.values(text.education.degrees).map((item, index) => (
                            <li key={index}>
                                <span className=''>{item.title}</span>
                                <div>
                                    <span>{item.degree}</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                {/* <div>
                    <div>
                        {text.work.title}
                    </div>
                    <ol>
                        {text.work.items.map((item, index) => (
                            <li key={index}>
                                <span className=''>{item.position}</span>
                                <div>
                                    <span>{item.company}</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div> */}
            </div>
        </div>
    )
}
