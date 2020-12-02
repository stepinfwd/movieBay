import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Loader from "../common/Loader/Loader";
import Pagination from "../common/Pagination/Pagination";
function CardList({ data, value }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(15);
  // PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const previous = () => setCurrentPage(currentPage-1);
  const next = () => setCurrentPage(currentPage+1);


  return (
    <div className="container image-grid">
      <div className="row">
        {data ? (
          currentPost.map((item) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
              <Card item={item} key={item.id} />
            </div>
          ))
        ) : (
            <Loader />
          )}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        previous={previous}
        next={next}
      />
    </div>
  );
}

export default CardList;
