const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const portNum = 4000;

app.listen(portNum, () => {
  console.log("Now listening for requests on Port " + portNum);
});
