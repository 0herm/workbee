'use client'
import React, { useState } from 'react'
import en from '@dictionaries/contact/en.json'
import no from '@dictionaries/contact/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import Link from 'next/link'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
    // client-side cookie helper
    const getCookie = (name: string): string | undefined => {
        if (typeof document === 'undefined') return undefined
        const match = document.cookie.split('; ').find((row) => row.startsWith(name + '='))
        return match ? decodeURIComponent(match.split('=')[1]) : undefined
    }

    const lang = getCookie('lang') || 'no'
    const text = lang === 'no' ? no : en

    // form state (client-side)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const isValid = Boolean(name.trim() && email.trim() && subject.trim() && message.trim())

    const mailtoUrl = isValid
        ? `mailto:${enPersonal.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${name} <${email}>\n\n${message}`)}`
        : '#'

    return (
        <>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-[2rem] flex items-center gap-[0.75rem]'>
                <span className='p-[0.375rem] sm:p-[0.5rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0'>
                    <Mail className='w-[1.5rem] h-[1.5rem] text-blue-400' />
                </span>
                <span className='break-words'>{text.title}</span>
            </h2>

            {/* client-side form (no server action) */}
            <div className='space-y-[1.5rem] md:space-y-[2rem] w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]'>
                    <div>
                        <label className='block text-almostbright mb-[0.5rem] text-sm sm:text-base font-medium'>{text.name}</label>
                        <input
                            placeholder={text.namePlaceholder}
                            type='text'
                            name='name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-[0.625rem] sm:p-[0.75rem] rounded-lg border bg-dark border-extralight focus:border-superlight focus:outline-none focus:ring-1 focus:ring-blue-500/50'
                        />
                    </div>

                    <div>
                        <label className='block text-almostbright mb-[0.5rem] text-sm sm:text-base font-medium'>{text.email}</label>
                        <input
                            placeholder={text.emailPlaceholder}
                            type='email'
                            name='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-[0.625rem] sm:p-[0.75rem] rounded-lg border bg-dark border-extralight focus:border-superlight focus:outline-none focus:ring-1 focus:ring-blue-500/50'
                        />
                    </div>
                </div>

                <div>
                    <label className='block text-almostbright mb-[0.5rem] text-sm sm:text-base font-medium'>{text.subject}</label>
                    <input
                        placeholder={text.subjectPlaceholder}
                        type='text'
                        name='subject'
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className='w-full p-[0.625rem] sm:p-[0.75rem] rounded-lg border bg-dark border-extralight focus:border-superlight focus:outline-none focus:ring-1 focus:ring-blue-500/50'
                    />
                </div>

                <div>
                    <label className='block text-almostbright mb-[0.5rem] text-sm sm:text-base font-medium'>{text.message}</label>
                    <textarea
                        placeholder={text.messagePlaceholder}
                        name='message'
                        required
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='w-full p-[0.625rem] sm:p-[0.75rem] rounded-lg border bg-dark border-extralight focus:border-superlight focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none'
                    />
                </div>

                <div className='pt-[0.5rem] flex justify-center'>
                    {isValid ? (
                        <Link href={mailtoUrl} className='group inline-flex items-center justify-center gap-[0.5rem] px-[1.25rem] sm:px-[1.5rem] py-[0.625rem] sm:py-[0.75rem] bg-gradient-to-r from-blue-800/80 to-purple-800/80 text-white rounded-lg font-medium hover:from-blue-700/80 hover:to-purple-700/80 w-full sm:w-auto'>
                            {text.submit}
                            <Send className='w-[1.25rem] h-[1.25rem] group-hover:translate-x-1' />
                        </Link>
                    ) : (
                        <button
                            type='button'
                            disabled
                            className='group inline-flex items-center justify-center gap-[0.5rem] px-[1.25rem] sm:px-[1.5rem] py-[0.625rem] sm:py-[0.75rem] bg-gradient-to-r from-blue-800/40 to-purple-800/40 text-white rounded-lg font-medium w-full sm:w-auto opacity-50 cursor-not-allowed'
                        >
                            {text.submit}
                            <Send className='w-[1.25rem] h-[1.25rem]' />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}