import { gql } from "@apollo/client";

const BOOK_LIST = gql`
  query GetBookList {
    books {
      title
      id
      genre
    }
  }
`;

const AUTHOR_LIST = gql`
  query GetAuthorList {
    authors {
      name
      id
    }
  }
`;

export { BOOK_LIST, AUTHOR_LIST };
