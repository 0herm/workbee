'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from '@utils/cookies'
import { useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'

export let language = 'no'

type LangToggleProps = {
    serverLang: Lang
}

export default function LangToggle({serverLang}: LangToggleProps) {
    const router = useRouter()
    const [lang, setLang] = useState<'no' | 'en'>(serverLang)
    const [jump, setJump] = useState(false)

    useEffect(() => {
        const savedLang = getCookie('lang') as 'no' | 'en'
        if (savedLang) {
            setLang(savedLang)
        }
    }, [])

    function handleClick() {
        const newLang = lang === 'no' ? 'en' : 'no'
        setCookie('lang', newLang)
        setLang(newLang)
        language = newLang
        setJump(true)
        setTimeout(() => setJump(false), 400)
        router.refresh()
    }

    return(
        <button value={lang} onClick={handleClick} className='group cursor-pointer'>
            <Globe className={`group-hover:stroke-softbright size-[1.75rem] ${jump ? 'animate-[jump_0.4s_1]' : ''}`}/>
        </button>
    )
}
