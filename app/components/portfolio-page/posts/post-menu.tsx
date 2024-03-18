import React from 'react'

const MenuPosts = ({activeButton, setActiveButton}: any) => {
    const buttons = [
        {label: "Проекты", index: 0},
        {label: "Достижения", index: 1},
        {label: "Курсы", index: 2},
        {label: "Стажировки", index: 3},
        {label: "Спорт", index: 4},
        {label: "Волонтерство", index: 5}
    ]

    const mobileStyle = 'max-[425px]:py-2 max-[425px]:underline-offset-4'

    const handleButtonClick = (index: any) => {
        setActiveButton(index === activeButton ? null : index);
    };

    return (
        <div className='flex flex-row justify-evenly max-md:flex-none max-md:grid max-md:grid-cols-3 max-[425px]:grid-cols-1 '>
            {buttons.map((button, index: number) => 
                <button 
                    key={button.label} 
                    className={`text-center py-6 text-base text-black underline-offset-[30px] transition-all ${index === activeButton ? 'underline font-medium' : ''} ${mobileStyle}`}
                    onClick={() => handleButtonClick(index)}
                >
                    <span>{button.label}</span>
                </button>
            )}
        </div>
    )
}

export default MenuPosts
