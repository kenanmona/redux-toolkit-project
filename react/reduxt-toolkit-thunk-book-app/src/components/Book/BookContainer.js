import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { getBooks, deleteBook /* getBook */ } from "../../store/bookSlice";
import { useDispatch, useSelector } from "react-redux";

import "./book.css";

const BookContainer = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const { isLoading, books /* bookInfo */ } = useSelector(
    (state) => state.books
  );
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBookId = (id) => {
    const selectedId = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedId };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId} // getBook={getBook}
          />
        </div>
        <div className="col side-line">
          <BookInfo /* bookInfo={bookInfo} */ bookInfo={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default BookContainer;
