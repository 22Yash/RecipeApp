import { Stack } from "expo-router";
import { TamaguiProvider, Theme, Button, YStack, XStack } from "tamagui";
import config from "../theme/tamagui.config";
import { useState } from "react";
import { Sun, Moon } from "@tamagui/lucide-icons";
import ApolloProvider from "../contexts/ApolloProvider"; // ✅ your Apollo wrapper
import ReactQueryProvider from "@/contexts/ReactQueryProvider";

export default function RootLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ApolloProvider>
       <ReactQueryProvider>
      <TamaguiProvider config={config}>
        <Theme name={theme}>
          <YStack flex={1} backgroundColor="$background" padding="$4">
            {/* Theme toggle button */}
            <XStack position="absolute" top={100} right={0} zIndex={1} width={80}>
              <Button
                icon={theme === "light" ? <Moon /> : <Sun />}
                onPress={() => setTheme(theme === "light" ? "dark" : "light")}
                size={50}
                circular
                backgroundColor="green"
                top={-30}
              />
            </XStack>

            {/* Your app screens */}
            <Stack screenOptions={{ headerShown: false }} />
          </YStack>
        </Theme>
      </TamaguiProvider>
      </ReactQueryProvider>
    </ApolloProvider>
  );
}
