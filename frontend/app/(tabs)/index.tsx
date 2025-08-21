// app/index.tsx
import { YStack, ScrollView, XStack, Text, H3, Button, Input } from "tamagui";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../../graphql/recipes"; // adjust path
import CategoryCard from "../../components/CategoryCard";
import RecipeCard from "../../components/RecipeCard";

export default function HomeScreen({ toggleTheme }: { toggleTheme: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // fetch recipes
  const { data, loading, error } = useQuery(GET_RECIPES);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Text>Loading recipes...</Text>
      </YStack>
    );
  }

  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center">
        <Text>Error: {error.message}</Text>
      </YStack>
    );
  }

  const recipes = data?.getRecipes || [];

  // filtering logic
  let filteredRecipes = recipes;

  if (selectedCategory !== "All") {
    filteredRecipes = filteredRecipes.filter((r: any) =>
      r.category?.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredRecipes = filteredRecipes.filter((r: any) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const categories = [
    { title: "All", icon: "⭐" },
    { title: "Breakfast", icon: "🥞" },
    { title: "Lunch", icon: "🍱" },
    { title: "Dessert", icon: "🧁" },
    { title: "Noodles", icon: "🍜" },
    { title: "Fruits", icon: "🍎" },
  ];

  return (
    <YStack flex={1} backgroundColor="$background">
      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center" padding="$4" paddingTop={60}>
        <YStack>
          <Text fontSize="$4" color="$color" opacity={0.7}>
            Hi Yash! 👋
          </Text>
          <H3 color="$color" fontWeight="600">
            Got a tasty dish in mind?
          </H3>
        </YStack>
      </XStack>

      {/* Search Bar */}
      <XStack padding="$4" paddingTop="$0">
        <XStack flex={1} position="relative" alignItems="center">
          <Input
            flex={1}
            placeholder="Search any recipes"
            placeholderTextColor="$placeholderColor"
            value={searchQuery}
            onChangeText={setSearchQuery}
            backgroundColor="$card"
            borderColor="$borderColor"
            borderWidth={1}
            borderRadius="$3"
            paddingLeft="$4"
            paddingRight="$12"
            height={48}
            fontSize="$3"
            color="$color"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            clearButtonMode="while-editing"
            selectionColor="$green"
          />
         
        </XStack>
      </XStack>

      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* Categories Section */}
        <YStack padding="$4" paddingTop="$2">
          <H3 color="$color" marginBottom="$3" fontWeight="600">
            Categories
          </H3>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <XStack space="$3">
              {categories.map((c) => (
                <CategoryCard
                  key={c.title}
                  title={c.title}
                  icon={c.icon}
                  active={selectedCategory === c.title}
                  onPress={setSelectedCategory}
                />
              ))}
            </XStack>
          </ScrollView>
        </YStack>

        {/* Recipes Section (dynamic) */}
        <YStack padding="$4" paddingTop="$2" paddingBottom="$8">
          <XStack justifyContent="space-between" alignItems="center" marginBottom="$3">
            <H3 color="$color" fontWeight="600" fontSize={20}>
              Recipes
            </H3>
          </XStack>

          <YStack space="$3">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe: any) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image || "https://picsum.photos/200/150"}
                  time="20 min"
                  rating="4.5"
                  difficulty="Easy"
                />
              ))
            ) : (
              <Text>No recipes found.</Text>
            )}
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  );
}
