import React, { ReactNode } from 'react'
import menu from '@/public/bx-menu 2.svg'
import Image from 'next/image'
import AdminMenu from './components/menu'

interface Props{
    children: ReactNode
}

const Adminlayout = ({ children }: Props) => {
    return (
        <div>
            <AdminMenu />

            {children}
        </div>
    )
}

export default Adminlayout