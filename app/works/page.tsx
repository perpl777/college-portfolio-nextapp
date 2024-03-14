import React, { Suspense } from 'react'
import Loading from '../loading';
import Filter from "../components/filter/filter";
import WorksTable from '../components/works-page/works-table';
import NavBar from '../components/header/header';


export default function Works() {
    return (
        <div className='px-11'>
            <NavBar />

            <div className="pt-16 pb-12">
                <Filter />
            </div>
            
            <Suspense fallback={<Loading />}>
                <WorksTable />
            </Suspense>
        </div>
    );
}
