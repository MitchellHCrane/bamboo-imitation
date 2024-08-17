import PeopleTable from "@/components/PeopleTable";
import {
  ArrowTopRightOnSquareIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="bg-white px-8">
      {/* Top of Table */}
      <section className="flex items-baseline justify-between">
        <div className="flex items-center mt-[21px] text-darkPrimary">
          <Bars4Icon className="size-8" />
          <p className="mx-[15px] my-[11px] text-[2.266rem] font-bold">
            People
          </p>
        </div>
        <p className="flex items-center text-link">
          <ArrowTopRightOnSquareIcon className="size-4 mr-1.5" />
          Quick access to the directory
        </p>
      </section>
      {/* Table  */}
      <section>
        <PeopleTable />
      </section>
    </main>
  );
}
