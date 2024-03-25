import React from 'react'
import data from '@/app/data'


/*выводим курс студента */
const YearStudent = ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>
            {student?.year}
        </>
    )
}

export default YearStudent