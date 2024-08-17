"use client";
import { useState } from "react";
import Image from "next/image";

const employeeData = [
  {
    photo: "",
    employeeNumber: "E1234",
    lastName: "Smith",
    firstName: "John",
    jobTitle: "Software Engineer",
    location: "New York",
    employmentStatus: "Full-Time",
    hireDate: "2021-06-15",
  },
  {
    photo: "",
    employeeNumber: "E1234",
    lastName: "yohan",
    firstName: "John",
    jobTitle: "Software Engineer",
    location: "New York",
    employmentStatus: "Full-Time",
    hireDate: "2021-06-15",
  },
];

const PeopleTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 5;

  const totalPages = Math.ceil(employeeData.length / rowsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Employee Photo</th>
        <th>Employee #</th>
        <th>Last Name</th>
        <th>First Name</th>
        <th>Job Title</th>
        <th>Location</th>
        <th>Employment Status</th>
        <th>Hire Date</th>
      </tr>
    );
  };

  const renderTableData = () => {
    const startIndex = currentPage * rowsPerPage;
    const selectedData = employeeData.slice(
      startIndex,
      startIndex + rowsPerPage
    );

    return selectedData.map((employee, index) => (
      <tr key={index}>
        <td>
          <Image
            src={employee.photo}
            alt="Employee"
            className="w-10 rounded-full"
            width={50}
            height={50}
          />
        </td>
        <td>{employee.employeeNumber}</td>
        <td>{employee.lastName}</td>
        <td>{employee.firstName}</td>
        <td>{employee.jobTitle}</td>
        <td>{employee.location}</td>
        <td>{employee.employmentStatus}</td>
        <td>{new Date(employee.hireDate).toLocaleDateString()}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="text-text">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">{renderTableHeader()}</thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {renderTableData()}
        </tbody>
      </table>
      {renderPagination()}
    </div>
  );
};

export default PeopleTable;
