import {
  Bars4Icon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const TableTop = () => {
  return (
    <section className="flex items-baseline justify-between">
      <div className="flex items-center mt-[21px] text-darkPrimary">
        <Bars4Icon className="size-8" />
        <p className="mx-[15px] my-[11px] text-[2.266rem] font-bold">People</p>
      </div>
      <button className="flex items-center text-link hover:text-darkPrimary ">
        <ArrowTopRightOnSquareIcon className="size-4 mr-1.5" />
        Quick access to the directory
      </button>
    </section>
  );
};

export default TableTop;
