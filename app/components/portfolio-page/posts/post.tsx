'use client'
import React from 'react'
import { FC } from "react"
import Link from 'next/link'
import { useState } from 'react'


interface PostProps {
	title: string
	subtitle: string
    image?: string
    link: string
}   


const Post:FC<PostProps> = ({title, subtitle, image, link}) => {

    const [showFullText, setShowFullText] = useState(false);
    const maxLength = 60; // Максимальная длина текста до сокрытия

    const toggleText = () => {
        setShowFullText(!showFullText);
    };


    return (
        <div className='flex flex-col gap-4 w-96 max-[500px]:w-72'>
            <p className='font-bold text-5xl max-[500px]:text-3xl'>{title}</p>

            {image && <img src={image} alt='post' width={396} height={336}/>}

            {image 
            ? 
                <div>
                    {showFullText 
                    ? (
                        <p className='font-light text-sm opacity-70'>{subtitle}</p>
                    ) : (
                        <p className='font-light text-sm opacity-70'>
                            {subtitle.length > maxLength ? `${subtitle.slice(0, maxLength)}...` : subtitle}
                            {subtitle.length > maxLength && (
                                <button onClick={toggleText}>
                                    pаскрыть
                                </button>
                            )}
                        </p>
                    )}
                </div>
            :
                <p className='font-light text-sm opacity-70'>{subtitle}</p>
            }

            <Link href={link}>
                <button className='w-52 h-8 bg-gray-800 text-white font-medium text-sm uppercase'>скачать</button>
            </Link>
        </div>
    )
}

export default Post