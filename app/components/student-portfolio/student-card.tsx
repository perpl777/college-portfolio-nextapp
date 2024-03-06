import React from 'react';
import Image from 'next/image';
import StudentImg from '@/public/student.png';
import Github from '@/public/contacts-icons/bxl-github 2.svg';
import Vk from '@/public/contacts-icons/bxl-vk 2.svg';
import Behance from '@/public/contacts-icons/bxl-behance 2.svg';


const StudentCard = () => {
    return (
        <div className='flex flex-row flex-wrap m-auto w-11/12'>
            
            <Image src={StudentImg} alt="student"/>

            <div className="bg-gray-50 flex flex-col flex-auto justify-between pb-9 pt-9 pl-5 pr-5">

                <div className='flex justify-end gap-1'>
                    <Image src={Behance} alt='behance'></Image>
                    <Image src={Github} alt='github'></Image>
                    <Image src={Vk} alt='vk'></Image>
                </div>

                <div>
                    <h1 className='font-medium text-6xl'>Лена Иванова</h1>

                    <table className="table table-sm mt-12">
                        <tbody> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Специальность</th>
                                <th className="pl-20 text-base font-normal">Дизайн</th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Курс</th>
                                <th className="pl-20 text-base font-normal">3</th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-400 uppercase">Технологии</th>
                                <th className="pl-20 text-base font-normal">Ptotoshop, Figma, Illustrator</th>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </div>

        </div>
    );
};

export default StudentCard;
