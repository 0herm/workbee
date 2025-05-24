'use client'

import { useEffect, useState } from 'react'
import { getCookie, setCookie } from '@/utils/cookies'
import { useRouter } from 'next/navigation'

export default function ThemeSwitch() {
    const router = useRouter()
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')

    useEffect(() => {
        const savedTheme = getCookie('theme') as 'dark' | 'light'
        if (savedTheme) {
            setTheme(savedTheme)
        }

        document.documentElement.classList.remove('dark', 'light')
        document.documentElement.classList.add(theme)
    }, [theme])

    function toggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setCookie('theme', newTheme)
        setTheme(newTheme)
        router.refresh()
    }

    return (
        <div className='group grid size-[1.75rem] rounded-[var(--border-radius)]'>
            <label className='size-[1.75rem] flex items-center justify-center'>
                <input
                    type='checkbox'
                    checked={theme === 'light'}
                    onChange={toggleTheme}
                    className='sr-only'
                />
                <ThemeIcon />
            </label>
        </div>
    )
}

function ThemeIcon() {
    return (
        <svg
            className={'dark:fill-[white] h-full p-[0.05rem]'}
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'
        >
            <mask id='theme-toggle_clip-path'>
                <rect x='0' y='0' width='100' height='100' fill='white' />
                <circle
                    className='transition-all duration-500 dark:translate-x-[2rem] dark:translate-y-[-1rem]'
                    cx='68'
                    cy='40'
                    r='18'
                />
            </mask>
            <circle
                className='theme-toggle_sun-moon origin-center transition-all duration-500 dark:fill-[white] dark:scale-100 not-dark:fill-[black] not-dark:scale-[1.9]'
                mask={'url(#theme-toggle_clip-path)'}
                cx='50'
                cy='50'
                r='23'
            />
            <rect
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                x='86'
                y='47'
                width='14'
                height='6'
            />
            <rect className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0' y='47' width='14' height='6' />
            <rect
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                x='47'
                y='86'
                width='6'
                height='14'
            />
            <path
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                d='M75 78.2426L79.2426 74L89.1421 83.8995L84.8995 88.1421L75 78.2426Z'
            />
            <rect
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                x='84.8995'
                y='12'
                width='6'
                height='14'
                transform='rotate(45 84.8995 12)'
            />
            <rect
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                x='22.8995'
                y='74'
                width='6'
                height='14'
                transform='rotate(45 22.8995 74)'
            />
            <rect
                className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0'
                x='13'
                y='16.2426'
                width='6'
                height='14'
                transform='rotate(-45 13 16.2426)'
            />
            <path className='transition-all duration-500 dark:opacity-100 not-dark:opacity-0' d='M47 0H53V14H47V0Z' />
        </svg>
    )
}
