import React from 'react'
import menu from '@/public/bx-menu 2.svg'
import Image from 'next/image'

const AdminMenu = () => {
  return (
    <div>
        <Image 
            src={menu} 
            alt='menu' 
            className='cursor-pointer
            absolute right-0 my-5 mx-10'
            />
    </div>
  )
}

export default AdminMenu