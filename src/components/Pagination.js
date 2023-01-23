import React from "react";
import "./pagination.scss";

const Pagination = ({
  totalPosts,
  postPerPage,
  setCurrentPage,
  rowsPerPage,
  currentPage,
  handleChangeRowsPerPage,
  rows,
  headerText,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pages?.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div className="selection-dropdown">
        Select rows
        <select
          name="items"
          value={rowsPerPage}
          onChange={handleChangeRowsPerPage}
        >
          {rows.map((index, lable) => {
            return (
              <option
                key={`${headerText}${index}`}
                value={`${index}`}
              >{`${index}`}</option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Pagination;
