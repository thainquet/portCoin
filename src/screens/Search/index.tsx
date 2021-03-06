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
  FlatList,
} from "react-native";
import axios from "axios";
import { useEffect } from "react";
import { CONFIG } from "../../../constants";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/RootStackParamList";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hook";
import { setCollection } from "../../redux-toolkit/collectionSlice";

type SearchNavigationProp = StackNavigationProp<RootStackParamList, "Search">;

type Props = {
  navigation: SearchNavigationProp;
};

const Search: React.FC<Props> = ({ navigation }) => {
  const [textValue, setTextValue] = useState<string>("");
  const [suggestionList, setSuggestionList] = useState<any>([]);
  const list = useAppSelector((state) => state.collection.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const search = textValue.toLowerCase();
      if (search.length > 2) {
        const symbol_res = await axios.get(CONFIG.GET_SYMBOL_API + search);
        setSuggestionList(symbol_res.data);
      } else {
        setSuggestionList([]);
      }
    })();
  }, [textValue]);

  const selectSymbol = (item: any) => {
    if (list.find(i => i.Name === item.Name)) return
    let newList = [...list, item];
    dispatch(setCollection(newList));
  };

  return (
    <SafeAreaView>
      <View
        style={{
          position: "relative",
        }}
      >
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "gray",
          }}
          value={textValue}
          autoCorrect={false}
          onChangeText={(textValue) => setTextValue(textValue)}
        />
      </View>
      {suggestionList.length > 0 && (
        <FlatList
        style={{
          paddingHorizontal: 10
        }}
          data={suggestionList}
          renderItem={({ item }: any) => (
            <TouchableOpacity style={{
              backgroundColor:'green',
              borderBottomColor: 'gray',
              borderBottomWidth: 1
            }} onPress={() => selectSymbol(item)}>
              <Text
                style={{
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
              >
                {item.Symbol} - {item.Name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.Id}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
