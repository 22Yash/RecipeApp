const { makeExecutableSchema } = require('@graphql-tools/schema');
const recipeTypeDefs = require('./typeDefs/recipeTypeDefs');
const recipeResolvers = require('./resolvers/recipeResolvers');

// Combine all typedefs and resolvers here
const schema = makeExecutableSchema({
  typeDefs: [recipeTypeDefs],   // later you can add more e.g. userTypeDefs
  resolvers: [recipeResolvers], // same for other resolvers
});

module.exports = schema;
