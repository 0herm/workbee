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
            <div className='
              absolute top-2 right-2 rounded-sm bg-black/50 px-2 py-1 text-white
            '>
                {activeIndex + 1} / {images.length}
            </div>
            <button
                onClick={() =>
                    setActiveIndex((activeIndex - 1 + images.length) % images.length)
                }
                className='
                  absolute top-1/2 left-2 -translate-y-1/2 transform
                  rounded-full bg-black/50 p-2 text-white
                '
            >
                <ChevronLeft />
            </button>
            <button
                onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
                className='
                  absolute top-1/2 right-2 -translate-y-1/2 transform
                  rounded-full bg-black/50 p-2 text-white
                '
            >
                <ChevronRight />
            </button>
        </div>
    )
}