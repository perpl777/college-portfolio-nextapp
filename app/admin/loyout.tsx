import React, { ReactNode } from 'react'


interface Props{
    children: ReactNode
}

const Adminlayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            
            {children}
        </div>
    )
}

export default Adminlayout