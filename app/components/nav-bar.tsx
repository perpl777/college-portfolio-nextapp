import React from 'react'
import Image from 'next/image'
import title from '@/public/ПОРТФОЛИО.svg'
import DropdownMenu from './dropdown-menu'

const NavBar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-start justify-between pb-7 border-b border-black'>
                <DropdownMenu />
                <Image src={title} alt='title'/>
            </div>
            
            <div className='flex mr-20 gap-40 mt-4 justify-end'>
                <p className='text-gray-400 w-40'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
                <p className='text-gray-400 w-40'>
                    Новосибирский
                    колледж
                </p>
                <p className='text-gray-400 w-40'>
                    Новосибирский
                    колледж
                    печати
                    и информационных технологий
                </p>
            </div>
        </div>
    )
}

export default NavBar