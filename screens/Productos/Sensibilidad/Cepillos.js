import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Cepillos extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: ['']
    }
  }


  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Header _path_="Fourscreen" navigation={this.props.navigation} />
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/3),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/Middle/01.png')} style={{left:45,top:-1625,width:1800,height:3520,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/3),height:HEIGHT-310}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/Middle/02.png')} style={{right:525,top:-1625,width:1500,height:3520,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_third,{width:(WIDTH/3),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/Middle/03.png')} style={{right:45,top:-1625,width:1500,height:3520,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="ProAlivioInmediato" screenNext="EnjuagueSensitiveProAlivio" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
