import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/home";
import PrivateScreen from "../screens/private";

export default function Tab() {
  return <PrivateScreen />;
}

const styles = StyleSheet.create({
  tab: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
