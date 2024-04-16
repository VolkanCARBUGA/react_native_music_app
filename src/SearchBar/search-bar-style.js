import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
         width: Dimensions.get("screen").width - 50,
         margin: 10,
      
         
    },
    input: {
        flex: 1,
       width:200,
        fontSize: 20,
        padding: 10,
    },
    button: {
       width: 50,
       height: 50,
    },
    });