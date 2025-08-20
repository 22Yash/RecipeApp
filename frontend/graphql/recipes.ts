import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query GetRecipes {
    getRecipes {
      id
      title
      category
      notes
      ingredients
      steps
      image
      createdAt
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $title: String!
    $ingredients: [String!]!
    $steps: String!
    $category: String!
    $image: String
    $notes: String
  ) {
    addRecipe(
      title: $title
      ingredients: $ingredients
      steps: $steps
      category: $category
      image: $image
      notes: $notes
    ) {
      id
      title
      category
      notes
      ingredients
      steps
      image
      createdAt
    }
  }
`;
