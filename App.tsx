import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppRoute from "./src/navigation";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux-toolkit/store";

const App: React.FunctionComponent = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoute />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
