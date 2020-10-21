import React from "react";
import { useQuery } from "@apollo/client";
import { BOOK_LIST } from "../queries/queries";

function BookList() {
  const { loading, error, data } = useQuery(BOOK_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return data.books.map(({ title, id, genre }) => (
    <div key={id}>
      <li>
        <ul id="book-list" type="disc">
          {title}
        </ul>
      </li>
    </div>
  ));
}

export default BookList;
