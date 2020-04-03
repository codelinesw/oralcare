import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import styles from '../styles/styles'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Thirdscreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    };

  }

  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Image source={require('../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:0,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <View style={styles.panel_top}>
          <TouchableOpacity style={{top:25,left:100,padding:10, height:310}} onPress={() => this.props.navigation.navigate('Secondscreen')}><Image source={require('../images/Producto-ideal.png')} style={{width:290,height:290,transform: [{ scale: 1 }]}} /></TouchableOpacity>
          <TouchableOpacity style={{top:30,right:110,padding:10, height:310}} onPress={() => this.props.navigation.navigate('Secondscreen')}><Image source={require('../images/cuidado-oral.png')} style={{width:290,height:290,transform: [{ scale: 1 }]}} /></TouchableOpacity>
        </View>
        <Image source={require('../images/toca-para-elegir.png')} style={{width:900,height:255,transform: [{ scale: 0.4 }]}} />
        <View style={styles.panel_bottom}>
          <TouchableOpacity style={{top:-195,left:140,padding:10, height:310}} onPress={() => this.props.navigation.navigate('Menu_')}><Image source={require('../images/Mejora-tu-sonrisa.png')} style={{width:290,height:290,transform: [{ scale: 1 }]}} /></TouchableOpacity>
          <TouchableOpacity style={{top:-195,right:140,padding:10, height:310,}} onPress={() => this.props.navigation.navigate('Fourscreen')}><Image source={require('../images/Mundo-niños.png')} style={{width:290,height:290,transform: [{ scale: 1 }]}} /></TouchableOpacity>
        </View>
      </View>
    );
  }

}
