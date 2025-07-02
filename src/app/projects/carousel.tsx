'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Carousel({ images }: { images: string[] }) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className='relative w-full'>
            <Image
                src={`/images/projects/${images[activeIndex]}`}
                alt={`Screenshot ${activeIndex + 1}`}
                width={800}
                height={600}
                className='object-cover'
            />
            <div className='absolute top-[0.5rem] right-[0.5rem] bg-black/50 text-white px-[0.5rem] py-[0.25rem] rounded'>
                {activeIndex + 1} / {images.length}
            </div>
            <button
                onClick={() =>
                    setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
                className='absolute left-[0.5rem] top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-[0.5rem] rounded-full'
            >
                <ChevronLeft />
            </button>
            <button
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                className='absolute right-[0.5rem] top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-[0.5rem] rounded-full'
            >
                <ChevronRight />
            </button>
        </div>
    )
}