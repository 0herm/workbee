import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'
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
                <div className="flex flex-col gap-1">
                    <span className="mb-2 text-sm text-bright opacity-50">portfolio@nixos:~$ ./init.sh</span>
                    <h1 className='max-w-120 text-4xl font-bold'>
                        {text.title}<span className="animate-cursor text-bright">_</span>
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
                        <SiLinkedin className='
                          size-5 fill-almostbright
                          group-hover:fill-[#0a66c2]
                        ' />
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
