import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
  query {
    getRecipes {
      id
      title
      category
      steps
      ingredients
      image
      notes
      createdAt
    }
  }
`;
