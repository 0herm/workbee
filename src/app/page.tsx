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
        <div className='p-[1.5rem] sm:p-[4rem] flex flex-col gap-[5rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>{text.title}</h1>
                <p className='font-light text-almostbright max-w-[40rem]'>{text.description}</p>
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

            <div>
                <h2 className='text-xl sm:text-3xl font-bold mb-[3rem] flex items-center gap-[0.75rem]'>
                    <span className='p-[0.5rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg'>
                        <Briefcase className='size-[1.5rem] text-blue-400' />
                    </span>
                    {text.experience}
                </h2>
                <div className='grid md:grid-cols-2 gap-[3rem]'>
                    <Timeline title={text.work.title} items={text.work.jobs} color='blue' />
                    <Timeline title={text.education.title} items={text.education.degrees} color='purple' />
                </div>
            </div>

            <ProjectSection text={textProjects} type='personal' />
            <ProjectSection text={textProjects} type='contribution' />

            <div className='w-full flex justify-center'>
                <div className='flex flex-col items-center w-full px-[2rem] sm:px-[4rem] lg:px-[8rem] max-w-[50rem] py-[2rem]'>
                    <Contact />
                </div>
            </div>
        </div>
    )
}
