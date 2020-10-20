import React, { Component } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//  Components
import BookList from "./components/BookList";

//  Apollo Client Setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>MXS' Reading List &copy; 2020</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
