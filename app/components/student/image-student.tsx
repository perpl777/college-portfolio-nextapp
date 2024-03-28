import React from 'react'
import data from '@/app/data';
import Image from 'next/image';
import ImgStudent from '@/public/student.png'



/*выводим фото студента*/
const ImageStudent = ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <Image src={ImgStudent} alt="student" width={602} height={566}/>
    )
}

export default ImageStudent