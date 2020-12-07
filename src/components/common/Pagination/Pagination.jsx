import React from "react";
import "./Pagination.css";
const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  next,
  previous,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const setOffset = (value) => {
  //   // if( pageNumbers.length-currentPage<5)
  //   console.log("LENGTHEY",pageNumbers.length)
  //   paginate(currentPage, postsPerPage);
  // };
  const renderPageNumbers = () => {
    let pages = [];
    console.log("LENGTHEY",pageNumbers.length)

    for (let i = currentPage; i <= currentPage + 4&&i<=pageNumbers.length; i++) {
      pages.push(
        <p
          key={i}
          className="margin-wd-10"
          style={{ cursor: "pointer" }}
         
        >
          <span  className={`${currentPage === i ? "onpage" : ""} page-link`} onClick={() => paginate(i)}> {i}</span>
        </p>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <ul className="pagination jsutify-content-center">
        <li className="page-item" style={{ cursor: "pointer" }}>
          <a className="page-link page-prev" onClick={() => previous()}>
            prev
          </a>
        </li>
        {/* {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)}  className={`${currentPage === number? 'onpage' : ''} page-link`}
>
              {number}
            </a>
          </li>
        ))} */}
        {renderPageNumbers()}
        <li className="page-item" style={{ cursor: "pointer" }}>
          <a className="page-link next" onClick={() => next(pageNumbers)}>
            next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
