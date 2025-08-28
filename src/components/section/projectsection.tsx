import { ArrowRight, Code2, ExternalLink, GitBranch } from 'lucide-react'
import Link from 'next/link'

export default function ProjectSection({text, type}: {text: ProjectsDictionary, type: 'personal' | 'contribution'}){
    const isContribution = type === 'contribution'
    const data = isContribution ? text.contributions : text.projects
    const items = isContribution 
        ? (data as ProjectsDictionary['contributions']).contributions 
        : (data as ProjectsDictionary['projects']).projects
    const hrefPrefix = isContribution ? 'contributions' : 'projects'
    const IconComponent = isContribution ? GitBranch : Code2
    const iconColor = isContribution ? 'text-purple-400' : 'text-green-600'
    const gradientFrom = isContribution ? 'from-purple-500/20' : 'from-green-500/20'
    const gradientTo = isContribution ? 'to-pink-500/20' : 'to-blue-500/20'
    const hoverShadow = isContribution ? 'hover:shadow-purple-500/10' : 'hover:shadow-green-500/10'
    const hoverTextColor = isContribution ? 'group-hover:text-purple-400' : 'group-hover:text-green-600'
    const buttonGradient = isContribution ? 'from-purple-800/80 to-pink-800/80' : 'from-green-800/80 to-cyan-800/80'
    const buttonShadow = isContribution ? 'hover:shadow-purple-500/25' : 'hover:shadow-green-500/25'

    return (
        <div>
            <div className='flex items-center justify-between mb-[3rem]'>
                <h2 className='text-xl sm:text-3xl font-bold flex items-center gap-[0.75rem]'>
                    <span className={`p-[0.5rem] bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-lg`}>
                        <IconComponent className={`size-[1.5rem] ${iconColor}`} />
                    </span>
                    {data.title}
                </h2>
                <Link
                    href={`/projects#${hrefPrefix}`}
                    className='group flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] rounded-lg border bg-darker border-extralight hover:border-superlight'
                >
                    <span className='text-sm font-medium'>{data.viewMore}</span>
                    <ArrowRight className='size-[1rem] group-hover:translate-x-[0.25rem]' />
                </Link>
            </div>
            <div className='grid md:grid-cols-2 gap-[1.5rem]'>
                {Object.entries(items).slice(0, 2).map(([key, item]) => (
                    <div
                        key={key}
                        className={`group relative p-[1.5rem] rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-2xl ${hoverShadow} hover:-translate-y-[0.25rem]`}
                    >
                        <Link href={`/projects#${hrefPrefix}-${key}`} className='absolute inset-0' />
                        <div className='flex items-start justify-between mb-[1rem]'>
                            <h3 className={`text-lg sm:text-xl font-semibold ${hoverTextColor}`}>
                                {item.name}
                            </h3>
                            <IconComponent className={`size-[1.25rem] text-superlight ${hoverTextColor}`} />
                        </div>
                        <p className='text-sm sm:text-base text-almostbright mb-[1.5rem] line-clamp-3'>{item.description}</p>
                        {item.link && (
                            <Link
                                href={item.link}
                                className={`${!isContribution ? 'relative z-2' : ''} inline-flex items-center gap-[0.5rem] px-[1rem] py-[0.5rem] bg-gradient-to-r ${buttonGradient} text-white rounded-lg font-medium text-sm hover:shadow-lg ${buttonShadow}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span>{data.viewProject}</span>
                                <ExternalLink className='size-[1rem]' />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}