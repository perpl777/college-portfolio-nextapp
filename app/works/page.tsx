import Filter from "../components/filter/filter";
import WorksTable from "../components/works-table";


export default function Works() {
    return (
        <div>
            <div className="pt-16 pb-12">
                <Filter />
            </div>
            
            <WorksTable />
        </div>
    );
}
