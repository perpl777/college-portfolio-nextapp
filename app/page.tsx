import SearchInput from "./components/search-input";
import Filter from "./components/filter/filter";
import StudentsTable from "./components/students-table";


export default function Home() {
  return (
    <div>
      <div className="flex flex-wrap justify-between gap-14 pr-40 pt-16 pb-12">
        <SearchInput />
        <Filter />
      </div>
      
      <StudentsTable />
    </div>
  );
}