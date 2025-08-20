require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const schema = require('./graphql/schema');

const startServer = async () => {
  const app = express();

  // Connect to MongoDB
  await connectDB();

  // Apollo Server with schema
  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      // Industry practice: add authentication / user context here
      return { user: req.user };
    }
  });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/graphql`);
  });
};

startServer();
