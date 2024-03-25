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


    /*стили для адаптива */
    const stylesAdaptive = {
        menu: 'max-lg:grid max-lg:grid-cols-3 max-lg:pl-0 max-lg:gap-10 max-[540px]:grid-cols-2 max-[540px]:py-6 max-[407px]:grid-cols-1 max-[407px]:gap-3',
        button: 'max-[425px]:py-2 max-[425px]:underline-offset-4'
    }


    const handleButtonClick = (buttonIndex: any) => {
        setActiveButton(buttonIndex === activeButton ? null : buttonIndex);
    };

    return (
        <div className={`flex pl-14 py-7 border border-black gap-20 ${stylesAdaptive.menu}`}>
            {buttons.map((button, index) => 
                <button 
                    key={button.label} 
                    className = {`text-center text-base text-black underline-offset-[15px] ${index === activeButton ? 'underline font-medium' : ''} ${stylesAdaptive.button}`}
                    onClick={() => handleButtonClick(button.index)}
                >
                    <span>{button.label}</span>
                </button>
            )}
        </div>
    )
    
}

export default MenuPosts
