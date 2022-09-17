import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to={`/books/${book.title.toLowerCase()}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link
          to={`/books/${book.title.toLowerCase()}`}
          className="book__title--link"
        >
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
