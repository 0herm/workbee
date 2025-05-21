import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text = lang === 'no' ? no : en
    const textPersonal = lang === 'no' ? noPersonal : enPersonal

    return (
        <div className='p-[4rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>{text.title}</h1>
                <p  className='font-light text-almostbright max-w-[40rem]'>{text.description}</p>
                <div className='flex flex-row gap-[0.75rem]'>

                    {/* Github */}
                    <Link href={textPersonal.links.github} className='group'>
                        <SiGithub className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-white' />
                    </Link>

                    {/* Gitlab */}
                    <Link href={textPersonal.links.gitlab} className='group'>
                        <SiGitlab className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#FC6D26]' />
                    </Link>

                    {/* LinkedIn */}
                    <Link href={textPersonal.links.linkedIn} className='group'>
                        <SiLinkedin className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#0a66c2]' />
                    </Link>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Education Section */}
                <div className="bg-dark p-6 rounded-lg shadow-md">
                    <div className="text-xl font-semibold mb-4 text-white">
                        {text.education.title}
                    </div>
                    <ol className="space-y-4">
                        {Object.values(text.education.degrees).map((item, index) => (
                            <li key={index} className="border-l-4 border-primary pl-4">
                                <span className="block text-lg font-medium text-white">{item.title}</span>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 text-almostbright text-sm mt-1">
                                    <span>{item.degree}</span>
                                    <span className="hidden md:inline mx-2">•</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                
                {/* Work Section */}
                <div className="bg-dark p-6 rounded-lg shadow-md">
                    <div className="text-xl font-semibold mb-4 text-white">
                        {text.work.title}
                    </div>
                    <ol className="space-y-4">
                        {Object.values(text.work.jobs).map((item, index) => (
                            <li key={index} className="border-l-4 border-primary pl-4">
                                <span className="block text-lg font-medium text-white">{item.company}</span>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 text-almostbright text-sm mt-1">
                                    <span>{item.position}</span>
                                    <span className="hidden md:inline mx-2">•</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
