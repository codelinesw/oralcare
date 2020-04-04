import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Total12 extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/Total12-Clean-Mint/Titulo.png')} style={{top:-150,zIndex:-1,width:1750,height:440,transform: [{ scale: 0.2 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/Total12-Clean-Mint/Imagen-01.png')} style={{left:45,marginTop:60,width:910,height:320,transform: [{ scale: 0.8 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{width:465,fontSize:22,left:70,marginTop:115}}>Para una salud bucal completa que te protege más allá de los dientes, reduciendo bacterias en lengua, mejillas y encías hasta por 12 horas*</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="Fourscreen" screenNext="MenuMultiBeneficios" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
