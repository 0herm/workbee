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
    const themeColor = isContribution ? 'text-purple-400' : 'text-green-500'
    const hoverBorder = isContribution ? 'hover:border-purple-500' : 'hover:border-green-500'

    return (
        <div>
            <div className='mb-12 flex items-center justify-between'>
                <h2 className='
                  flex items-center gap-3 text-xl font-bold
                  sm:text-3xl
                '>
                    <span className={`
                      bg-linear-to-br p-2
                      ${gradientFrom}
                      ${gradientTo}
                      rounded-lg
                    `}>
                        <IconComponent className={`
                          size-6
                          ${iconColor}
                        `} />
                    </span>
                    {data.title}
                </h2>
                <Link
                    href={`/projects#${hrefPrefix}`}
                    className='
                      group flex items-center gap-2 rounded-lg border
                      border-extralight bg-darker px-4 py-2
                      hover:border-superlight
                    '
                >
                    <span className='text-sm font-medium'>./{data.viewMore}</span>
                    <ArrowRight className='
                      size-4
                      group-hover:translate-x-1
                    ' />
                </Link>
            </div>
            <div className='
              grid gap-6
              md:grid-cols-2
            '>
                {Object.entries(items).slice(0, 2).map(([key, item]) => (
                    <div
                        key={key}
                        className={`
                          group relative border border-extralight bg-dark p-6
                          ${hoverBorder}
                          rounded-xl transition-colors duration-0
                          hover:bg-darker
                        `}
                    >
                        <Link href={`/projects#${hrefPrefix}-${key}`} className='
                          absolute inset-0
                        ' />
                        <div className='mb-4 flex items-start justify-between'>
                            <h3 className={`
                              text-lg font-semibold
                              sm:text-xl
                              ${themeColor}
                            `}>
                                {item.name}
                            </h3>
                            <IconComponent className='
                              size-5 text-superlight
                              group-hover:text-bright
                            ' />
                        </div>
                        <p className='
                          mb-6 line-clamp-3 font-mono text-sm text-almostbright
                          sm:text-base
                        '>{item.description}</p>
                        {item.link && (
                            <Link
                                href={item.link}
                                className={`
                                  ${!isContribution ? 'relative z-2' : ''}
                                  inline-flex items-center gap-2 rounded-lg
                                  border border-extralight bg-darker px-4 py-2
                                  font-mono text-sm text-almostbright
                                  transition-colors
                                  hover:border-bright hover:text-bright
                                `}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <span>[{data.viewProject}]</span>
                                <ExternalLink className='size-4' />
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}