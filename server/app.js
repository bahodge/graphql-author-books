const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const DB_CREDENTIALS = require("./db");

const app = express();

// allow cross origin requests
app.use(cors());

mongoose.connect(DB_CREDENTIALS);
mongoose.connection.once(`open`, () => {
  console.log(`connected to remote database`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    //   graphql schema, not mongoose schema
    schema,
    graphiql: true
  })
);

app.listen({ port: 4000 }, () => {
  console.log("Listening on localhost:4000");
});
