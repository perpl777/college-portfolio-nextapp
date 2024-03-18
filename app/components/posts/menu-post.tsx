import React from 'react'


const MenuPosts = ({activeButton, setActiveButton}: any) => {
    const buttons = [
        {label: "Проекты", index: 0},
        {label: "Достижения", index: 1},
        {label: "Курсы", index: 2},
        {label: "Стажировки", index: 3},
        {label: "Спорт", index: 4},
        {label: "Волонтерство", index: 5}
    ];

    const handleButtonClick = (buttonIndex: any) => {
        setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
    };


    const mobileStyle = 'max-[425px]:py-2 max-[425px]:underline-offset-4'
    
    return (
        <div className='flex flex-row'>
            <div className='grow border-t border-l border-r border-black'>
                <div className='flex flex-row justify-evenly max-md:flex-none max-md:grid max-md:grid-cols-3 max-[425px]:grid-cols-1 '>
                    {buttons.map((button, index) => 
                        <button 
                            key={button.label} 
                            className={`text-center py-6 text-base text-black underline-offset-[30px] ${index === activeButton ? 'underline font-medium' : ''} ${mobileStyle}`}
                            onClick={() => handleButtonClick(button.index)}
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
