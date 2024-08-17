import PeopleTable from "@/components/PeopleTable";
import TableConfig from "@/components/TableConfig";
import TableFilters from "@/components/TableFilters";
import TableTop from "@/components/TableTop";

export default function People() {
  return (
    <main className="bg-white px-8 h-screen">
      <div className="max-w-[1348px] mx-auto">
        {/* Top of Table */}
        <TableTop />
        {/* Table Config */}
        <TableConfig />
        {/* Table Filters */}
        <TableFilters />
        {/* Table  */}
        <PeopleTable />
      </div>
    </main>
  );
}
