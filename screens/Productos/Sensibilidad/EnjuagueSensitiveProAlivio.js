import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class EnjuagueSensitiveProAlivio extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/EnjuagueSensitiveProAlivio/Titulo.png')} style={{top:-315,zIndex:-1,width:3150,height:720,transform: [{ scale: 0.20 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
              <Text style={{color:'red',fontSize:22,left:40,fontWeight:'bold',marginTop:110,marginBottom:2,fontStyle:'italic'}}>BENEFICIOS:</Text>
              <Text style={{width:465,fontSize:18,left:40,marginTop:1,marginBottom:5}}>Exclusiva fórmula Pro-Argin TM.</Text>
              <Text style={{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}}>Clínicamente comprobado</Text>
              <Text style={{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}}>Repara áreas sensibles.</Text>
              <Text style={{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}}>Aliento increíble.</Text>
              <Text style={{marginTop:3,fontSize:15,left:40,width:455,marginBottom:5}}>Cero alcohol.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Sensibilidad" />
        <ButtonSlide screenPrev="Cepillos" screenNext="MenuSensibilidad" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
