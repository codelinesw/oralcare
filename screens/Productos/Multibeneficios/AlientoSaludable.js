import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class AlientoSaludable extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/AlientoSaludable/Titulo.png')} style={{top:-320,zIndex:-1,width:2350,height:760,transform: [{ scale: 0.15 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/AlientoSaludable/Imagen.png')} style={{left:45,marginTop:-10,width:1410,height:520,transform: [{ scale: 0.5 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{width:465,fontSize:22,left:70,marginTop:35}}>Adicionada con tecnología Neutro-Odor* que ayuda a neutralizar el mal aliento causado por bacterias, para brindarte una salud bucal completa</Text>
                <Text style={{marginTop:20,fontSize:17,left:70,width:485}}>*Tecnología Neutro-Odor es parte del sabor.</Text>
                <Text style={{marginTop:10,fontSize:17,left:70,width:485}}>**Reduce bacterias en dientes, lengua, mejilla y encías, ayuda a reducir la placa que causa problemas en las encías, fortalece el esmalte y ayuda a aliviar la sensibilidad con el uso continuo.</Text>
                <Text style={{marginTop:10,fontSize:17,left:70,width:485}}>** Vs Total Whitening.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="Total12" screenNext="EnciasSaludables" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
