import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "./src/navigation";
import { LogBox } from "react-native";
const App: React.FunctionComponent = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <AppRoute />
    </NavigationContainer>
  );
};

export default App;
