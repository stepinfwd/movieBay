import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate,next,previous,currentPage}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage)-10; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination-container">
      <ul className="pagination jsutify-content-center">
        <li className="page-item">
          <a className="page-link page-prev" onClick={()=>previous()}>prev</a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)}  className={`${currentPage === number? 'onpage' : ''} page-link`}
>
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link next" onClick={()=>next(pageNumbers)}>next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
