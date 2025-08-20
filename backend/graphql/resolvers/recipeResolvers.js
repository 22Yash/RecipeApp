const Recipe = require('../../models/Recipe');

const recipeResolvers = {
  Query: {
    getRecipes: async () => await Recipe.find(),
    getRecipe: async (_, { id }) => await Recipe.findById(id),
  },
  Mutation: {
    addRecipe: async (_, { title, ingredients, steps, category, image, notes }) => {
      const newRecipe = new Recipe({ title, ingredients, steps, category, image, notes });
      return await newRecipe.save();
    },
    updateRecipe: async (_, { id, title, ingredients, steps, category, image, notes }) => {
      return await Recipe.findByIdAndUpdate(
        id,
        { title, ingredients, steps, category, image, notes },
        { new: true }
      );
    },
    deleteRecipe: async (_, { id }) => {
      await Recipe.findByIdAndDelete(id);
      return 'Recipe deleted successfully';
    },
  },
};

module.exports = recipeResolvers;
