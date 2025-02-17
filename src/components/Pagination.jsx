import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center items-center border-t fixed bottom-0 py-4 dark:bg-dark-background dark:border-slate-700 bg-light-background border-light-border">
      <div className="flex justify-between w-11/12 max-w-[646px] items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
            className="rounded py-1 px-4 border-2 border-light-buttonBg hover:border-light-buttonHover dark:border-dark-buttonBg hover:dark:border-dark-buttonHover"
              onClick={() => handlePageChange(page - 1)}
            >
              Prev
            </button>
          )}
          {page < totalPages && (
            <button
              className="rounded py-1 px-4 border-2 border-light-buttonBg hover:border-light-buttonHover dark:border-dark-buttonBg hover:dark:border-dark-buttonHover"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
 
        <p className="font-bold text-sm text-light-text dark:text-dark-text">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;