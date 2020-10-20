const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const schema = require("./schema/schema");

app.use("/graphql", graphqlHTTP({ schema }));

const portNum = 4000;

app.listen(portNum, () => {
  console.log("Now listening for requests on Port " + portNum);
});
