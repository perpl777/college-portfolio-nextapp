import React from 'react'
import Image from 'next/image'
import menu from '@/public/bx-menu 2.svg'
import Link from 'next/link'

const DropdownMenu = () => {
    return (
        <div className="dropdown dropdown-bottom">
            
            <div tabIndex={0} role="button">
                <Image src={menu} alt='menu' className='cursor-pointer'/>
            </div>

            <ul tabIndex={0} className="dropdown-content z-[1] mt-4 w-52 menu rounded-lg border-2 border-black bg-white">
                <li><Link href='/' className='font-medium text-base'>Все студенты</Link></li>
                <li><Link href='/designs' className='font-medium text-base'>Все дизайны</Link></li>
            </ul>
        </div>
    )
}

export default DropdownMenu