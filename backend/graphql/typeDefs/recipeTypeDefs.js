const { gql } = require('apollo-server-express');

const recipeTypeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    ingredients: [String]!
    steps: String!
    category: String!
    image: String
    notes: String
    createdAt: String
  }

  type Query {
    getRecipes: [Recipe]
    getRecipe(id: ID!): Recipe
  }

  type Mutation {
    addRecipe(
      title: String!
      ingredients: [String]!
      steps: String!
      category: String!
      image: String
      notes: String
    ): Recipe

    updateRecipe(
      id: ID!
      title: String
      ingredients: [String]
      steps: String
      category: String
      image: String
      notes: String
    ): Recipe

    deleteRecipe(id: ID!): String
  }
`;

module.exports = recipeTypeDefs;
