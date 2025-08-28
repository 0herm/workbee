import Link from 'next/link'
import { cookies } from 'next/headers'
import { ExternalLink } from 'lucide-react'
import no from '@dictionaries/projects/no.json'
import en from '@dictionaries/projects/en.json'
import Carousel from './carousel'

export default async function Page() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text: ProjectsDictionary = lang === 'no' ? no : en

    return (
        <div className='p-[1.5rem] sm:p-[4rem] flex flex-col gap-[3rem]'>
            <div id='projects' className='flex flex-col items-center scroll-mt-[6rem] gap-[1rem] mt-[2rem]'>
                <h1 className='w-fit text-4xl font-bold bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text'>
                    {text.projects.title}
                </h1>
            </div>
            
            <div className='flex flex-col gap-[2rem] max-w-4xl mx-auto w-full'>
                {Object.entries(text.projects.projects).map(([key, project]) => (
                    <div
                        key={key}
                        id={`projects-${key}`}
                        className='group scroll-mt-[6rem] relative flex flex-col p-[1rem] sm:p-[2rem] rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-150 w-full'
                    >
                        <div className='flex items-start justify-between mb-[1rem]'>
                            <h3 className='text-xl sm:text-2xl font-semibold group-hover:text-green-500 transition-colors'>
                                {project.name}
                            </h3>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 pb-[2rem]'>
                            <div className='md:flex-[0.7] flex items-center'>
                                <p className='text-base sm:text-lg text-almostbright'>{project.description}</p>
                            </div>
                            {project.images && project.images.length > 0 && (
                                <div className='md:flex-[1.3] relative w-full overflow-hidden rounded-lg'>
                                    <div className='relative'>
                                        <Carousel images={project.images} />
                                    </div>
                                </div>
                            )}
                        </div>
                        {project.link && (
                            <div className='mt-auto'>
                                <Link
                                    href={project.link}
                                    className='inline-flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] bg-gradient-to-r from-green-700/70 to-cyan-700/70 text-white rounded-lg font-medium text-sm hover:from-green-600/70 hover:to-cyan-600/70 hover:shadow-lg hover:shadow-green-500/25 transition-all'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span>{text.projects.viewProject}</span>
                                    <ExternalLink className='size-[1rem]' />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div id='contributions' className='flex flex-col items-center scroll-mt-[6rem] gap-[1rem] mt-[2rem]'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>
                    {text.contributions.title}
                </h1>
            </div>

            <div className='flex flex-col gap-[2rem] max-w-4xl mx-auto w-full'>
                {Object.entries(text.contributions.contributions).map(([key, contribution]) => (
                    <div
                        key={key}
                        id={`contributions-${key}`}
                        className='group scroll-mt-[6rem] relative flex flex-col p-[1rem] sm:p-[1.5rem] rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-150 w-full'
                    >
                        <div className='flex items-start justify-between mb-[1rem]'>
                            <h3 className='text-xl sm:text-2xl font-semibold group-hover:text-purple-400 transition-colors'>
                                {contribution.name}
                            </h3>
                        </div>
                        <p className='text-base sm:text-lg text-almostbright mb-[1rem]'>{contribution.description}</p>
                        {contribution.link && (
                            <div className='mt-auto'>
                                <Link
                                    href={contribution.link}
                                    className='inline-flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] bg-gradient-to-r from-purple-700/70 to-pink-700/70 text-white rounded-lg font-medium text-sm hover:from-purple-600/70 hover:to-pink-600/70 hover:shadow-lg hover:shadow-purple-500/25 transition-all'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span>{text.contributions.viewProject}</span>
                                    <ExternalLink className='size-[1rem]' />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}