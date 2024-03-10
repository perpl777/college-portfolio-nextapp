import React from 'react'
import { FC } from "react"
import Link from 'next/link'


interface PostProps {
	title: string
	subtitle: string
    image?: string
    date: string
    linkToDownload: string
    linkToWatch: string
}   


const Post:FC<PostProps> = ({title, subtitle, image, date, linkToDownload, linkToWatch}) => {

    return (
        <div className='flex flex-col w-10/12 m-auto pt-12 pb-8'>
            <p className='font-semibold text-5xl'>{title}</p>

            <div className='flex flex-row flex-wrap mt-8 gap-6'>
                {image && <img src={image} alt='post' width={396} height={336}/>}

                <div className='flex flex-col flex-wrap justify-between gap-8'>
                    {image ?
                        <p className='w-96 font-normal text-sm opacity-70'>{subtitle}</p>
                    :
                        <p className='w-7/12 font-normal text-sm opacity-70'>{subtitle}</p>
                    }

                    {image ?
                        <div className='flex flex-col gap-3'>
                            <Link href={linkToDownload}>
                                <button className='w-36 h-10 bg-black text-white text-xl'>скачать</button>
                            </Link>
                            <Link href={linkToWatch}>
                                <button className='w-48 h-10 border border-black text-xl'>просмотреть</button>
                            </Link>
                        </div>
                    :
                        <div className='flex gap-3'>
                            <Link href={linkToDownload}>
                                <button className='w-36 h-10 bg-black text-white text-xl'>скачать</button>
                            </Link>
                            <Link href={linkToWatch}>
                                <button className='w-48 h-10 border border-black text-xl'>просмотреть</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>

            <p className='pt-6 flex text-gray-600'>{date}</p>
        </div>
    )
}

export default Post