import { createTamagui } from "tamagui";
import { createInterFont } from "@tamagui/font-inter";

// Fonts
const headingFont = createInterFont({
  family: "Inter",
  size: { 4: 14, 5: 16, 6: 20, 7: 24, true: 16 },
  lineHeight: { 4: 18, 5: 20, 6: 24, 7: 28, true: 20 },
  weight: { 4: "400", 6: "600", 7: "700", true: "400" },
  letterSpacing: { 4: 0, 5: 0, 6: 0, 7: 0, true: 0 },
});

// Tokens
const tokens = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    lightBg: "#F9F9F9",
    lightText: "#111111",
    lightCard: "#FFFFFF",
    darkBg: "#0D1117", // Darker background
    darkText: "#F0F6FC", // Lighter text
    darkCard: "#21262D", // Better contrast for cards
    // Add some basic UI colors
    blue: "#007AFF",
    red: "#FF3B30",
    green: "#2ECC71", // Updated to match the green in the design
    gray: "#8E8E93",
    lightGray: "#F3F4F6",
    darkGray: "#374151",
  },
  
  size: { 
    0: 0, 
    1: 4, 
    2: 8, 
    3: 12, 
    4: 16, 
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    true: 16 
  },
  space: { 
    0: 0, 
    1: 4, 
    2: 8, 
    3: 12, 
    4: 16, 
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    true: 16 
  },
  radius: { 
    0: 0, 
    1: 4, 
    2: 8, 
    3: 12, 
    4: 16,
    5: 20,
    true: 8 
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
  },
};

// Themes
const themes = {
  light: {
    background: tokens.color.lightBg,
    backgroundHover: tokens.color.lightCard,
    backgroundPress: tokens.color.gray,
    backgroundFocus: tokens.color.lightCard,
    color: tokens.color.lightText,
    colorHover: tokens.color.lightText,
    colorPress: tokens.color.lightText,
    colorFocus: tokens.color.lightText,
    borderColor: tokens.color.gray,
    borderColorHover: tokens.color.lightText,
    borderColorPress: tokens.color.lightText,
    borderColorFocus: tokens.color.blue,
    placeholderColor: tokens.color.gray,
    card: tokens.color.lightCard,
    green: tokens.color.green,
  },
  dark: {
    background: tokens.color.darkBg,
    backgroundHover: tokens.color.darkCard,
    backgroundPress: tokens.color.darkGray,
    backgroundFocus: tokens.color.darkCard,
    color: tokens.color.darkText,
    colorHover: tokens.color.darkText,
    colorPress: tokens.color.darkText,
    colorFocus: tokens.color.darkText,
    borderColor: tokens.color.darkGray,
    borderColorHover: tokens.color.darkText,
    borderColorPress: tokens.color.darkText,
    borderColorFocus: tokens.color.blue,
    placeholderColor: tokens.color.gray,
    card: tokens.color.darkCard,
    green: tokens.color.green,
  },
};

// Shorthands
const shorthands = {
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  m: 'margin',
  mx: 'marginHorizontal',
  my: 'marginVertical',
  p: 'padding',
} as const;

export default createTamagui({
  tokens,
  themes,
  fonts: {
    heading: headingFont,
    body: headingFont,
  },
  shorthands,
  defaultTheme: "light",
  // Add required media queries
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
 
});