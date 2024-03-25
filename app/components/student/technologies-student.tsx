import React from 'react'
import data from '@/app/data';


/*выводим технологии студента */
const TechnologiesStudent = ({id_student}: any) => { 

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>{student?.technologies}</>
    )
}

export default TechnologiesStudent