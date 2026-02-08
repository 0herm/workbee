'use client'
import React, { useState } from 'react'
import en from '@dictionaries/contact/en.json'
import no from '@dictionaries/contact/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import Link from 'next/link'
import { Send } from 'lucide-react'

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
            <h2 className='
              mb-8 flex items-center gap-3 text-xl font-bold
              sm:text-2xl
              md:text-3xl
            '>
                <span className='font-mono text-3xl text-blue-500'>&gt;</span>
                <span className='wrap-break-word'>{text.title}</span>
            </h2>

            {/* client-side form (no server action) */}
            <div className='
              w-full space-y-6
              md:space-y-8
            '>
                <div className='
                  grid grid-cols-1 gap-6
                  md:grid-cols-2
                '>
                    <div>
                        <label className='
                          mb-2 block font-mono text-sm text-almostbright
                          sm:text-base
                        '>$ {text.name}:</label>
                        <input
                            placeholder='_'
                            type='text'
                            name='name'
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='
                              w-full rounded-lg border border-extralight bg-dark
                              p-2.5 font-mono transition-colors
                              focus:border-bright focus:outline-none
                              sm:p-3
                            '
                        />
                    </div>

                    <div>
                        <label className='
                          mb-2 block font-mono text-sm text-almostbright
                          sm:text-base
                        '>$ {text.email}:</label>
                        <input
                            placeholder='_'
                            type='email'
                            name='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='
                              w-full rounded-lg border border-extralight bg-dark
                              p-2.5 font-mono transition-colors
                              focus:border-bright focus:outline-none
                              sm:p-3
                            '
                        />
                    </div>
                </div>

                <div>
                    <label className='
                      mb-2 block font-mono text-sm text-almostbright
                      sm:text-base
                    '>$ {text.subject}:</label>
                    <input
                        placeholder='_'
                        type='text'
                        name='subject'
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className='
                          w-full rounded-lg border border-extralight bg-dark
                          p-2.5 font-mono transition-colors
                          focus:border-bright focus:outline-none
                          sm:p-3
                        '
                    />
                </div>

                <div>
                    <label className='
                      mb-2 block font-mono text-sm text-almostbright
                      sm:text-base
                    '>$ {text.message}:</label>
                    <textarea
                        placeholder='_'
                        name='message'
                        required
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='
                          w-full resize-y rounded-lg border border-extralight
                          bg-dark p-2.5 font-mono transition-colors
                          focus:border-bright focus:outline-none
                          sm:p-3
                        '
                    />
                </div>

                <div className='flex justify-center pt-2'>
                    {isValid ? (
                        <Link href={mailtoUrl} className='
                          group inline-flex w-full items-center justify-center
                          gap-2 rounded-lg border border-bright px-5 py-2.5
                          font-mono text-bright uppercase transition-colors
                          hover:bg-bright hover:text-darker
                          sm:w-auto sm:px-6 sm:py-3
                        '>
                            [ {text.submit} ]
                            <Send className='size-4' />
                        </Link>
                    ) : (
                        <button
                            type='button'
                            disabled
                            className='
                              group inline-flex w-full cursor-not-allowed
                              items-center justify-center gap-2 rounded-lg
                              border border-extralight px-5 py-2.5 font-mono
                              text-almostbright uppercase opacity-50
                              sm:w-auto sm:px-6 sm:py-3
                            '
                        >
                            [ {text.submit} ]
                            <Send className='size-4' />
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}