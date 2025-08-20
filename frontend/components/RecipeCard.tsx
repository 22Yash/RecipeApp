// components/RecipeCard.tsx
import { YStack, XStack, Text, Image, Button } from "tamagui";
import { useRouter } from "expo-router";

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  rating?: string;
  difficulty?: string;
  horizontal?: boolean;
}

export default function RecipeCard({ 
  id,
  title, 
  image, 
  time, 
  rating, 
  difficulty, 
  horizontal = false 
}: RecipeCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/recipe/${id}`);
  };

  if (horizontal) {
    return (
      <Button unstyled onPress={handlePress} padding="$0">
        <YStack
          backgroundColor="$card"
          borderRadius="$4"
          padding="$2"
          borderWidth={1}
          borderColor="$borderColor"
          width={150}
          space="$2"
        >
          <Image
            source={{ uri: image }}
            width="100%"
            height={100}
            borderRadius="$3"
          />
          <YStack paddingHorizontal="$1" space="$1">
            <Text
              fontSize="$3"
              fontWeight="600"
              color="$color"
              numberOfLines={1}
            >
              {title}
            </Text>
            <XStack justifyContent="space-between" alignItems="center">
              <XStack alignItems="center" space="$1">
                <Text fontSize="$1" color="$green">●</Text>
                <Text fontSize="$1" color="$color" opacity={0.6}>
                  {time}
                </Text>
              </XStack>
              {rating && (
                <XStack alignItems="center" space="$1">
                  <Text fontSize="$1">⭐</Text>
                  <Text fontSize="$1" color="$color" opacity={0.6}>
                    {rating}
                  </Text>
                </XStack>
              )}
            </XStack>
          </YStack>
        </YStack>
      </Button>
    );
  }

  return (
    <Button unstyled onPress={handlePress} padding="$0">
      <XStack
        backgroundColor="$card"
        borderRadius="$4"
        padding="$3"
        borderWidth={1}
        borderColor="$borderColor"
        space="$3"
        alignItems="center"
      >
        <Image
          source={{ uri: image }}
          width={80}
          height={80}
          borderRadius="$3"
        />
        <YStack flex={1} space="$1">
          <Text fontSize="$4" fontWeight="600" color="$color">
            {title}
          </Text>
          <XStack alignItems="center" space="$3">
            <XStack alignItems="center" space="$1">
              <Text fontSize="$2" color="$green">⏱</Text>
              <Text fontSize="$2" color="$color" opacity={0.6}>
                {time}
              </Text>
            </XStack>
            {rating && (
              <XStack alignItems="center" space="$1">
                <Text fontSize="$2">⭐</Text>
                <Text fontSize="$2" color="$color" opacity={0.6}>
                  {rating}
                </Text>
              </XStack>
            )}
            {difficulty && (
              <Text fontSize="$2" color="$color" opacity={0.6}>
                {difficulty}
              </Text>
            )}
          </XStack>
        </YStack>
      </XStack>
    </Button>
  );
}
