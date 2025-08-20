import Constants from "expo-constants";
const { NOTES_API_URL } = (Constants.expoConfig?.extra || {}) as { NOTES_API_URL?: string };
export const NOTES_BASE_URL = NOTES_API_URL || "http://localhost:4001";
