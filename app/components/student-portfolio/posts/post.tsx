import React from 'react'
import { FC } from "react"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'


interface PostProps {
	title: string
	subtitle: string
    image?: StaticImageData
    date: string
    linkToDownload: string
    linkToWatch: string
}   

const Post:FC<PostProps> = ({title, subtitle, image, date, linkToDownload, linkToWatch}) => {
    return (
        <div className='flex flex-col w-11/12 pt-12 m-auto'>
            <p className='font-semibold text-5xl mb-8'>{title}</p>

            <div className='flex flex-row flex-wrap gap-6'>
                {image &&
                    <Image src={image} alt='work-image'></Image>
                }

                <div className='flex flex-col flex-wrap justify-between gap-8'>
                    {image ?
                        <p className='w-80 font-normal text-sm opacity-70'>{subtitle}</p>
                    :
                        <p className='w-7/12 font-normal text-sm opacity-70'>{subtitle}</p>
                    }

                    <div className='flex flex-col gap-3'>
                        <Link href={linkToDownload}>
                            <button className='w-36 h-10 bg-black text-white text-xl'>скачать</button>
                        </Link>
                        <Link href={linkToWatch}>
                            <button className='w-48 h-10 border border-black text-xl'>просмотреть</button>
                        </Link>
                    </div>
                </div>
            </div>

            <p className='pt-6 flex text-gray-600'>{date}</p>
        </div>
    )
}

export default Post