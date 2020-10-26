import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements';

export default class HomeScreen extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>
          {
            this.state.isSearchPressed && this.state.word ==="Loading..."? this.state.word:""
          }
        </Text>
        {this.state.word!=="Loading..."?(
          backgroundColor="orange")
        
        <TextInput
          onChangeText={text =>{this.setState({text:text,isSearchPressed:false,word:"Loading...",lexicalCategory:'',examples:[],defination:""})}}
          value={this.state.text}
        />
       <TouchableOpacity style={styles.search} onPress={
         ()=> this.setState({isSearchPressed:true}),
         this.getWord(this.state.text)}/>
      </View>
    );
  }
}

getWord=(word)=>{
  var searchkeyword=word.tolowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/%22+searchKeyword+%22.json"+searchkeyword+".json"
  return fetch(url)
  .then((data)=>{
    if(data.status===200){
      return data.json
    }
    else{
      return null
    }
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button:{
    backgroundColor:"yellow",
    borderRadius:50,
    alignItems:'center',
    marginLeft:750,
    marginRight:400,
    width:100,
    height:100,
    marginBottom:20,
    alignItems:'center',
    justifyContent:'center',
    fontWeight: 'bold',
  },
  search:{
    borderRadius:5,
    alignItems:'center',
    borderColor:'black',
  },
});

