import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class ProAlivioInmediato extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/ProAlivioInmediato/Titulo.png')} style={{top:-315,zIndex:-1,width:3250,height:720,transform: [{ scale: 0.20 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/ProAlivioInmediato/Imagen.png')} style={{left:45,marginTop:-60,width:1550,height:620,transform: [{ scale: 0.4 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={[styles.globalText,{fontSize:18,left:40,marginTop:135,marginBottom:15,width:535}]}>Fórmula clínicamente comprobada y desarrollada con el poder de <Text style={{color:'red',fontStyle:'italic',fontWeight:'bold'}}>la tecnología de arginina</Text> para una acción inmediata y eficaz contra las molestias causadas por la sensibilidad en los dientes.</Text>
            <Text style={[styles.globalText,{fontSize:18,left:40,marginTop:0,marginBottom:28,width:535}]}>Con el uso regular, se crea una barrera de larga duración que actúa como un escudo protector contra la sensibilidad dental.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="BlanqueamientoSensitive" screenNext="Cepillos" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
