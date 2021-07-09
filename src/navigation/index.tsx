import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootStackParamList } from "../types/RootStackParamList";
import Home from "../screens/Home";
import Search from "../screens/Search";

const RootStack = createStackNavigator<RootStackParamList>();

export default function AppRoute() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Search" component={Search} />
    </RootStack.Navigator>
  );
}
