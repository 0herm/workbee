'use client'

import { usePathname } from 'next/navigation'

export default function NavBarAccent({page,color}:{page:string,color:string}) {
    const path = usePathname()
    const currentPage = path.split('/')[1]
    return (
        <>
            {currentPage === page &&
                <span
                    className={`
                      absolute left-1/2 z-0 h-8 w-16 -translate-x-1/2
                      rounded-full
                      ${color}
                      blur-md
                    `}
                    aria-hidden='true'
                />
            }
        </>
    )
}
