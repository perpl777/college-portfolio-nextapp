import React from 'react'
import { FC } from "react"
import Link from 'next/link'
import Image from 'next/image'
import PdfIcon from "@/public/pdf.svg"

interface PostProps {
	title: string
	subtitle: string
    image?: string
    link: string
}   


const Post:FC<PostProps> = ({title, subtitle, image}) => {


    return (
        <div className='flex flex-col-reverse p-14 h-full border-black border max-[540px]:p-8'>
            <div className='flex justify-between items-end max-[380px]:flex-col max-[380px]:items-start max-[380px]:gap-6'>
                <div className='w-9/12 max-[380px]:w-full'>
                    <p className='font-bold text-5xl tracking-wide pt-10 max-[540px]:text-4xl max-[425px]:text-3xl max-[372px]:text-2xl'>
                        {title}
                    </p>
                    <p className='font-light text-sm opacity-70 pt-7'>{subtitle}</p>
                </div>

                <Link href='#'><Image src={PdfIcon} alt='pdf'></Image></Link>
            </div>

            {image && 
                <div className='rounded-sm'>
                    <img src={image} alt='post' max-width={567} max-height={385}/>
                </div>
            }
        </div>
    )
}

export default Post