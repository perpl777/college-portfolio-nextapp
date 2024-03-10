import React from 'react';
import { FC } from "react"
import Link from 'next/link';
import Image from 'next/image';
import Github from '@/public/contacts-icons/bxl-github 2.svg';
import Vk from '@/public/contacts-icons/bxl-vk 2.svg';
import Behance from '@/public/contacts-icons/bxl-behance 2.svg';
import ImageStudent from '@/public/student.png'


interface StudentCardProps {
    name: string;
    lastname: string;
    group: string;
    year: string;
    technologies: string;
    image?: string;
    contacts: {
        github: string,
        behance: string,
        vk: string
    }
}


const StudentCard:FC<StudentCardProps> =({ name, lastname, group, year, technologies, image, contacts }) => {
    return (
        <div className='flex flex-row flex-wrap pt-20 px-11 m-auto w-11/12'>

            <Image src={ImageStudent} alt="student"/>

            <div className="bg-gray-50 flex flex-col flex-auto justify-between py-9 px-5">

                <div className='flex justify-end gap-2'>
                    <Link href={contacts.behance}> <Image src={Behance} alt='behance'></Image> </Link>
                    <Link href={contacts.github}> <Image src={Github} alt='github'></Image> </Link>
                    <Link href={contacts.vk}> <Image src={Vk} alt='vk'></Image> </Link>
                </div>

                <div>
                    <h1 className='titleName font-medium text-6xl'>{lastname} {name}</h1>

                    <table className="table table-sm mt-12">
                        <tbody> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Специальность</th>
                                <th className="pl-20 text-base font-normal"> {group} </th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Курс</th>
                                <th className="pl-20 text-base font-normal"> {year} </th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Технологии</th>
                                <th className="pl-20 text-base font-normal"> {technologies} </th>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </div>

        </div>
    );
};

export default StudentCard;
