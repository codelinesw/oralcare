import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class ProAlivio extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/ProAlivio/Titulo.png')} style={{top:-265,zIndex:-1,width:1750,height:610,transform: [{ scale: 0.22 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/ProAlivio/Imagen.png')} style={{marginTop:-20,width:510,height:450,transform: [{ scale: 0.95 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={{fontSize:20,right:40,marginTop:25,marginBottom:28}}>Alivio instantáneo* y duradero** de la sensibilidad.</Text>
            <Text style={{color:'red',fontSize:22,right:40,fontWeight:'bold',marginTop:30,marginBottom:2,fontStyle:'italic'}}>BENEFICIOS:</Text>
            <Text style={{width:465,fontSize:18,right:40,marginTop:1,marginBottom:5}}>Exclusiva fórmula Pro-Argin TM</Text>
            <Text style={{marginTop:40,fontSize:15,right:40,marginBottom:8}}>*Con aplicación directa</Text>
            <Text style={{marginTop:0,fontSize:15,right:40,marginBottom:8}}>**Con un cepillado diario</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="ReparacionCompleta" screenNext="BlanqueamientoSensitive" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
