import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveBackgroundColor: "blue", headerShown: false}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="development"
        options={{
          title: "Development",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="code" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          title: "Photos",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="photo" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="private"
        options={{
          title: "Private",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="lock" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: "blue"
  }
})
