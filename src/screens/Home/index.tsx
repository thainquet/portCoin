import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useAppSelector } from "../../redux-toolkit/hook";
import { RootStackParamList } from "../../types/RootStackParamList";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  const list = useAppSelector((state) => state.collection.list);
  console.log(list);
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Go search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
