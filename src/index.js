const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const dotenv = require('dotenv');

const result = dotenv.config();

if (result.error) {
  throw new Error(result.error);
}

const resolvers = require('./resolvers');
const db = require('./db');

// db.query(`SELECT * FROM season1920 LIMIT 20 `, (err, res) => {
//   console.log(res.rows);
//   if (err) {
//     console.log(err);
//   }
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
});

const app = express();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 5000;

app.listen({ port: PORT }, () =>
  console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`)
);
