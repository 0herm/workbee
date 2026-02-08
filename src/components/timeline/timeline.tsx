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
        line: 'border-blue-500/30',
        dot: 'text-blue-500',
        text: 'text-blue-400',
        border: 'hover:border-blue-500'
    },
    purple: {
        line: 'border-purple-500/30',
        dot: 'text-purple-500',
        text: 'text-purple-400',
        border: 'hover:border-purple-500'
    }
}

export default function Timeline({ title, items, color }: TimelineProps) {
    const colors = colorClasses[color]

    return (
        <div>
            <h3 className='
              mb-8 flex items-center gap-2 text-lg font-semibold
              sm:text-xl
            '>
                <span className={`
                  ${colors.text}
                `}>&gt;</span>
                {title}
                <div className={`
                  h-px flex-1 border-b border-dashed
                  ${colors.line}
                  opacity-30
                `}></div>
            </h3>
            <div className='relative'>
                <div className={`
                  absolute inset-y-0 left-[1.35rem] w-px border-l border-dashed
                  ${colors.line}
                `}></div>
                {Object.entries(items).map(([key, item]) => (
                    <div key={key} className='group relative pb-10 pl-12'>
                        <div className={`
                          absolute left-[0.35rem] w-8 text-center font-mono
                          ${colors.dot}
                          z-10 rounded-full bg-dark text-nowrap
                        `}>[+]</div>
                        <div className={`
                          border border-extralight bg-dark p-6
                          ${colors.border}
                          rounded-xl shadow-none transition-none
                        `}>
                            <span className={`
                              font-mono text-xs
                              ${colors.text}
                              tracking-wider uppercase
                            `}>
                                [{item.period}]
                            </span>
                            <h4 className='mt-2 mb-1 text-lg font-semibold'>{item.title}</h4>
                            <p className='
                              text-sm text-almostbright
                              sm:text-base
                            '>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
