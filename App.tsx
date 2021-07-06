// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
type dataType = {
  Id: string;
  Symbol: string;
  Name: string;
};
import * as BaseData from "./db.json";
const dataArray = Object.values(BaseData);

export default function App() {
  const [textValue, setTextValue] = useState<string>("");
  const loadData = async () => {
    const search = textValue.toLowerCase();
    console.log(search);
    console.log(dataArray.map((i) => i.Symbol));
    // console.log(JSON.parse(BaseData));
  };

  return (
    <SafeAreaView>
      <TextInput
        autoCorrect={false}
        onChangeText={(textValue) => setTextValue(textValue)}
      />
      <TouchableOpacity onPress={loadData}>
        <Text>Load</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
