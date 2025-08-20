// app/recipe/edit/[id].tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { YStack, Text, Input, TextArea, Button, ScrollView, H2 } from "tamagui";
import { useQuery, useMutation } from "@apollo/client";
import { GET_RECIPES } from "../../../graphql/recipes"; 
import { gql } from "@apollo/client";
import { useState, useEffect } from "react";

// Example update mutation (adjust based on your backend schema)
const UPDATE_RECIPE = gql`
  mutation UpdateRecipe(
    $id: ID!
    $title: String!
    $ingredients: [String!]!
    $steps: String!
    $category: String!
    $image: String
    $notes: String
  ) {
    updateRecipe(
      id: $id
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
    }
  }
`;

export default function EditRecipeScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // fetch all recipes and find this one
  const { data, loading } = useQuery(GET_RECIPES);
  const [updateRecipe] = useMutation(UPDATE_RECIPE);

  const recipe = data?.getRecipes?.find((r: any) => r.id === id);

  // local state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [steps, setSteps] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setCategory(recipe.category);
      setIngredients(recipe.ingredients || []);
      setSteps(recipe.steps || "");
      setNotes(recipe.notes || "");
    }
  }, [recipe]);

  if (loading) return <Text>Loading...</Text>;
  if (!recipe) return <Text>Recipe not found</Text>;

  const handleSave = async () => {
    try {
      await updateRecipe({
        variables: {
          id,
          title,
          category,
          ingredients,
          steps,
          notes,
          image: recipe.image,
        },
      });
      router.push(`/recipe/${id}`); // back to detail after save
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }} marginTop={60}>
      <YStack padding="$4" space="$3">
        <H2>Edit Recipe</H2>

        <Input value={title} onChangeText={setTitle} placeholder="Title" height={40} marginTop={20}/>
        <Input value={category} onChangeText={setCategory} placeholder="Category" height={40} />
        <TextArea
          value={ingredients.join("\n")}
          onChangeText={(text) => setIngredients(text.split("\n"))}
          placeholder="Ingredients (one per line)"
          minHeight={100}
        />
        <TextArea
          value={steps}
          onChangeText={setSteps}
          placeholder="Steps"
          minHeight={120}
        />
        <TextArea
          value={notes}
          onChangeText={setNotes}
          placeholder="Notes"
          minHeight={80}
        />

        <Button backgroundColor="$green" color="white" onPress={handleSave} height={40}>
          Save Changes
        </Button>

        <Button backgroundColor="$gray" color="white" onPress={() => router.back()} height={40}>
          Cancel
        </Button>
      </YStack>
    </ScrollView>
  );
}
