import { cookies } from 'next/headers'
import { Code2, Database, Globe, Server, Wrench } from 'lucide-react'

import no from '@dictionaries/skills/no.json'
import en from '@dictionaries/skills/en.json'

export default async function Page() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text: SkillsDictionary = lang === 'no' ? no : en

    const categoryStyles = {
        programming_languages: { 
            icon: <Code2 className='size-6 text-emerald-500' />,
            gradient: 'from-emerald-500/20 to-cyan-500/20',
            accent: 'emerald',
            shadow: 'hover:shadow-emerald-500/10'
        },
        frontend: { 
            icon: <Globe className='size-6 text-indigo-500' />,
            gradient: 'from-indigo-500/20 to-violet-500/20',
            accent: 'indigo',
            shadow: 'hover:shadow-indigo-500/10'
        },
        backend: { 
            icon: <Database className='size-6 text-sky-500' />,
            gradient: 'from-sky-500/20 to-blue-500/20',
            accent: 'sky',
            shadow: 'hover:shadow-sky-500/10'
        },
        tools: { 
            icon: <Wrench className='size-6 text-amber-500' />,
            gradient: 'from-amber-500/20 to-orange-500/20', 
            accent: 'amber',
            shadow: 'hover:shadow-amber-500/10'
        },
        infrastructure: { 
            icon: <Server className='size-6 text-rose-500' />,
            gradient: 'from-rose-500/20 to-pink-500/20',
            accent: 'rose',
            shadow: 'hover:shadow-rose-500/10'
        }
    }

    return (
        <div className='p-[1.5rem] sm:p-[4rem] flex flex-col gap-[3rem]'>
            <div className='flex flex-col gap-[1rem] mb-[2rem]'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text'>
                    {text.title}
                </h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                {Object.entries(text.categories).map(([key, data]) => {
                    const style = categoryStyles[key as keyof typeof categoryStyles] || {
                        icon: <Code2 className='size-6 text-blue-500' />,
                        gradient: 'from-blue-500/20 to-cyan-500/20',
                        accent: 'blue',
                        shadow: 'hover:shadow-blue-500/20'
                    }

                    return (
                        <div 
                            key={key} 
                            className={`bg-dark p-[1.5rem] rounded-xl border border-extralight hover:border-superlight shadow-sm ${style.shadow} hover:shadow-xl transition-all`}
                        >
                            <div className='flex items-center gap-3 mb-[1.5rem]'>
                                <span className={`p-2 bg-gradient-to-br ${style.gradient} rounded-lg`}>
                                    {style.icon}
                                </span>
                                <h2 className='text-2xl font-semibold'>{data.title}</h2>
                            </div>

                            {data.categories.map((category) => (
                                <div key={category.title} className='mb-[1.5rem]'>
                                    <h3 className={`text-xl font-medium mb-[0.75rem] text-${style.accent}-400`}>{category.title}</h3>
                                    <ul className='space-y-[0.5rem]'>
                                        {category.items.map((skill: string, index: number) => (
                                            <li key={index} className='flex items-center text-almostbright'>
                                                <span className={`mr-[0.5rem] text-${style.accent}-500`}>•</span>
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}