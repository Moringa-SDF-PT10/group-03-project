import { createContext, useContext, useState } from "react";

const LibraryContext = createContext();

export function useLibrary() {
  return useContext(LibraryContext);
}

export function LibraryProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const [search, setSearch] = useState("");
  const [booksData, setBooksData] = useState([]);

  const toggleFavorite = (book) => {
    setFavorites((prev) =>
      prev.find((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id)
        : [...prev, book]
    );
  };

  const toggleReadingList = (book) => {
    setReadingList((prev) =>
      prev.find((b) => b.id === book.id)
        ? prev.filter((b) => b.id !== book.id)
        : [...prev, book]
    );
  };

  return (
    <LibraryContext.Provider
      value={{
        favorites,
        readingList,
        toggleFavorite,
        toggleReadingList,
        search,
        setSearch,
        booksData,
        setBooksData,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}
