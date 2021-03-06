import React, { useState } from "react";
import Book from "./Book";
import { useSelector } from "react-redux";
import BookForm from "./BookForm";

const BookList = (toggleBook) => {
  const allBooks = useSelector((state) => state.books);
  const [add, setAdd] = useState(false);
  return (
    <div>
      <button
        className="btn btn-sm btn-outline-info m-1"
        onClick={() => setAdd(!add)}
      >
        Add Book
      </button>
      {add && <BookForm />}
      <ul>
        {allBooks.map((book) => {
          return (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              read={book.read}
              imageUrl={book.imageUrl}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default BookList;
