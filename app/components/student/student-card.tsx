import React from 'react'
import ContactsStudent from '@/app/components/student/contacts-student';
import GroupStudent from '@/app/components/student/group-student';
import ImageStudent from '@/app/components/student/image-student';
import NameStudent from '@/app/components/student/name-student';
import YearStudent from '@/app/components/student/year-students';
import TechnologiesStudent from '@/app/components/student/technologies-student';


const StudentCard = ({id_student}: any) => {
    return (
        <div className='grid grid-cols-2 max-lg:grid-cols-1'>
            <div className='justify-self-end max-lg:justify-self-start'>
                <ImageStudent id_student={id_student} />
            </div>

            <div className="bg-gray-50 flex flex-col flex-auto justify-between py-9 px-5 max-xl:w-[602px] max-lg:w-auto">
                <div className='flex justify-end gap-2'>
                    <ContactsStudent id_student={id_student}/>
                </div>

                <div>
                    <h1 className='titleName font-medium text-6xl max-sm:text-4xl'>
                        <NameStudent id_student={id_student} type='name_lastname'/>
                    </h1>
                    <table className="table table-sm mt-12 max-sm:table-xs">
                        <tbody> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-500 uppercase">Специальность</th>
                                <th className="pl-20 text-base font-normal"> <GroupStudent id_student={id_student}/> </th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-500 uppercase">Курс</th>
                                <th className="pl-20 text-base font-normal"> <YearStudent id_student={id_student}/> </th>
                            </tr> 
                            <tr className='border-b border-black'> 
                                <th className="p-0 text-xs font-normal text-gray-500 uppercase">Технологии</th>
                                <th className="pl-20 text-base font-normal"> <TechnologiesStudent id_student={id_student}/> </th>
                            </tr> 
                        </tbody> 
                    </table>
                </div>
            </div>

        </div>
    )
}

export default StudentCard