type TimelineItem = {
    period: string
    title: string
    subtitle: string
}

type TimelineProps = {
    title: string
    items: { [key: string]: TimelineItem }
    color: 'blue' | 'purple'
}

const colorClasses = {
    blue: {
        gradient: 'from-blue-500/50',
        line: 'from-blue-500/50 via-blue-500/50',
        dot: 'bg-blue-500',
        dotShadow: 'shadow-blue-500/50',
        text: 'text-blue-400',
        cardShadow: 'hover:shadow-blue-500/10'
    },
    purple: {
        gradient: 'from-purple-500/50',
        line: 'from-purple-500/50 via-purple-500/50',
        dot: 'bg-purple-500',
        dotShadow: 'shadow-purple-500/50',
        text: 'text-purple-400',
        cardShadow: 'hover:shadow-purple-500/10'
    }
}

export default function Timeline({ title, items, color }: TimelineProps) {
    const colors = colorClasses[color]

    return (
        <div>
            <h3 className='text-lg sm:text-xl font-semibold mb-[2rem] flex items-center gap-[0.5rem]'>
                {title}
                <div className={`h-px flex-1 bg-gradient-to-r ${colors.gradient} to-transparent`}></div>
            </h3>
            <div className='relative'>
                <div className={`absolute left-[1rem] top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors.line} to-transparent`}></div>
                {Object.entries(items).map(([key, item]) => (
                    <div key={key} className='relative pl-[3rem] pb-[2.5rem] group'>
                        <div className={`absolute left-[0.625rem] w-[0.75rem] h-[0.75rem] ${colors.dot} rounded-full group-hover:scale-150 shadow-lg ${colors.dotShadow}`}></div>
                        <div className={`p-[1.5rem] rounded-xl border bg-dark border-extralight hover:border-superlight shadow-sm hover:shadow-xl ${colors.cardShadow}`}>
                            <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
                                {item.period}
                            </span>
                            <h4 className='text-lg font-semibold mt-[0.5rem] mb-[0.25rem]'>{item.title}</h4>
                            <p className='text-sm sm:text-base text-almostbright'>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
