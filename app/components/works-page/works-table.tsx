import React from 'react'
import Link from 'next/link'
import data from '@/app/data'


interface WorksTable {
    id: number;
    id_student: string;
    image?: string;
}


const WorksTable = () => {
    const filteredWorks = data.work.filter((work) => work?.image != undefined);

    return (
        <div className="carousel carousel-center gap-5">
            {filteredWorks.map((work, index) => (
                work?.image && index % 2 === 0 && (
                    <div key={index} className="carousel-item grid grid-rows-2 gap-5">
                        
                        <Link href={`/portfolio/${work.id_student}`}>
                            <img src={work.image} alt='work' width={400} height={300} className='cursor-pointer'/>
                        </Link>

                        {filteredWorks[index + 1] && (
                            <Link href={`/portfolio/${filteredWorks[index + 1]?.id_student}`}>
                                <img key={index+1} src={filteredWorks[index + 1]?.image} alt='work' width={400} height={300} className='cursor-pointer'/>
                            </Link>
                        )}
                    </div>
                )
            ))}

        </div>
    )
}

export default WorksTable