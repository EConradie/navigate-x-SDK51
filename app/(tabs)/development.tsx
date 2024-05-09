import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/home";
import DevelopmentScreen from "../screens/development";

export default function Tab() {
  return <DevelopmentScreen />;
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
