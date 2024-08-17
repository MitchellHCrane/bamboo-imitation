import { Cog6ToothIcon, UsersIcon } from "@heroicons/react/16/solid";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const TableFilters = () => {
  return (
    <main className="flex items-center justify-between pt-6 ">
      {/* Left  */}
      <section className="flex items-center">
        <div className="border mr-[10px] rounded-sm border-iconSecondary h-[34px] my-auto flex items-center">
          <AdjustmentsHorizontalIcon className="size-5 text-iconSecondary mx-[11px]" />
        </div>
        <div className="border rounded-sm border-borderSecondary h-[34px] w-[225px] my-auto flex justify-between items-center">
          <p className="text-text text-[15px] py-[1px] pl-[11px] pr-[1px]">
            All Employees
          </p>
          <ChevronDownIcon className="size-8 px-2 bg-secondary h-full text-secondaryLink ml-1" />
        </div>
        <div className="flex items-center">
          <UsersIcon className="size-5 ml-3 mr-[5px] text-darkSecondary" />{" "}
          <p className="text-darkSecondary font-light">10</p>
        </div>
      </section>
      {/* Right  */}
      <section className="flex items-center">
        <div className="flex items-center">
          <p className="text-darkSecondary text-[14px]">Showing</p>
        </div>
        <div className="border mx-[10px] rounded-sm border-borderSecondary h-[34px] my-auto flex justify-between items-center">
          <p className="text-text text-[15px] mr-1 py-[1px] pl-[11px] pr-[1px]">
            Active
          </p>
          <ChevronDownIcon className="size-8 px-2 bg-secondary h-full text-secondaryLink ml-1" />
        </div>
        <div className="border mr-[10px] rounded-sm border-iconSecondary h-[34px] p-[11px] my-auto flex items-center">
          <Cog6ToothIcon className="size-5 text-iconSecondary" />
          <ChevronDownIcon className="size-4 ml-2 text-iconSecondary" />
        </div>
      </section>
    </main>
  );
};

export default TableFilters;
