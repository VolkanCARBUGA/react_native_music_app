import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
       flexDirection: "row",
       padding: 10,
       margin: 10,
       flex: 1,
       backgroundColor: "green", 
       borderRadius:10
     
   
      
    },
    innerContainer: {
      backgroundColor: "white",
       padding: 10,
       flex: 1,
   justifyContent:"space-evenly",
  
   borderRadius:10,
   margin:5
     

       
    },
    image: {
        width: Dimensions.get("screen").width / 3,
        height: Dimensions.get("screen").width / 3,
        borderRadius: 25,
        padding: 10,
        margin: 10
        
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 5
    },
    artist: {
        fontSize: 20
    },
    year: {
        fontSize: 20,
        color: "white",
        margin:5,
        textAlign:"right",
       
       
        
    },

    album: {
        fontSize: 20,
        color: "grey",
       margin:5,
       textAlign:"center",
       fontWeight:"normal",
       fontStyle:"italic"
      
    },
    soldOut: {
        color: "red",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "right",
        margin:5

    },
    infoContainer:{
padding:5,
backgroundColor:"grey",
borderRadius:10,
justifyContent:"space-evenly",
flexDirection:"row",

    },
    button:{
        backgroundColor:"green",
        padding:5,
        borderRadius:10,
        margin:5
    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        margin:5,
        fontFamily:"Times New Roman"
    }
})