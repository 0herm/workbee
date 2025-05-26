import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'
import no from '@dictionaries/landing/no.json'
import en from '@dictionaries/landing/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import { cookies } from 'next/headers'
import { ArrowRight, Briefcase, Code2, ExternalLink, GitBranch } from 'lucide-react'

export default async function Home() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text : LandingPageDictionary = lang === 'no' ? no : en
    const textPersonal = lang === 'no' ? noPersonal : enPersonal

    return (
        <div className='p-[1.5rem] sm:p-[4rem] flex flex-col gap-[5rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>{text.title}</h1>
                <p className='font-light text-almostbright max-w-[40rem]'>{text.description}</p>
                <div className='flex flex-row gap-[0.75rem]'>

                    {/* Github */}
                    <Link href={textPersonal.links.github} className='group'>
                        <SiGithub className='fill-almostbright size-[1.25rem] group-hover:fill-bright' />
                    </Link>

                    {/* Gitlab */}
                    <Link href={textPersonal.links.gitlab} className='group'>
                        <SiGitlab className='fill-almostbright size-[1.25rem] group-hover:fill-[#FC6D26]' />
                    </Link>

                    {/* LinkedIn */}
                    <Link href={textPersonal.links.linkedIn} className='group'>
                        <SiLinkedin className='fill-almostbright size-[1.25rem] group-hover:fill-[#0a66c2]' />
                    </Link>
                </div>
            </div>

            {/* Experience Section */}
            <div>
                <h2 className="text-xl sm:text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                        <Briefcase className="size-6 text-blue-400" />
                    </span>
                    {text.experience}
                </h2>
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Work Timeline */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-8 flex items-center gap-2">
                            {text.work.title}
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                        </h3>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-blue-500/50 to-transparent"></div>
                            {Object.entries(text.work.jobs).map(([key, job]) => (
                                <div key={key} className="relative pl-12 pb-10 group">
                                    <div className="absolute left-2.5 w-3 h-3 bg-blue-500 rounded-full group-hover:scale-150 shadow-lg shadow-blue-500/50"></div>
                                    <div className="p-6 rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-xl hover:shadow-blue-500/10">
                                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                                            {job.period}
                                        </span>
                                        <h4 className="text-lg font-semibold mt-2 mb-1">{job.company}</h4>
                                        <p className="text-sm sm:text-base text-almostbright">{job.position}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-8 flex items-center gap-2">
                            {text.education.title}
                            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                        </h3>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/50 to-transparent"></div>
                            {Object.entries(text.education.degrees).map(([key, degree]) => (
                                <div key={key} className="relative pl-12 pb-10 group">
                                    <div className="absolute left-2.5 w-3 h-3 bg-purple-500 rounded-full group-hover:scale-150 shadow-lg shadow-purple-500/50"></div>
                                    <div className="p-6 rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-xl hover:shadow-purple-500/10">
                                        <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                                            {degree.period}
                                        </span>
                                        <h4 className="text-lg font-semibold mt-2 mb-1">{degree.title}</h4>
                                        <p className="text-sm sm:text-base text-almostbright">{degree.degree}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-xl sm:text-3xl font-bold flex items-center gap-3">
                        <span className="p-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
                            <Code2 className="size-6 text-green-600" />
                        </span>
                        {text.projects.title}
                    </h2>
                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 px-4 py-2 rounded-lg border bg-darker border-extralight hover:border-superlight"
                    >
                        <span className="text-sm font-medium">{text.projects.viewMore}</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(text.projects.projects).map(([key, project]) => (
                        <div
                            key={key}
                            className="group relative p-6 rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-green-600">
                                    {project.name}
                                </h3>
                                <Code2 className="size-5 text-superlight group-hover:text-green-600" />
                            </div>
                            <p className="text-sm sm:text-base text-almostbright mb-6 line-clamp-3">{project.description}</p>
                            {project.link && (
                                <Link
                                    href={project.link}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-800/80 to-cyan-800/80 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-green-500/25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{text.projects.viewProject}</span>
                                    <ExternalLink className="size-4" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contributions Section */}
            <div>
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-xl sm:text-3xl font-bold flex items-center gap-3">
                        <span className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                            <GitBranch className="size-6 text-purple-400" />
                        </span>
                        {text.contributions.title}
                    </h2>
                    <Link
                        href="/contributions"
                        className="group flex items-center gap-2 px-4 py-2 rounded-lg border bg-darker border-extralight hover:border-superlight"
                    >
                        <span className="text-sm font-medium">{text.contributions.viewMore}</span>
                        <ArrowRight className="size-4 group-hover:translate-x-1" />
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(text.contributions.contributions).map(([key, contribution]) => (
                        <div
                            key={key}
                            className="group relative p-6 rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-purple-400">
                                    {contribution.name}
                                </h3>
                                <GitBranch className="size-5 text-superlight group-hover:text-purple-400" />
                            </div>
                            <p className="text-sm sm:text-base text-almostbright mb-6 line-clamp-3">{contribution.description}</p>
                            {contribution.link && (
                                <Link
                                    href={contribution.link}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-800/80 to-pink-800/80 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{text.contributions.viewProject}</span>
                                    <ExternalLink className="size-4" />
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
