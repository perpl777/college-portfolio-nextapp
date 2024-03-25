import React from 'react';
import data from '@/app/data';



/*выводим описание студента */
const AboutText =({ id_student }: any) => {

    const student = data.students.find((stud) => stud.id == id_student);

    return (
        <span className='w-4/6 max-[900px]:w-full'>
            {student?.about}
        </span>
    );
};

export default AboutText;
