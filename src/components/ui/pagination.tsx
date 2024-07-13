import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Importing Lucide icons

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-4" aria-label="Pagination">
      <ul className="flex justify-center items-center">
        {/* Previous Page Button */}
        <li
          className={`px-3 py-1 cursor-pointer ${
            currentPage === 1 ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => paginate(currentPage - 1)}
        >
          <ChevronLeft className="w-4 h-4 inline-block" />
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-3 py-1 cursor-pointer ${
              number === currentPage ? "font-bold" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </li>
        ))}

        {/* Next Page Button */}
        <li
          className={`px-3 py-1 cursor-pointer ${
            currentPage === Math.ceil(totalItems / itemsPerPage)
              ? "opacity-50 pointer-events-none"
              : ""
          }`}
          onClick={() => paginate(currentPage + 1)}
        >
          <ChevronRight className="w-4 h-4 inline-block" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
