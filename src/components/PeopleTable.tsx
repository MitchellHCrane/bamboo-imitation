"use client";
import { useState } from "react";

const employeeData = [
  {
    photo: "",
    employeeNumber: "E1234",
    name: "Crane, Mitch",
    jobTitle: "Software Engineer",
    location: "Santaquin",
    employmentStatus: "Full-Time",
    hireDate: "2024-09-1",
  },
  {
    photo: "",
    employeeNumber: "E1234",
    name: "Brower, Andrew",
    jobTitle: "Software Engineer",
    location: "Utah",
    employmentStatus: "Full-Time",
    hireDate: "2024-02-15",
  },
  {
    photo: "",
    employeeNumber: "E1234",
    name: "Nelson, Ty",
    jobTitle: "SAE",
    location: "Utah",
    employmentStatus: "Full-Time",
    hireDate: "2024-02-15",
  },
  {
    photo: "",
    employeeNumber: "E1234",
    name: "Nelson, Zack",
    jobTitle: "SAE",
    location: "Utah",
    employmentStatus: "Full-Time",
    hireDate: "2024-02-15",
  },
];

const PeopleTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  const headers = [
    `Employee<br />Photo`,
    "Employee<br />#",
    "Last Name,<br />First Name",
    "Job<br />Title",
    "Location",
    "Employment<br />Status",
    "Hire<br />Date",
  ];

  const renderTableHeader = () => {
    return (
      <tr className="bg-secondary">
        {headers.map((header, index) => (
          <th
            key={index}
            className={`border-box text-left pt-3 px-4 pb-[11px] text-iconSecondary text-[15px]`}
            dangerouslySetInnerHTML={{ __html: header }}
          />
        ))}
      </tr>
    );
  };

  const renderTableData = () => {
    const startIndex = currentPage * rowsPerPage;
    const selectedData = employeeData.slice(
      startIndex,
      startIndex + rowsPerPage
    );

    return selectedData.map((employee, index) => {
      const [lastName, firstName] = employee.name
        .split(", ")
        .map((name) => name.trim());

      const initials = `${firstName[0]}${lastName[0]}`;

      return (
        <tr className="border-b border-borderSecondary" key={index}>
          <td className="pt-[13px] px-4 pb-[15px]">
            <div className="flex w-[86px] h-[86px] items-center text-4xl text-white justify-center bg-profileSecondary rounded-full">
              {initials}
            </div>
          </td>
          <td className="box-border align-top pt-[13px] px-4 pb-[15px]">
            {employee.employeeNumber}
          </td>
          <td className="text-link box-border align-top pt-[13px] px-4 pb-[15px]">
            {employee.name}
          </td>
          <td className="box-border align-top pt-[13px] px-4 pb-[15px]">
            {employee.jobTitle}
          </td>
          <td className="box-border align-top pt-[13px] px-4 pb-[15px]">
            {employee.location}
          </td>
          <td className="box-border align-top pt-[13px] px-4 pb-[15px]">
            {employee.employmentStatus}
          </td>
          <td className="box-border align-top pt-[13px] px-4 pb-[15px]">
            {new Date(employee.hireDate).toLocaleDateString()}
          </td>
        </tr>
      );
    });
  };

  const renderPagination = () => {
    return (
      <div className="flex gap-1 py-4 text-secondaryLink text-[14px]">
        <p>1-2</p>
        <p>of</p>
        <p>2</p>
      </div>
    );
  };

  return (
    <div className="text-text pt-6 border-b border-borderSecondary">
      <table className="min-w-full">
        <thead className="bg-gray-50">{renderTableHeader()}</thead>
        <tbody className="bg-white">{renderTableData()}</tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default PeopleTable;
