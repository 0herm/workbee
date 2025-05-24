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
            <div className='flex sm:hidden items-center justify-between size-[1.75rem] relative z-[102]'>
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className={'size-[1.75rem] flex items-center justify-center'}
                    aria-expanded={isMenuOpen}
                >
                    <Menu className='size-[1.75rem] transition-transform duration-300' />
                </button>
            </div>

            {/* Overlay */}
            <div
                className={`fixed top-0 left-0 w-screen h-screen z-[100] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-80 pointer-events-auto backdrop-blur-[2px]' : 'opacity-0 pointer-events-none'}`}
                style={{ background: 'rgba(0,0,0,0.7)' }}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden='true'
            />

            {/* Slide-in Panel */}
            <aside
                id='mobile-menu-panel'
                ref={panelRef}
                tabIndex={-1}
                className={`fixed top-0 right-0 h-screen w-[85%] max-w-[340px] bg-normal/95 backdrop-blur-lg border-l-[0.15rem] border-light shadow-2xl transform transition-transform duration-300 ease-in-out z-[103] md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                role='dialog'
                aria-modal='true'
                aria-label='Mobile menu'
            >
                {/* Header */}
                <div className='flex items-center justify-between p-6 border-b-[0.15rem] border-light/50'>
                    <h2 className='text-xl font-semibold'>{text.menu}</h2>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className='p-2 rounded-full hover:bg-light hover:bg-opacity-10 transition-colors group'
                        aria-label='Close menu'
                    >
                        <X className='size-5 text-almostbright transition-colors' />
                    </button>
                </div>
                {/* Links */}
                <nav className='p-6 flex-1 overflow-y-auto' role='navigation'>
                    <ul className='space-y-3'>
                        {links.map((link, index) => (
                            <li key={link.href} style={{ animationDelay: `${index * 60}ms` }} className={isMenuOpen ? 'animate-slideInRight' : ''}>
                                <Link
                                    href={link.href}
                                    tabIndex={isMenuOpen ? 0 : -1}
                                    className={`block px-5 py-4 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400 ${link.active ? 'bg-darker border-[0.15rem] border-light shadow-md' : 'hover:bg-darker/50 hover:pl-7'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className='flex items-center justify-between'>
                                        <span className={`font-medium transition-colors ${link.active ? 'text-bright' : 'text-almostbright group-hover:text-bright'}`}>{link.label}</span>
                                        {link.active && (
                                            <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${link.href === '/' ? 'bg-teal-500 shadow-lg shadow-teal-500/50' : link.href === '/projects' ? 'bg-cyan-500 shadow-lg shadow-cyan-500/50' : 'bg-blue-500 shadow-lg shadow-blue-500/50'}`}/>
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
