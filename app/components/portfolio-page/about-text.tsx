import React from 'react';
import { FC } from "react"


interface AboutTextProps {
    text: string
}


const AboutText:FC<AboutTextProps> =({ text }) => {
    return (
        <div className='w-4/6 font-light text-xl'>
                {text}
        </div>
    );
};

export default AboutText;
