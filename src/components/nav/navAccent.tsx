'use client'

import { usePathname } from 'next/navigation'

export default function NavBarAccent({page,color}:{page:string,color:string}) {
    const path = usePathname()
    const currentPage = path.split('/')[1]
    return (
        <>
            {currentPage === page &&
                <span
                    className={`absolute left-1/2 -translate-x-1/2 z-0 w-16 h-8 rounded-full ${color} blur-md`}
                    aria-hidden='true'
                />
            }
        </>
    )
}
