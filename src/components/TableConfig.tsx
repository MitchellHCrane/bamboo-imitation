"use client";

import { IdentificationIcon, UserGroupIcon } from "@heroicons/react/16/solid";
import { PlusCircleIcon, Bars4Icon } from "@heroicons/react/24/outline";

const TableConfig = () => {
  return (
    <main className="flex items-center justify-between border-b border-borderSecondary">
      <div className="flex mb-[7px] items-center border hover:text-hoverPrimary hover:border-hoverPrimary hover:shadow-sm rounded-sm border-darkPrimary py-1 px-[15px] h-[34px] text-darkPrimary">
        <PlusCircleIcon className="size-4 mr-2" />
        <button
          onClick={() => alert("Add Employee Modal")}
          className="text-[15px] font-semibold"
        >
          New Employee
        </button>
      </div>
      <section className="flex flex-row pt-2 text-[14.0625px]">
        <button className="flex text-darkPrimary border-darkPrimary border-b-2 ml-[25px] px-4 pb-[11px] mt-[11px]  items-center">
          <Bars4Icon className="size-5 mr-2" />
          List
        </button>
        <button className="flex text-secondaryLink hover:text-darkPrimary ml-[25px] px-4 pb-[11px] mt-[11px]  items-center">
          <IdentificationIcon className="size-5 mr-2" />
          Directory
        </button>
        <button className="flex text-secondaryLink hover:text-darkPrimary ml-[25px] px-4 pb-[11px] mt-[11px]  items-center">
          <UserGroupIcon className="size-5 mr-2" />
          Org Chart
        </button>
      </section>
    </main>
  );
};

export default TableConfig;
