import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import data from '@/app/data';
import Github from '@/public/contacts-icons/bxl-github 2.svg';
import Vk from '@/public/contacts-icons/bxl-vk 2.svg';
import Behance from '@/public/contacts-icons/bxl-behance 2.svg';



/*выводим контакты студента */
const ContactsStudent = ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>
            {student && 
                <>
                    <Link href={student.contacts.behance}> <Image src={Behance} alt='behance'></Image> </Link>
                    <Link href={student.contacts.github}> <Image src={Github} alt='github'></Image> </Link>
                    <Link href={student.contacts.vk}> <Image src={Vk} alt='vk'></Image> </Link>
                </>
            }
        </>
    )
}

export default ContactsStudent