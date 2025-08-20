// app/recipe/[id].tsx
import { useLocalSearchParams, useRouter } from "expo-router";
import { YStack, Text, ScrollView, H2, H3, Button, Image, Separator ,Spacer } from "tamagui";
import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../../graphql/recipes";

export default function RecipeDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_RECIPES);

  if (loading) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="$background">
        <Text color="$color">Loading...</Text>
      </YStack>
    );
  }

  if (error) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="$background">
        <Text color="$color">Error: {error.message}</Text>
      </YStack>
    );
  }

  // find recipe by id
  const recipe = data?.getRecipes?.find((r: any) => r.id === id);

  if (!recipe) {
    return (
      <YStack flex={1} justifyContent="center" alignItems="center" backgroundColor="$background">
        <Text color="$color">No recipe found.</Text>
      </YStack>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      marginTop={0}

      backgroundColor="$background"
    >
        <Spacer />
        <Spacer /><Spacer /><Spacer /><Spacer />

        {/* Title & Category */}
      <YStack padding="$4" marginTop={20}>
      <H2 color="$color" marginBottom={0}>{recipe.title}</H2>
        <Text marginTop={8} color="$color" fontWeight="600">
          Category: {recipe.category}
        </Text>
      </YStack>
       
      {/* Recipe Image */}
      <Image
        source={{ uri: recipe.image || "https://picsum.photos/600/300" }}
        style={{ width: "100%", height: 250 }}
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
       
      />

      

      <Separator />

      {/* Ingredients */}
      <YStack padding="$4">
        <H3 color="$color">Ingredients :</H3>
        {recipe.ingredients.map((ing: string, idx: number) => (
          <Text key={idx} color="$color" marginTop={4}>
            • {ing}
          </Text>
        ))}
      </YStack>

      <Separator />

      {/* Steps */}
      <YStack padding="$4">
        <H3 color="$color">Steps :</H3>
        <Text color="$color" marginTop={6} lineHeight={22}>
          {recipe.steps}
        </Text>
      </YStack>

      {/* Notes */}
      {recipe.notes && (
        <>
          <Separator />
          <YStack padding="$4">
            <H3 color="$color">Notes :</H3>
            <Text color="$color" marginTop={6} fontStyle="italic">
              {recipe.notes}
            </Text>
          </YStack>
        </>
      )}

      <Separator />

      {/* Edit Button */}
      <YStack padding="$4" space="$3" alignItems="center">
        <Button
          onPress={() => router.push(`/recipe/edit/${id}`)}
          backgroundColor="$green"
          color="white"
          width={180}
          height={45}
          borderRadius={12}
        >
          ✏️ Edit Recipe
        </Button>
      </YStack>
    </ScrollView>
  );
}
