import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class LiminuosWhite extends React.Component {

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
          <View style={[styles.containerTitle,{top:-25}]}>
            <Image source={require('../../../images/Productos/Blanqueamiento/LiminuosWhite/Titulo.png')} style={{top:-200,zIndex:-1,width:1750,height:480,transform: [{ scale: 0.2 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Blanqueamiento/LiminuosWhite/Imagen.png')} style={{left:45,marginTop:-110,width:910,height:580,transform: [{ scale: 0.7 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,left:70,marginTop:110,marginBottom:0}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{width:525,fontSize:22,left:70,marginTop:5}]}>Sus microcristales aceleradores de blanqueamiento contienen ingredientes similares a los usados por los dentistas</Text>
                <Text style={[styles.globalText,{marginTop:45,fontSize:18,left:75,width:525}]}>*Mediante el cepillado con crema dental Colgate Luminous White vs crema dental regular con flúor</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Blanqueamiento" />
        <ButtonSlide screenPrev="LiminuosWhite" screenNext="DientesBlancos" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
