import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/home";
import PhotosScreen from "../screens/photos";

export default function Tab() {
  return <PhotosScreen />;
}

const styles = StyleSheet.create({
  tab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
