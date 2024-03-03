import React from 'react'
import Image from 'next/image'
import search from '@/public/bx-search 1.svg'


const SearchInput = () => {
    return (
        <div>
            <label className="border-b border-black flex gap-2 items-center w-64">
                <Image src={search} className="ml-2" alt='title'/>
                <input type="text" className="grow outline-none" placeholder="Найти студента" />
            </label>
        </div>
    )
}

export default SearchInput