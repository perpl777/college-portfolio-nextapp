import React from 'react'


const MenuPosts = ({activeButton, setActiveButton}: any) => {
    const buttons = [
        {label: "Проекты"},
        {label: "Достижения"},
        {label: "Курсы"},
        {label: "Стажировки"},
        {label: "Спорт"},
        {label: "Волонтерство"}
    ]

    const mobileStyle = 'max-[425px]:py-2 max-[425px]:underline-offset-4'

    const handleButtonClick = (index: any) => {
        setActiveButton(index === activeButton ? null : index);
    };

    
    return (
        <div className='flex flex-row'>
            <div className='grow border-t border-l border-r border-black'>
                <div className='flex flex-row justify-evenly max-md:flex-none max-md:grid max-md:grid-cols-3 max-[425px]:grid-cols-1 '>
                    {buttons.map((button, index: number) => 
                        <button 
                            key={button.label} 
                            className={`text-center py-6 text-base text-black underline-offset-[30px] ${index === activeButton ? 'underline font-medium' : ''} ${mobileStyle}`}
                            onClick={() => handleButtonClick(index)}
                        >
                            <span>{button.label}</span>
                        </button>
                    )}
                </div>
            </div>
            <div className='shrink basis-1/4 border-b border-black max-md:flex-none'></div>
        </div>
    )
}

export default MenuPosts
