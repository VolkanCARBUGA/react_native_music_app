import  React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Image} from 'react-native'
import SearchBarStyle from "./search-bar-style";
function SearchBar(props){
    return(
        <View style={SearchBarStyle.container}>
            <TextInput style={SearchBarStyle.input} placeholder="Search" placeholderTextColor={"black"}onChangeText={props.onChangeText}></TextInput>
            <TouchableOpacity >
           <Image style={SearchBarStyle.button} source={{uri:"https://cdn-icons-png.flaticon.com/128/8894/8894165.png"}}></Image>
            </TouchableOpacity>
        </View>
    )
    
}

export default SearchBar