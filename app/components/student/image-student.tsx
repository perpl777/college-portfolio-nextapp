import React from 'react'
import data from '@/app/data';
import Image from 'next/image';
import ImgStudent from '@/public/student.png'


const ImageStudent = ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <Image src={ImgStudent} alt="student"/>
    )
}

export default ImageStudent