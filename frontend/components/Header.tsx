// app/components/Header.tsx
import { YStack, XStack, Text, Button } from "tamagui";

type Props = {
  title: string;
  onToggleTheme?: () => void;
};

export default function Header({ title, onToggleTheme }: Props) {
  return (
    <XStack
      alignItems="center"
      justifyContent="space-between"
      padding="$4"
      backgroundColor="$background"
    >
      <Text fontSize="$8" fontWeight="700" color="$color">
        {title}
      </Text>
      {onToggleTheme && (
        <Button size="$3" onPress={onToggleTheme}>
          Toggle Theme
        </Button>
      )}
    </XStack>
  );
}
    