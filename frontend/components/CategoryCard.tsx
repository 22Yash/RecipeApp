// components/CategoryCard.tsx
import { YStack, Text, Button } from "tamagui";

interface CategoryCardProps {
  title: string;
  icon: string;
  active?: boolean;
  onPress: (title: string) => void;
}

export default function CategoryCard({ title, icon, active = false, onPress }: CategoryCardProps) {
  return (
    <Button
      unstyled
      onPress={() => onPress(title)}
      padding="$0"
      backgroundColor="$card"
    >
      <YStack
        alignItems="center"
        space="$2"
        padding="$3"
        minWidth={80}
        
      >
        <YStack
          alignItems="center"
          justifyContent="center"
          width={60}
          height={60}
          borderRadius="$4"
          backgroundColor={active ? "$gray" : "$card"}
          borderWidth={active ? 0 : 1}
          borderColor="$borderColor"
        >
          <Text fontSize={24} opacity={active ? 1 : 0.7}>
            {icon}
          </Text>
        </YStack>
        <Text
          fontSize="$3"
          color={active ? "$green" : "$color"}
          fontWeight={active ? "600" : "400"}
          textAlign="center"
        >
          {title}
        </Text>
      </YStack>
    </Button>
  );
}
