'use client'
import React from 'react'
import Image from 'next/image'
import search from '@/public/bx-search 1.svg'

interface Props {
    setSearchQuery: (query: string) => void;
}

const SearchInput = ({ setSearchQuery }: Props) => {
    return (
        <div>
            <label className="border-b border-black flex gap-2 items-center w-64">
                <Image src={search} className="ml-2" alt='title'/>
                <input type="text" 
                    className="grow outline-none" 
                    placeholder="Найти студента" 
                    onChange={(e) => setSearchQuery(e.target.value)}/>
            </label>
        </div>
    )
}

export default SearchInput