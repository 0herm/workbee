'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

type MobileNavProps = {
  text: NavBarDictionary
}

export default function MobileNav({ text }: MobileNavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()
    const panelRef = useRef<HTMLDivElement>(null)

    const links = Object.entries(text.links).map(([, item]) => {
        return {
            label: item.title,
            href: item.navigation,
            active: item.navigation === '/' ? pathname === '/' : pathname.startsWith(item.navigation),
        }
    })

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    useEffect(() => {
        if (!isMenuOpen || !panelRef.current) return
        const panel = panelRef.current
        const focusable = panel.querySelectorAll<HTMLElement>(
            'a, button, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length) focusable[0].focus()
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMenuOpen(false)
            if (e.key === 'Tab') {
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault(); last.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault(); first.focus()
                }
            }
        }
        panel.addEventListener('keydown', handleKey)
        return () => panel.removeEventListener('keydown', handleKey)
    }, [isMenuOpen])

    return (
        <>
            {/* Mobile Navigation */}
            <div className='
              relative z-102 flex size-7 items-center justify-between
              sm:hidden
            '>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className={'flex size-7 items-center justify-center'}
                    aria-expanded={isMenuOpen}
                >
                    <Menu className='size-7' />
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`
                  fixed top-0 left-0 z-100 h-screen w-screen
                  md:hidden
                  ${isMenuOpen ? `
                    pointer-events-auto opacity-80 backdrop-blur-[2px]
                  ` : 'pointer-events-none opacity-0'}
                `}
                style={{ background: 'rgba(0,0,0,0.7)' }}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden='true'
            />

            {/* Slide-in Panel */}
            <aside
                id='mobile-menu-panel'
                ref={panelRef}
                tabIndex={-1}
                className={`
                  fixed top-0 right-0 z-103 flex h-screen w-[85%] max-w-[340px]
                  transform flex-col border-l-[0.15rem] border-light
                  bg-normal/95 shadow-2xl backdrop-blur-lg ease-in-out
                  md:hidden
                  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
                role='dialog'
                aria-modal='true'
                aria-label='Mobile menu'
            >
                {/* Header */}
                <div className='
                  flex items-center justify-between border-b-[0.15rem]
                  border-light/50 p-6
                '>
                    <h2 className='text-xl font-semibold'>{text.menu}</h2>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className='
                          hover:bg-opacity-10
                          group rounded-full p-2
                          hover:bg-light
                        '
                        aria-label='Close menu'
                    >
                        <X className='size-5 text-almostbright' />
                    </button>
                </div>
                {/* Links */}
                <nav className='flex-1 overflow-y-auto p-6' role='navigation'>
                    <ul className='space-y-3'>
                        {links.map((link, index) => (
                            <li key={link.href} style={{ animationDelay: `${index * 60}ms` }} className={isMenuOpen ? `
                              animate-slideInRight
                            ` : ''}>
                                <Link
                                    href={link.href}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                    className={`
                                      group block rounded-xl px-5 py-4
                                      ${link.active ? `
                                        border-[0.15rem] border-light bg-darker
                                        shadow-md
                                      ` : 'hover:bg-darker/50 hover:pl-7'}
                                    `}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className='
                                      flex items-center justify-between
                                    '>
                                        <span className={`
                                          font-medium
                                          ${link.active ? 'text-bright' : `
                                            text-almostbright
                                            group-hover:text-bright
                                          `}
                                        `}>{link.label}</span>
                                        {link.active && (
                                            <div className={`
                                              size-2.5 animate-pulse
                                              rounded-full
                                              ${link.href === '/' ? `
                                                bg-teal-500 shadow-lg
                                                shadow-teal-500/50
                                              ` : link.href === '/projects' ? `
                                                bg-cyan-500 shadow-lg
                                                shadow-cyan-500/50
                                              ` : `
                                                bg-blue-500 shadow-lg
                                                shadow-blue-500/50
                                              `}
                                            `}/>
                                        )}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}
