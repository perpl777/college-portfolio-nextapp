import React from 'react'
import data from '@/app/data';



/*выводим группу студента */
const GroupStudent= ({id_student}: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <>
            {student?.group}
        </>
    )
}

export default GroupStudent