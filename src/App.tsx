import React, { useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import data from "./components/MusicCard/music-data.json";
import MusicCard from "./components/MusicCard/music-card";
import SearchBar from "./SearchBar/search-bar";

function App() {
  const [list, setList] = useState(data);
  const onChangeText = (text: string) => {
    const filteredList = data.filter((item) =>  item.title.toLowerCase().includes(text.toLowerCase()) || item.artist.toLowerCase().includes(text.toLowerCase()) || item.album.toLowerCase().includes(text.toLowerCase()));
    setList(filteredList);
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onChangeText={onChangeText}></SearchBar>
      <FlatList data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          //  <MusicCard music={item}></MusicCard>
          <MusicCard {...item}></MusicCard>
        }

      ></FlatList>

    </SafeAreaView>
  )
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,



  },
})