import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../styles/styles'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const { _path_ } = this.props;
    return(
      <View style={{position:'absolute',top:0,width:WIDTH,height:100,zIndex:200}}>
        <Image source={require('../images/Logo-colgate.png')} style={{position:'absolute',zIndex:200,left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',zIndex:200,top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate(_path_)}>
          <Image source={require('../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
      </View>
    )
  }

}
