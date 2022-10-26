import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JsonData from "http://localhost:8000/user";
import "./Pagination.css";
const Pagination = () => {
 
  const [users, setusers] = useState(JsonData.slice(0, 21));


  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 12;

  const PageVisited = pageNumber * userPerPage;

  const displayUsers = users
    .slice(PageVisited, PageVisited + userPerPage)
    .map((user) => {
      return (
        <div className="col-lg-4 mt-2">
          <div class="card" style={{ width: "18rem;" }}>
            <img class="card-img-top" src={user.url} alt="Card image cap" />
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container">
      <div className="row">{displayUsers}</div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagebtn"}
        previousLinkClassName={"previousbtn"}
        nextLinkClassName={"nextbtn"}
        disableClassName={"pagedisabled"}
        activeClassName={"activepage"}
      />
    </div>
  );
};

export default Pagination;
