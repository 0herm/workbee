import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text : LandingPageDictionary = lang === 'no' ? no : en
    const textPersonal = lang === 'no' ? noPersonal : enPersonal

    return (
        <div className='p-[4rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>{text.title}</h1>
                <p className='font-light text-almostbright max-w-[40rem]'>{text.description}</p>
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

            <div className='mt-[2.5rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
                {/* Education Section */}
                <div className='bg-dark p-[1.5rem] rounded-lg shadow-md'>
                    <div className='text-xl font-semibold mb-[1rem] '>
                        {text.education.title}
                    </div>
                    <ol className='space-y-[1rem]'>
                        {Object.values(text.education.degrees).map((item, index) => (
                            <li key={index} className='border-l-4 border-primary pl-[1rem]'>
                                <span className='block text-lg font-medium '>{item.title}</span>
                                <div className='flex flex-col md:flex-row md:items-center gap-[0.5rem] text-almostbright text-sm mt-[0.25rem]'>
                                    <span>{item.degree}</span>
                                    <span className='hidden md:inline mx-[0.5rem]'>•</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                
                {/* Work Section */}
                <div className='bg-dark p-[1.5rem] rounded-lg shadow-md'>
                    <div className='text-xl font-semibold mb-[1rem] '>
                        {text.work.title}
                    </div>
                    <ol className='space-y-[1rem]'>
                        {Object.values(text.work.jobs).map((item, index) => (
                            <li key={index} className='border-l-4 border-primary pl-[1rem]'>
                                <span className='block text-lg font-medium '>{item.company}</span>
                                <div className='flex flex-col md:flex-row md:items-center gap-[0.5rem] text-almostbright text-sm mt-[0.25rem]'>
                                    <span>{item.position}</span>
                                    <span className='hidden md:inline mx-[0.5rem]'>•</span>
                                    <span>{item.period}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Projects Section */}
            <div className='mt-[4rem] w-full max-w-5xl mx-auto flex flex-col items-center'>
                <div className='w-full bg-dark p-[2.5rem] rounded-2xl border border-[#23272f]'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem] gap-[1rem]'>
                        <span className='text-2xl md:text-3xl font-bold '>
                            {text.projects.title}
                        </span>
                        <div className='flex items-center gap-[1.5rem]'>
                            <span className='h-[0.25rem] w-[6rem] bg-primary rounded-full md:ml-[1.5rem]' />
                            <Link
                                href='/projects'
                                className='px-5 py-2 bg-primary  rounded-lg font-semibold hover:bg-opacity-90 transition ml-auto'
                            >
                                {text.projects.viewMore}
                            </Link>
                        </div>
                    </div>
                    <ol className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
                        {Object.values(text.projects.projects).map((project, index) => (
                            <li
                                key={index}
                                className='border-l-4 border-primary pl-[1.5rem] py-[1rem] bg-normal rounded-lg flex flex-col h-full'
                            >
                                <span className='text-lg font-semibold  mb-[0.5rem]'>
                                    {project.name}
                                </span>
                                <p className='text-almostbright text-sm mt-[0.25rem] mb-[1rem] pr-[1rem]'>
                                    {project.description}
                                </p>
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        className='text-primary underline underline-offset-4 font-medium mt-auto self-start'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {text.projects.viewProject}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Contributions Section */}
            <div className='mt-[4rem] w-full max-w-5xl mx-auto flex flex-col items-center'>
                <div className='w-full bg-dark p-[2.5rem] rounded-2xl border border-[#23272f]'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-[2rem] gap-[1rem]'>
                        <span className='text-2xl md:text-3xl font-bold '>
                            {text.contributions.title}
                        </span>
                    </div>
                    <ol className='grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
                        {Object.values(text.contributions.contributions).map((contribution, index) => (
                            <li
                                key={index}
                                className='border-l-4 border-primary pl-[1.5rem] py-[1rem] bg-normal rounded-lg flex flex-col h-full'
                            >
                                <span className='text-lg font-semibold  mb-[0.5rem]'>
                                    {contribution.name}
                                </span>
                                <p className='text-almostbright text-sm mt-[0.25rem] mb-[1rem] pr-[1rem]'>
                                    {contribution.description}
                                </p>
                                {contribution.link && (
                                    <Link
                                        href={contribution.link}
                                        className='text-primary underline underline-offset-4 font-medium mt-auto self-start'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {text.projects.viewProject}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
