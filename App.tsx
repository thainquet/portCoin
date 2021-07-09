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
import axios from "axios";
import { CONFIG } from "./constants";

export default function App() {
  const [textValue, setTextValue] = useState<string>("");

  const loadData = async () => {
    const search = textValue.toLowerCase();
    console.log(search);
    const symbol_res = await axios.get(CONFIG.GET_SYMBOL_API + search);
    console.log(symbol_res.data);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
        }}
        // value={textValue}
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
