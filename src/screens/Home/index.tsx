import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../../redux-toolkit/hook";
import { RootStackParamList } from "../../types/RootStackParamList";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const list = useAppSelector((state) => state.collection.list);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      //   console.log("list when focus: ", list);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView>
      <Text>Home</Text>
      {list.length > 0 &&
        list.map((item) => (
          <View key={item.Id}>
            <Text>
              {item.Symbol} - {item.Name}
            </Text>
          </View>
        ))}
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Go search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
