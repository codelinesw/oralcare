import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class DientesBlancos extends React.Component {

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
            <Image source={require('../../../images/Productos/Blanqueamiento/DientesBlancos/Titulo.png')} style={{top:-230,zIndex:-1,width:2350,height:540,transform: [{ scale: 0.25 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Blanqueamiento/DientesBlancos/Imagen.png')} style={{left:45,marginTop:-130,width:910,height:620,transform: [{ scale: 0.6 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{color:'red',fontSize:22,left:5,fontWeight:'bold',marginTop:110,marginBottom:0,fontStyle:'italic'}}>BENEFICIOS:</Text>
                <Text style={{width:465,fontSize:22,left:5,marginTop:5}}>Su innovadora tecnología ahora combina abrillantadores ópticos para blanquear los dientes instantáneamente.</Text>
                <Text style={{marginTop:70,fontSize:13,left:5,width:485}}>*Efecto blanqueador instantáneo es temporal.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Blanqueamiento" />
        <ButtonSlide screenPrev="LiminuosWhite" screenNext="MaxWhite" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
