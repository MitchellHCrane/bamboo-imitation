import { ChevronDownIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

const TypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative inline-block">
      <div
        className={`${
          isOpen && "border-darkPrimary outline outline-outlinePrimary"
        } border rounded-sm border-borderSecondary h-[34px] w-[225px] my-auto flex justify-between items-center cursor-pointer`}
        onClick={toggleDropdown}
      >
        <p className="text-text text-[15px] py-[1px] pl-[11px] pr-[1px]">
          All Employees
        </p>
        <ChevronDownIcon className="size-8 px-2 text-secondaryLink ml-1" />
      </div>
      {isOpen && (
        <ul
          className={`${
            isOpen && "border-darkPrimary outline outline-outlinePrimary"
          } absolute z-10 mt-1 w-full border rounded-sm border-borderSecondary bg-white shadow-lg`}
        >
          {[
            "Contractors",
            "Hourly Employees",
            "Managers",
            "New Employees",
            "Salary Employees",
            "Terminated People",
            "Upcoming Employees",
            "Manage Filters",
          ].map((option, index) => (
            <li
              key={index}
              className={`${
                option === "Manage Filters"
                  ? "border-borderSecondary border-t"
                  : ""
              } text-text text-[15px] py-[8px] pl-[11px] pr-[1px] hover:bg-darkPrimary hover:text-white cursor-pointer`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TypeDropdown;
