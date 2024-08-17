import { IdentificationIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import {
  PlusCircleIcon,
  ArrowTopRightOnSquareIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

const TableConfig = () => {
  return (
    <main className="flex items-center justify-between border-b border-borderSecondary">
      <a
        href="#"
        className="flex mb-[7px] items-center border hover:text-hoverPrimary hover:border-hoverPrimary hover:shadow-sm rounded-sm border-darkPrimary py-1 px-[15px] h-[34px] text-darkPrimary"
      >
        <PlusCircleIcon className="size-4 mr-2" />
        <p className="text-[15px] font-semibold">New Employee</p>
      </a>
      <section className="flex flex-row pt-2 text-[14.0625px]">
        <div className="flex text-darkPrimary border-darkPrimary border-b-2 ml-[25px] px-4 pb-[11px] mt-[11px]  items-center">
          <Bars4Icon className="size-5 mr-2" />
          List
        </div>
        <p className="flex  ml-[25px] mx-4 my-[11px]  items-center text-secondaryLink">
          <IdentificationIcon className="size-5 mr-2" />
          Directory
        </p>
        <p className="flex  ml-[25px] mx-4 my-[11px]  items-center text-secondaryLink">
          <UserGroupIcon className="size-5 mr-2" />
          Org Chart
        </p>
      </section>
    </main>
  );
};

export default TableConfig;
