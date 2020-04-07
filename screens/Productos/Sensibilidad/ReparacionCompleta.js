import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class ReparacionCompleta extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/ReparacionCompleta/Titulo.png')} style={{top:-315,zIndex:-1,width:3150,height:720,transform: [{ scale: 0.20 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/ReparacionCompleta/Imagen.png')} style={{left:45,marginTop:-120,width:1550,height:620,transform: [{ scale: 0.4 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={{color:'red',fontSize:22,left:80,fontWeight:'bold',marginTop:40,marginBottom:2,fontStyle:'italic'}}>BENEFICIOS:</Text>
            <Text style={{width:465,fontSize:18,left:80,marginTop:1,marginBottom:5}}>Exclusiva fórmula Pro-Argin TM.</Text>
            <Text style={{marginTop:3,fontSize:15,left:80,width:455,marginBottom:5}}>Su fórmula sella los túbulos expuestos para el alivio instantáneo y duradero de la sensibilidad</Text>
            <Text style={{marginTop:3,fontSize:15,left:80,width:455,marginBottom:5}}>Con el uso regular, el zinc ayuda a fortalecer la encía para reducir la recesión que exponen los túbulos de los dientes que generan la sensibilidad.</Text>
            <Text style={{marginTop:3,fontSize:15,left:80,width:455,marginBottom:5}}>Clínicamente comprobado.</Text>
            <Text style={{marginTop:25,fontSize:15,left:80,marginBottom:8,width:400}}>*Con aplicación directa, masajeando cada diente sensible durante 1 minuto.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="RealWhite" screenNext="ProAlivio" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
