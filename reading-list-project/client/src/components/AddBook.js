import React from "react";
import { useQuery } from "@apollo/client";

import { AUTHOR_LIST } from "../queries/queries";

function AddBook() {
  const { loading, error, data } = useQuery(AUTHOR_LIST);

  if (loading) return <option disabled>Loading Authors...</option>;
  if (error) return <p>Error :${error.message}</p>;

  return (
    <form id="add__book">
      <div class="add__book__title">
        <label>Book Title: </label>
        <input type="text" />
      </div>
      <div class="add__book__genre">
        <label>Genre: </label>
        <input type="text" />
      </div>
      <div class="add__book__author">
        <label>Author: </label>
        <select name="author" id="">
          {data.authors.map((author) => (
            <option key={author.id} value={author.name}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;

/*
return data.authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    })
*/

/*
data.authors.map(({ name, id }) => (
    <div key={id}>
      <li>
        <ul id="author-list">
          {name} : {id}
        </ul>
      </li>
    </div>
  ));
*/
