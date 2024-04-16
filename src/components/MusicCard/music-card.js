import React from 'react';
import {View,Text, Image, TouchableOpacity} from 'react-native'
import style from "./music-card-style";
const MusicCard=(props)=>{
    function isSoldOut(){
        if (props.isSoldOut){
           
               return(
                <View >
                <Text style={style.soldOut}>Tükendi</Text>
                </View>
             
               );
        }else{
           return(
            <View >
            <Text style={style.soldOut}>Satışta</Text>
            <TouchableOpacity   style={style.button}>
      <Text style={style.buttonText}>Satın Al</Text>
      </TouchableOpacity>
            </View>
           );
        }
    }
    
    
    return(
        <View style={style.container}>
          <Image source={{uri:props.imageUrl}} style={style.image}/> 
          <View style={style.innerContainer}>
           <Text style={style.title}>{props.title}</Text> 
           <View style={style.infoContainer}>
          <Text style={style.artist}>{props.artist}</Text> 
          <Text style={style.year}>{props.year}</Text>   
          </View>
          <View>
          <Text style={style.album}>{props.album}</Text>
          {isSoldOut()}
          
          </View>
          </View>
        </View>
    )
}

export default MusicCard;