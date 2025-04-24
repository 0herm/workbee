import Link from 'next/link'
import { SiGithub, SiLinkedin, SiGitlab } from 'react-icons/si'

export default function Home() {
    return (
        <div className='p-[4rem]'>
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-4xl font-bold max-w-[30rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p  className='font-light text-almostbright max-w-[40rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec placerat nisl. Mauris a suscipit eros. Nam ut dapibus ex. Nulla tempor ullamcorper sem a ultricies. Nam vel orci a dui placerat aliquet vitae id erat. Aenean nec gravida odio. Quisque finibus ex viverra, tincidunt arcu sed, tempus lorem. Maecenas sed orci dolor.</p>
                <div className='flex flex-row gap-[0.75rem]'>
                    <Link href={'Dummy'} className='group'>
                        <SiGithub className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-white' />
                    </Link>
                    <Link href={'Dummy'} className='group'>
                        <SiGitlab className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#FC6D26]' />
                    </Link>
                    <Link href={'Dummy'} className='group'>
                        <SiLinkedin className='fill-almostbright size-[1.25rem] transition-colors duration-300 group-hover:fill-[#0a66c2]' />
                    </Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
