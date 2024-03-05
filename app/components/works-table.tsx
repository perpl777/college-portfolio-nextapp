import React from 'react'
import Image from 'next/image'
import ImgWork from '@/public/Rectangle 3-1.png'


const WorksTable = () => {
    return (
        <div className="carousel carousel-center gap-5">
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Image src={ImgWork} alt='work' />
                <Image src={ImgWork} alt='work' />
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Image src={ImgWork} alt='work' />
                <Image src={ImgWork} alt='work' />
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Image src={ImgWork} alt='work' />
                <Image src={ImgWork} alt='work' />
            </div> 
            <div className="carousel-item grid grid-rows-2 gap-5">
                <Image src={ImgWork} alt='work' />
                <Image src={ImgWork} alt='work' />
            </div> 
        </div>
    )
}

export default WorksTable