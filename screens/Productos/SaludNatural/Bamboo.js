import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Bamboo extends React.Component {

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
            <Image source={require('../../../images/Productos/SaludNatural/Bamboo/Titulo.png')} style={{top:-330,zIndex:-1,width:3550,height:790,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/SaludNatural/Bamboo/Imagen.png')} style={{right:45,top:-1325,width:700,height:2920,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:240,marginTop:140,marginBottom:2}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{width:465,fontSize:17,right:240,marginTop:1}]}>Cerdas de puntas finas infundidas en carbono.</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:16,right:240,width:385}]}>Sin bisfenol a</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:16,right:240}]}>Mango hecho con bambú natural</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:16,right:240}]}>Empaque reciclable</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="SaludNatural" />
        <ButtonSlide screenPrev="CarbonActivado" screenNext="MenuSaludNatural" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
