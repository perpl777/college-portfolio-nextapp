/* eslint-disable react/jsx-key */
'use client'

import React from 'react'
import Arrow from '@/public/bx-chevron-down 1.svg'
import Image from 'next/image'
import Checkbox from "./checkbox";


const Filter = () => {

    const groups = [
        "Информационные системы и программирование", 
        "Реклама", 
        "Дизайн", 
        "Графический дизайн", 
        "Коммерческий дизайн", 
        "Печатное дело", 
        "Издательское дело",
        "Издательское дело и реклама",
        "Изделия из бумаги и картона", 
    ]

    return (
        <div className='flex flex-wrap sm:flex-nowrap gap-6'>
            <div className="dropdown grid-cols-1 sm:grid-cols-3">
                <summary 
                    tabIndex={0} 
                    role="button" 
                    className="flex pl-2 py-2 gap-1 w-72 border border-gray-800 bg-white rounded-lg"
                >
                    <Image src={Arrow} alt='arrow' />
                    Все специальности
                </summary>

                <ul tabIndex={0} className="dropdown-content z-[1] menu bg-white rounded-lg text-base">
                    {groups.map((group, index) => (
                        <li key={index}><a> {group} </a></li>
                    ))}
                </ul>
            </div>
            <Checkbox />
        </div>
    )
}

export default Filter