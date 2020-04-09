import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class SoftMint extends React.Component {

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
            <Image source={require('../../../images/Productos/CuidadoFamiliar/SoftMint/Titulo.png')} style={{top:-450,zIndex:-1,width:3550,height:1050,transform: [{ scale: 0.10 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/CuidadoFamiliar/SoftMint/Imagen.png')} style={{left:45,top:-1155,width:1240,height:2560,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.globalText,{marginTop:45,fontSize:20,right:75,width:385}]}>Colgate Plax Soft Mint mata los gérmenes que causan la gingivitis, la placa bacteriana y el mal aliento hasta por 12 horas.</Text>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:70,marginTop:40,marginBottom:0}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{width:525,fontSize:22,right:70,marginTop:5}]}>Ayuda a reducir hasta el 99% de los gérmenes</Text>
                <Text style={[styles.globalText,{marginTop:5,fontSize:18,right:75,width:525}]}>Aliento fresco</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="CuidadoFamiliar" />
        <ButtonSlide screenPrev="TripleAccion_" screenNext="MenucuidadoFamiliar" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
