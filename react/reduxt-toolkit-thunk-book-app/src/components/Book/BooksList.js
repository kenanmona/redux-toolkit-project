import React from "react";

const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  dispatch,
  deleteBook,
  getBookId, // getBook,
}) => {
  const bookList = books
    ? books.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <div>{item.title}</div>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => getBookId(item.id)}
              /* onClick={() =>
                dispatch(getBook(item))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log(originalPromiseResult);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                  })
              } */
            >
              Read
            </button>
            <button
              type="button"
              className="btn btn-danger"
              disabled={!isLoggedIn}
              onClick={() =>
                dispatch(deleteBook(item))
                  .unwrap()
                  .then((originalPromiseResult) => {
                    console.log(originalPromiseResult);
                  })
                  .catch((rejectedValueOrSerializedError) => {
                    console.log(rejectedValueOrSerializedError);
                  })
              }
            >
              Delete
            </button>
          </div>
        </li>
      ))
    : "There Is No Books Available!";
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
