import Link from 'next/link'
import { SiGithub, SiGitlab } from 'react-icons/si'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noProjects from '@dictionaries/projects/no.json'
import enProjects from '@dictionaries/projects/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'
import { Briefcase } from 'lucide-react'
import Contact from '@components/contact/contact'
import ProjectSection from '@components/section/projectsection'
import Timeline from '@components/timeline/timeline'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text : LandingPageDictionary = lang === 'no' ? no : en
    const textProjects : ProjectsDictionary = lang === 'no' ? noProjects : enProjects
    const textPersonal = lang === 'no' ? noPersonal : enPersonal

    return (
        <div className='
          flex flex-col gap-20 p-6
          sm:p-16
        '>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <span className='mb-2 text-sm text-bright opacity-50'>portfolio@nixos:~$ ./init.sh</span>
                    <h1 className='max-w-120 text-4xl font-bold'>
                        {text.title}<span className='animate-cursor text-bright'>_</span>
                    </h1>
                </div>
                <p className='
                  max-w-160 border-l-2 border-extralight py-1 pl-4 font-light
                  text-almostbright
                '>{text.description}</p>
                <div className='mt-2 flex flex-row gap-3'>

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

                    <Link href={textPersonal.links.linkedIn} className='group'>
                        <svg 
                            width='256'
                            height='256'
                            preserveAspectRatio='xMidYMid'
                            viewBox='0 0 256 256'
                            className='size-5 fill-almostbright group-hover:fill-[#0a66c2]'
                        >
                            <path d='M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453'/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div>
                <h2 className='
                  mb-12 flex items-center gap-3 text-xl font-bold
                  sm:text-3xl
                '>
                    <span className='
                      rounded-lg bg-linear-to-br from-blue-500/20
                      to-purple-500/20 p-2
                    '>
                        <Briefcase className='size-6 text-blue-400' />
                    </span>
                    {text.experience}
                </h2>
                <div className='
                  grid gap-12
                  md:grid-cols-2
                '>
                    <Timeline title={text.work.title} items={text.work.jobs} color='blue' />
                    <Timeline title={text.education.title} items={text.education.degrees} color='purple' />
                </div>
            </div>

            <ProjectSection text={textProjects} type='personal' />
            <ProjectSection text={textProjects} type='contribution' />

            <div className='flex w-full justify-center'>
                <div className='
                  flex w-full max-w-200 flex-col items-center p-8
                  sm:px-16
                  lg:px-32
                '>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
