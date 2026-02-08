'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from '@utils/cookies'
import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'

export default function LangToggle() {
    const router = useRouter()
    
    const [lang, setLang] = useState<Lang>('no')
    const [jump, setJump] = useState(false)

    useEffect(() => {
        const savedLang = getCookie('lang') as Lang
        if (savedLang) {
            setLang(savedLang)
        }
    }, [])

    function handleClick() {
        const newLang = lang === 'no' ? 'en' : 'no'
        setCookie('lang', newLang)
        setLang(newLang)
        setJump(true)
        setTimeout(() => setJump(false), 400)
        router.refresh()
    }

    return(
        <button value={lang} onClick={handleClick} className='
          group cursor-pointer
        '>
            <Globe className={`
              size-7
              group-hover:stroke-softbright
              ${jump ? 'animate-[jump_0.4s_1]' : ''}
            `}/>
        </button>
    )
}
