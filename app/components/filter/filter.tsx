/* eslint-disable react/jsx-key */
'use client'

import React from 'react'
import Arrow from '@/public/bx-chevron-down 1.svg'
import Image from 'next/image'
import Checkbox from "./checkbox";
import { useState } from 'react';
import { gsap } from 'gsap';


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

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        const dropdownContent = document.querySelector('.dropdown-content');

        if (isOpen) {
            gsap.to(dropdownContent, { opacity: 0, y: -20, duration: 0.6, ease: 'power3.out' });
        } else {
            gsap.to(dropdownContent, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' });
        }
    };

    return (
        <div className='flex flex-wrap items-center gap-7'>
            <details className="dropdown grid grid-cols-1 sm:grid-cols-3 gap-7">
                <summary tabIndex={0} 
                    onClick={handleClick}
                    role="button" 
                    className="flex pl-1 gap-1 w-72 border border-gray-800 bg-white rounded-lg">
                        <Image src={Arrow} alt='arrow'></Image>
                        Все специальности
                </summary>

                <ul tabIndex={0} 
                    className="dropdown-content z-[1] menu bg-white rounded-lg text-base">
                        {groups.map((group) => (
                            <li><a> {group} </a></li>
                        ))}
                </ul>
            </details>

            <Checkbox />
        </div>
    )
}

export default Filter