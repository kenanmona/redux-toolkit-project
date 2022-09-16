import React, { Fragment } from "react";

const BookInfo = ({ /* bookInfo */ bookInfo }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.values(bookInfo).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {bookInfo.title}</p>
          <p className="fw-bold">InsertedBy: {bookInfo.userName}</p>
          <p className="fw-light">Description: {bookInfo.description}</p>
          <p className="fst-italic">Price: {bookInfo.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
