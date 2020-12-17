import React, { useState ,useEffect} from "react";
import Card from "../Card/Card";
import "./CardList.css";
import Loader from "../common/Loader/Loader";
import Pagination from "../common/Pagination/Pagination";
function CardList({ data, value }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(12);
  // PAGINATION
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scroll(0, 0);
  };
  const previous = () => {
    setCurrentPage(currentPage - 1 > 0 ? currentPage - 1 : 1);
    window.scroll(0, 0);
  };
  const next = (pageNumbers) => {
    setCurrentPage(currentPage + 1 <= pageNumbers.length ? currentPage + 1 : 1);
    window.scroll(0, 0);
  };

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
        currentPage={currentPage}
      />
    </div>
  );
}

export default CardList;
