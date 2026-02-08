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
        <div className='
          flex flex-col gap-12 p-6
          sm:p-16
        '>
            <div id='projects' className='
              mt-8 flex scroll-mt-24 flex-col items-center gap-4
            '>
                <h1 className='
                  w-fit bg-linear-to-r from-green-500 to-teal-500 bg-clip-text
                  text-4xl font-bold text-transparent
                '>
                    {text.projects.title}
                </h1>
                <div className='
                  w-fit rounded-lg border border-red-500/50 bg-red-500/10 p-4
                '>
                    <p className='text-lg font-bold text-red-500'>{text.projects.disclaimer}</p>
                </div>

            </div>
            
            <div className='mx-auto flex w-full max-w-4xl flex-col gap-8'>
                {Object.entries(text.projects.projects).map(([key, project]) => (
                    <div
                        key={key}
                        id={`projects-${key}`}
                        className='
                          group relative flex w-full scroll-mt-24 flex-col
                          rounded-xl border border-extralight bg-dark p-4
                          shadow-sm transition-all duration-150
                          hover:border-superlight hover:shadow-2xl
                          hover:shadow-green-500/10
                          sm:p-8
                        '
                    >
                        <div className='mb-4 flex items-start justify-between'>
                            <h3 className='
                              text-xl font-semibold transition-colors
                              group-hover:text-green-500
                              sm:text-2xl
                            '>
                                {project.name}
                            </h3>
                        </div>
                        <div className='
                          flex flex-col gap-4 pb-8
                          md:flex-row
                        '>
                            <div className='
                              flex items-center
                              md:flex-[0.7]
                            '>
                                <p className='
                                  text-base text-almostbright
                                  sm:text-lg
                                '>{project.description}</p>
                            </div>
                            {project.images && project.images.length > 0 && (
                                <div className='
                                  relative w-full overflow-hidden rounded-lg
                                  md:flex-[1.3]
                                '>
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
                                    className='
                                      inline-flex items-center gap-2 rounded-lg
                                      bg-linear-to-r from-green-700/70
                                      to-cyan-700/70 px-4 py-2 text-sm
                                      font-medium text-white transition-all
                                      hover:from-green-600/70
                                      hover:to-cyan-600/70 hover:shadow-lg
                                      hover:shadow-green-500/25
                                    '
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span>{text.projects.viewProject}</span>
                                    <ExternalLink className='size-4' />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div id='contributions' className='
              mt-8 flex scroll-mt-24 flex-col items-center gap-4
            '>
                <h1 className='
                  bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text
                  text-4xl font-bold text-transparent
                '>
                    {text.contributions.title}
                </h1>
            </div>

            <div className='mx-auto flex w-full max-w-4xl flex-col gap-8'>
                {Object.entries(text.contributions.contributions).map(([key, contribution]) => (
                    <div
                        key={key}
                        id={`contributions-${key}`}
                        className='
                          group relative flex w-full scroll-mt-24 flex-col
                          rounded-xl border border-extralight bg-dark p-4
                          shadow-sm transition-all duration-150
                          hover:border-superlight hover:shadow-2xl
                          hover:shadow-purple-500/10
                          sm:p-6
                        '
                    >
                        <div className='mb-4 flex items-start justify-between'>
                            <h3 className='
                              text-xl font-semibold transition-colors
                              group-hover:text-purple-400
                              sm:text-2xl
                            '>
                                {contribution.name}
                            </h3>
                        </div>
                        <p className='
                          mb-4 text-base text-almostbright
                          sm:text-lg
                        '>{contribution.description}</p>
                        {contribution.link && (
                            <div className='mt-auto'>
                                <Link
                                    href={contribution.link}
                                    className='
                                      inline-flex items-center gap-2 rounded-lg
                                      bg-linear-to-r from-purple-700/70
                                      to-pink-700/70 px-4 py-2 text-sm
                                      font-medium text-white transition-all
                                      hover:from-purple-600/70
                                      hover:to-pink-600/70 hover:shadow-lg
                                      hover:shadow-purple-500/25
                                    '
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <span>{text.contributions.viewProject}</span>
                                    <ExternalLink className='size-4' />
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}