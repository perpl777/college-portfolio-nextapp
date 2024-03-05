import React, { Suspense } from 'react'
import SearchInput from "./components/search-input";
import Filter from "./components/filter/filter";
import StudentsTable from "./components/students-table";
import NavBar from "./components/navbar/nav-bar";
import Loading from './loading';

export default function Home() {
  return (
    <div>
        <NavBar />

      <div className="flex flex-wrap justify-between gap-14 pr-40 pt-16 pb-12">
        <SearchInput />
        <Filter />
      </div>
      <Suspense fallback={<Loading />}>
        <StudentsTable />
      </Suspense>
    </div>
  );
}