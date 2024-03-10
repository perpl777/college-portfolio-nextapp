import React, { Suspense } from 'react'
import Loading from '../loading';
import Filter from "../components/filter/filter";
import WorksTable from "../components/works-page/works-table";


export default function Works() {
    return (
        <div className='px-11'>
            <div className="pt-16 pb-12">
                <Filter />
            </div>
            
            <Suspense fallback={<Loading />}>
                <WorksTable />
            </Suspense>
        </div>
    );
}
