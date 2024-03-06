import React from 'react';
import Image from 'next/image';
import StudentImg from '@/public/student.png';
import Github from '@/public/contacts/bxl-github 2.svg';
import Vk from '@/public/contacts/bxl-vk 2.svg';
import Behance from '@/public/contacts/bxl-behance 2.svg';

const StudentCard = () => {
    return (
        <div className='flex flex-col items-center md:flex-row pr-16 pl-16'>
            
            <div className="mb-4 md:mb-0 md:mr-4">
                <Image src="/your-image.jpg" alt="Your image" width={300} height={200} />
            </div>

            <div className="md:order-2 md:pl-6 md:pr-6 bg-gray-100 flex-auto">
            </div>
        </div>
    );
};

export default StudentCard;
