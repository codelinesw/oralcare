import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class BlanqueamientoSensitive extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/BlanqueamientoSensitive/Titulo.png')} style={{top:-315,zIndex:-1,width:3150,height:720,transform: [{ scale: 0.20 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/BlanqueamientoSensitive/Imagen.png')} style={{left:45,marginTop:-30,width:1550,height:620,transform: [{ scale: 0.4 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={[styles.globalText,{fontSize:18,left:40,marginTop:5,marginBottom:28,width:535}]}>Su fórmula ayuda a aliviar la sensibilidad del diente y crea un escudo protector, ayudando a proporcionar rápido alivio contra la sensibilidad dental y un sistema blanqueador que ayuda a combatir la formación del sarro y remover suavemente las manchas dejando sus dientes más blancos. Proporciona también la protección contra la caries, placa y un delicioso sabor refrescante.</Text>
            <Text style={[styles.ItalicText,{color:'red',fontSize:22,left:40,marginTop:20,marginBottom:2}]}>BENEFICIOS:</Text>
            <Text style={[styles.globalText,{width:465,fontSize:18,left:40,marginTop:1,marginBottom:5}]}>Sabor refrescante.</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}]}>SAyuda a remover manchas</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}]}>Protección comprobada.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="ProAlivio" screenNext="ProAlivioInmediato" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
