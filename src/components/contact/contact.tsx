import { cookies } from 'next/headers'
import en from '@dictionaries/contact/en.json'
import no from '@dictionaries/contact/no.json'
import enPersonal from '@dictionaries/personal/en.json'
import noPersonal from '@dictionaries/personal/no.json'
import Form from 'next/form'
import { redirect } from 'next/navigation'
import { Mail, Send } from 'lucide-react'

async function contactAction(formData: FormData) {
    'use server'
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text = lang === 'no' ? noPersonal : enPersonal

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    
    const mailtoUrl = `mailto:${text.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${name} <${email}>\n\n${message}`)}`

    redirect(mailtoUrl)
}

export default async function Contact() {
    const lang = (await cookies()).get('lang')?.value || 'no'
    const text: ContactDictionary = lang === 'no' ? no : en

    return (
        <>
            <h2 className='text-xl sm:text-2xl md:text-3xl font-bold mb-[2rem] flex items-center gap-[0.75rem]'>
                <span className='p-[0.375rem] sm:p-[0.5rem] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex-shrink-0'>
                    <Mail className='w-[1.5rem] h-[1.5rem] text-blue-400' />
                </span>
                <span className='break-words'>{text.title}</span>
            </h2>
            
            <Form action={contactAction} className='space-y-[1.5rem] md:space-y-[2rem] w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]'>
                    <div>
                        <label className='block text-almostbright mb-[0.5rem] text-sm sm:text-base font-medium'>{text.name}</label>
                        <input 
                            placeholder={text.namePlaceholder} 
                            type='text' 
                            name='name' 
                            required 
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
                        className='w-full p-[0.625rem] sm:p-[0.75rem] rounded-lg border bg-dark border-extralight focus:border-superlight focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none'
                    />
                </div>
                
                <div className='pt-[0.5rem] flex justify-center'>
                    <button 
                        type='submit'
                        className='group inline-flex items-center justify-center gap-[0.5rem] px-[1.25rem] sm:px-[1.5rem] py-[0.625rem] sm:py-[0.75rem] bg-gradient-to-r from-blue-800/80 to-purple-800/80 text-white rounded-lg font-medium hover:from-blue-700/80 hover:to-purple-700/80 w-full sm:w-auto'
                    >
                        {text.submit}
                        <Send className='w-[1.25rem] h-[1.25rem] group-hover:translate-x-1' />
                    </button>
                </div>
            </Form>
        </>
    )
}