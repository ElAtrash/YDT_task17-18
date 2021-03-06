import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "Harry Potter",
    author: "JKR",
    read: false,
    imageUrl: "https://picsum.photos/id/209/70",
  },
  {
    id: uuid(),
    title: "The Lord of the Rings",
    author: "JRR Tolkien",
    read: true,
    imageUrl: "https://picsum.photos/id/1062/70",
  },
];

const booksReducer = (state = initialState, action) => {
  const { type, bookData } = action;

  switch (type) {
    case "CREATE_BOOK":
      return [
        ...state,
        {
          id: uuid(),
          title: bookData.title,
          author: bookData.author,
          read: false,
          imageUrl: bookData.imageUrl,
        },
      ];
    case "TOGGLE_BOOK":
      return state.map((book) =>
        book.id === bookData.id ? { ...book, read: !book.read } : book
      );
    default:
      return state;
  }
};

export default booksReducer;
