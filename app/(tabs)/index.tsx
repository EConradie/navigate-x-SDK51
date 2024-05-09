import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/home";

export default function Tab() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
