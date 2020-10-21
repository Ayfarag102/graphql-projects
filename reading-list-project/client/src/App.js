import React from "react";
// { Component }
//import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // graphql,
  //gql,
} from "@apollo/client";
//import { ApolloProvider } from "@apollo/react-hooks";

//  Components
import BookList from "./components/BookList";

//  Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // constructor(props) {
  //   super(props);
  // }
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>MXS' Reading List &copy; 2020</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}
export default App;
