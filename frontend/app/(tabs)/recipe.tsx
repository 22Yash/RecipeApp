import React from 'react';
import {
  YStack,
  XStack,
  Text,
  Image,
  Button,
  ScrollView,
  Card,
  Circle,
  H2,
  H3,
  Paragraph,
} from 'tamagui';
import { ArrowLeft, Bookmark, Play } from '@tamagui/lucide-icons';

export default function RecipeScreen() {
  const ingredients = [
    { name: 'Spaghetti', amount: '225g', icon: '🍝' },
    { name: 'Olive Oil', amount: '60g', icon: '🫒' },
    { name: 'Red Pepper Flakes', amount: '1/2 tsp', icon: '🌶️' },
    { name: 'Parsley', amount: '10g', icon: '🌿' },
    { name: 'Onion', amount: '4 cloves', icon: '🧄' },
  ];

  return (
    <YStack flex={1} backgroundColor="$background" >
      {/* Header */}
      <XStack
        paddingHorizontal="$4"
        paddingTop={60}
        paddingBottom="$3"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="$background"
      >
        <Button
          size="$4"
          circular
          backgroundColor="transparent"
          borderWidth={0}
          icon={ArrowLeft}
          color="$color"
        />
       
        <Button
          size={60}
          circular
          backgroundColor="transparent"
          borderWidth={0}
          icon={Bookmark}
          color="$color"
          paddingRight={150}
          paddingBottom={20}
        />
      </XStack>

      <ScrollView flex={1}>
        {/* Recipe Image */}
        <YStack paddingHorizontal="$4" marginBottom="$4" marginTop={20}>
          <Card
            borderRadius="$4"
            overflow="hidden"
            elevation={2}
            backgroundColor="$card"
          >
            <YStack
              height={250}
              backgroundColor="$backgroundHover"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="$8" opacity={0.3}>
                🍝
              </Text>
            </YStack>
          </Card>
        </YStack>

        {/* Recipe Title and Info */}
        <YStack paddingHorizontal="$4" marginBottom="$5">
          <H2 color="$color" marginBottom="$2">
            Spaghetti Oglio
          </H2>
          
          <XStack alignItems="center" gap="$3" marginBottom="$3">
            <XStack alignItems="center" gap="$1">
              <Circle size="$1" backgroundColor="$green" />
              <Text fontSize="$3" color="$color">
                20 mins
              </Text>
            </XStack>
            <XStack alignItems="center" gap="$1">
              <Text fontSize="$3" color="$color">
                ⭐ 4.8
              </Text>
            </XStack>
            <XStack alignItems="center" gap="$1">
              <Text fontSize="$3" color="$color">
                📊 Easy
              </Text>
            </XStack>
          </XStack>

          {/* Description */}
          <YStack marginBottom="$4">
            <H3 color="$color" marginBottom="$2" fontSize="$5">
              Description
            </H3>
            <Paragraph color="$color" opacity={0.8} fontSize="$4" lineHeight="$4">
              Spaghetti aglio e olio is a simple yet delicious Italian pasta dish. It's made with spaghetti noodles, garlic, olive oil, and red pepper flakes. The dish is known for its simplicity and bold flavors.
            </Paragraph>
            <Button
              alignSelf="flex-start"
              size="$2"
              backgroundColor="transparent"
              color="$green"
              borderWidth={0}
              paddingHorizontal={0}
              marginTop="$1"
            >
              More
            </Button>
          </YStack>
        </YStack>

        {/* Ingredients */}
        <YStack paddingHorizontal="$4" marginBottom="$5">
          <H3 color="$color" marginBottom="$3" fontSize="$5">
            Ingredients
          </H3>
          
          {ingredients.map((ingredient, index) => (
            <XStack
              key={index}
              alignItems="center"
              paddingVertical="$3"
              borderBottomWidth={1}
              borderBottomColor="$borderColor"
              opacity={0.1}
            >
              <Circle
                size="$3"
                backgroundColor="$backgroundHover"
                justifyContent="center"
                alignItems="center"
                marginRight="$3"
              >
                <Text fontSize="$4">{ingredient.icon}</Text>
              </Circle>
              
              <YStack flex={1}>
                <Text color="$color" fontSize="$4" fontWeight="500">
                  {ingredient.name}
                </Text>
              </YStack>
              
              <Text color="$color" opacity={0.7} fontSize="$4">
                {ingredient.amount}
              </Text>
            </XStack>
          ))}
        </YStack>

        {/* Directions */}
        <YStack paddingHorizontal="$4" marginBottom="$8">
          <H3 color="$color" marginBottom="$3" fontSize="$5">
            Directions
          </H3>
          
          <Card
            backgroundColor="$card"
            borderRadius="$3"
            padding="$4"
            elevation={1}
            marginBottom="$3"
          >
            <Paragraph color="$color" fontSize="$4" lineHeight="$4" marginBottom="$3">
              1. Fill a large pot with lightly salted water and bring it to a rolling boil over high heat. Once the water is boiling, stir in the spaghetti, and return to a boil. Cook the pasta uncovered, stirring occasionally, until the pasta has cooked through...
            </Paragraph>
            
            <Button
              backgroundColor="$green"
              color="white"
              borderRadius="$3"
              size="$4"
              icon={Play}
              alignSelf="flex-start"
            >
              Watch Videos
            </Button>
          </Card>
        </YStack>
      </ScrollView>
    </YStack>
  );
}