import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { theme,page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className={`w-full flex justify-center items-center border-t border-slate-300 fixed bottom-0 py-4 ${theme ? 'bg-dark-background border-slate-700 ' : 'bg-white'}`}>
      <div className="flex justify-between w-11/12 max-w-[646px] items-center">
        <div className="flex gap-3">
          {page > 1 && (
            <button
            className={`rounded py-1 px-4 border-2 border-slate-300 ${theme?'border-slate-600':''}`}
              onClick={() => handlePageChange(page - 1)}
            >
              Prev
            </button>
          )}
          {page < totalPages && (
            <button
              className={`rounded py-1 px-4 border-2 border-slate-300 ${theme?'border-slate-600':''}`}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
 
        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;