import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImgWork from '@/public/Rectangle 3-1.png'


const WorksTable = () => {
    return (
        <div className="carousel carousel-center gap-5">
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
                <Link href='/portfolio'><Image src={ImgWork} alt='work' /></Link>
            </div> 
        </div>
    )
}

export default WorksTable