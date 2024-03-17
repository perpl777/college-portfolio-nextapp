'use client'
import React, { useState } from 'react'


const MenuPosts = () => {

    const buttons = [
        {label: "Проекты"},
        {label: "Достижения"},
        {label: "Курсы"},
        {label: "Стажировки"},
        {label: "Спорт"},
        {label: "Волонтерство"}
    ]

    const mobileStyle = 'max-[425px]:py-2 max-[425px]:underline-offset-4'

    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index === activeButton ? null : index);
    };

    return (
        <div className='flex flex-row justify-evenly max-md:flex-none max-md:grid max-md:grid-cols-3 max-[425px]:grid-cols-1 '>
            {buttons.map((button, index) => 
                <button 
                    key={button.label} 
                    className = {`text-center py-6 text-base text-black underline-offset-[30px] ${index === activeButton ? 'underline font-medium' : ''} ${mobileStyle}`}
                    onClick={() => handleButtonClick(index)}
                >
                        <span> {button.label} </span>
                </button>
            )}
        </div>
    )
}

export default MenuPosts