const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:123test890@cluster0gqlmxs.z2nq3.mongodb.net/gql-mxs?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("Now connected to database...");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const portNum = 4000;

app.listen(portNum, () => {
  console.log("Now listening for requests on Port " + portNum);
});
