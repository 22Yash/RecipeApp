import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_RECIPE } from "../../graphql/recipes";
import { YStack, Input, Button, Text, TextArea, XStack, ScrollView, H3 } from "tamagui";

export default function AddRecipeScreen() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [notes, setNotes] = useState("");

  const [addRecipe, { loading, error }] = useMutation(ADD_RECIPE, {
    onCompleted: () => {
      setTitle("");
      setCategory("");
      setIngredients("");
      setSteps("");
      setImage("");
      setNotes("");
      alert("Recipe added successfully ✅");
    },
    refetchQueries: ["GetRecipes"], // refresh Home
  });

  const handleSubmit = () => {
    if (!title || !category || !ingredients || !steps) {
      alert("Please fill all required fields (Title, Category, Ingredients, Steps)");
      return;
    }

    addRecipe({
      variables: {
        title,
        category,
        ingredients: ingredients.split(",").map((i) => i.trim()), // convert string → array
        steps,
        image,
        notes,
      },
    });
  };

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <YStack 
        backgroundColor="$card" 
        paddingTop={60} 
        paddingBottom="$4" 
        paddingHorizontal="$4"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
        shadowColor="$shadowColor"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity={0.1}
        shadowRadius={4}
      >
        <XStack alignItems="center" justifyContent="center" space="$3" marginRight={80}>
          <Text fontSize="$6" color="$color">🍳</Text>
          <H3 
            color="$color" 
            fontWeight="700"
            textAlign="center"
          >
            Add a New Recipe
          </H3>
        </XStack>
        <Text 
          fontSize="$3" 
          color="$color" 
          opacity={0.7}
          textAlign="center" 
          marginTop="$2"
          marginRight={80}
        >
          Create and share your culinary masterpiece
        </Text>
      </YStack>

      <ScrollView 
        flex={1} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <YStack padding="$4" space="$5">
          {/* Recipe Title */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color">📝</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
              >
                Recipe Title :
              </Text>
              <Text fontSize="$4" color="$red10">*</Text>
            </XStack>
            <Input 
              placeholder="Enter your delicious recipe title..." 
              placeholderTextColor="$placeholderColor"
              value={title} 
              onChangeText={setTitle}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1.5}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$4"
              color="$color"
              height={48}
              focusStyle={{
                borderColor: "$green",
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
          </YStack>

          {/* Category */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color">🏷️</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
              >
                Category :
              </Text>
              <Text fontSize="$4" color="$red10">*</Text>
            </XStack>
            <Input 
              placeholder="Main Course, Dessert, Appetizer, Breakfast..." 
              placeholderTextColor="$placeholderColor"
              value={category} 
              onChangeText={setCategory}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1.5}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$4"
              color="$color"
              height={48}
              focusStyle={{
                borderColor: "$green",
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
          </YStack>

          {/* Ingredients */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color">🥕</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
              >
                Ingredients :
              </Text>
              <Text fontSize="$4" color="$red10">*</Text>
            </XStack>
            <Input
              placeholder="2 cups flour, 1 tsp salt, 3 eggs, 1 cup milk..."
              placeholderTextColor="$placeholderColor"
              value={ingredients}
              onChangeText={setIngredients}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1.5}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$4"
              color="$color"
              height={48}
              focusStyle={{
                borderColor: "$green",
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
            <XStack alignItems="center" space="$2" paddingHorizontal="$1">
              <Text fontSize="$2" color="$color">💡</Text>
              <Text 
                fontSize="$2" 
                color="$color" 
                opacity={0.6}
              >
                Separate each ingredient with a comma
              </Text>
            </XStack>
          </YStack>

          {/* Steps */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color">👨‍🍳</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
              >
                Cooking Steps
              </Text>
              <Text fontSize="$4" color="$red10">*</Text>
            </XStack>
            <TextArea
              placeholder="1. Preheat oven to 350°F and grease baking pan&#10;2. In a large bowl, mix all dry ingredients thoroughly&#10;3. In separate bowl, whisk together wet ingredients&#10;4. Gently fold wet ingredients into dry until just combined&#10;5. Pour into prepared pan and bake for 25-30 minutes&#10;6. Cool completely before serving..."
              placeholderTextColor="$placeholderColor"
              value={steps}
              onChangeText={setSteps}
              numberOfLines={6}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1.5}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$4"
              color="$color"
              minHeight={120}
              textAlignVertical="top"
              focusStyle={{
                borderColor: "$green",
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
          </YStack>

          {/* Image URL */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color" opacity={0.7}>📸</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
                opacity={0.7}
              >
                Recipe Photo
              </Text>
              <Text fontSize="$3" color="$color" opacity={0.5}>(optional)</Text>
            </XStack>
            <Input 
              placeholder="https://example.com/delicious-recipe-photo.jpg" 
              placeholderTextColor="$placeholderColor"
              value={image} 
              onChangeText={setImage}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$3"
              color="$color"
              height={48}
              opacity={0.8}
              focusStyle={{
                borderColor: "$green",
                opacity: 1,
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
          </YStack>

          {/* Notes */}
          <YStack space="$3">
            <XStack alignItems="center" space="$2">
              <Text fontSize="$4" color="$color" opacity={0.7}>📋</Text>
              <Text 
                fontSize="$5" 
                fontWeight="600" 
                color="$color"
                opacity={0.7}
              >
                Additional Notes
              </Text>
              <Text fontSize="$3" color="$color" opacity={0.5}>(optional)</Text>
            </XStack>
            <Input 
              placeholder="Cooking tips, variations, serving suggestions..." 
              placeholderTextColor="$placeholderColor"
              value={notes} 
              onChangeText={setNotes}
              backgroundColor="$card"
              borderColor="$borderColor"
              borderWidth={1}
              borderRadius="$4"
              paddingHorizontal="$4"
              paddingVertical="$4"
              fontSize="$3"
              color="$color"
              height={48}
              opacity={0.8}
              focusStyle={{
                borderColor: "$green",
                opacity: 1,
                shadowColor: "$green",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
              }}
            />
          </YStack>

          {/* Submit Button */}
          <YStack space="$4" paddingTop="$4">
            <Button 
              onPress={handleSubmit} 
              disabled={loading}
              backgroundColor={loading ? "$gray8" : "$green"}
              borderRadius="$4"
              height={56}
              pressStyle={{
                backgroundColor: loading ? "$gray8" : "$green9",
                scale: 0.98,
              }}
              disabledStyle={{
                backgroundColor: "$gray8",
                opacity: 0.6,
              }}
            >
              <XStack alignItems="center" space="$2">
                <Text fontSize="$3" color="white">{loading ? "⏳" : "💾"}</Text>
                <Text 
                  color="white" 
                  fontSize="$5" 
                  fontWeight="700"
                >
                  {loading ? "Saving Recipe..." : "Save Recipe"}
                </Text>
              </XStack>
            </Button>

            <XStack alignItems="center" justifyContent="center" space="$2">
              <Text fontSize="$2" color="$color" opacity={0.6}>⚠️</Text>
              <Text 
                fontSize="$2" 
                color="$color" 
                opacity={0.6}
                textAlign="center"
              >
                Fields marked with * are required
              </Text>
            </XStack>
          </YStack>

          {/* Error Message */}
          {error && (
            <YStack 
              backgroundColor="$red2" 
              borderColor="$red6" 
              borderWidth={1}
              borderRadius="$4" 
              padding="$4"
              marginTop="$2"
            >
              <XStack alignItems="center" justifyContent="center" space="$2">
                <Text fontSize="$3" color="$red11">❌</Text>
                <Text 
                  color="$red11" 
                  fontSize="$3" 
                  fontWeight="600"
                >
                  Error: {error.message}
                </Text>
              </XStack>
            </YStack>
          )}
        </YStack>
      </ScrollView>
    </YStack>
  );
}