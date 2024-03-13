import React from 'react'
import { FC } from "react"
import Link from 'next/link'
import { linkSync } from 'fs'


interface PostProps {
	title: string
	subtitle: string
    image?: string
    date: string
    link: string
}   


const Post:FC<PostProps> = ({title, subtitle, image, date, link}) => {

    return (
        <div className='flex flex-col w-10/12 m-auto pt-12 pb-8'>
            <p className='font-semibold text-5xl'>{title}</p>

            <div className='flex flex-row flex-wrap mt-8 gap-8'>
                {image && <img src={image} alt='post' width={396} height={336}/>}

                <div className='flex flex-col flex-wrap justify-between gap-8'>
                    {image ?
                        <p className='w-96 font-normal text-sm opacity-70'>{subtitle}</p>
                    :
                        <p className='w-7/12 font-normal text-sm opacity-70'>{subtitle}</p>
                    }
                    <div className='flex items-end gap-24'>
                        <Link href={link}>
                            <button className='w-28 h-9 bg-black text-white font-medium text-base uppercase'>скачать</button>
                        </Link>

                        <p className='text-gray-600'>{date}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post