import React, { Suspense } from 'react'
import Loading from '../loading';
import Filter from "../components/filter/filter";
import WorksTable from "../components/works-table";
import NavBar from "../components/navbar/nav-bar";

export default function Works() {
    return (
        <div>
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
