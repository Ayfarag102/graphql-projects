import React from "react";
import { gql, useQuery } from "@apollo/client";

const BOOK_LIST = gql`
  query GetBookList {
    books {
      title
      id
      genre
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(BOOK_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;
  return data.books.map(({ title, id, genre }) => (
    <div key={id}>
      <li>
        <ul id="book-list">
          {title} : {genre} : {id}
        </ul>
      </li>
    </div>
  ));
}

export default BookList;
