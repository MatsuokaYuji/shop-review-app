import React, { useState} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons"
// screen
import { HomeStackNavigator } from "./HomeStackNavigator";
import { UserScreen } from "../screens/UserScreen";

const Tab = createBottomTabNavigator();

export const MainTabNavigator = () => {
    const tabBarOptions = {
        activeTintColor: "#900",
        inactiveTintColor: "#999",
      };
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Home" component={HomeStackNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="User" component={UserScreen}
      options={{
        tabBarLabel: 'User',
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}