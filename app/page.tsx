import React, { Suspense } from 'react'
import Loading from './loading';
import SearchInput from "./components/search-input";
import Filter from "./components/filter/filter";
import StudentsTable from "./components/students-table";
import NavBar from "./components/navbar/nav-bar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <div className="flex flex-wrap justify-between gap-10 pr-40 pt-16 pb-12">
        <SearchInput />
        <Filter />
      </div>

      <Suspense fallback={<Loading />}>
        <StudentsTable />
      </Suspense>
    </div>
  );
}