import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { RootStackParamList } from "../../types/RootStackParamList";

type HomeNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeNavigationProp;
};

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
