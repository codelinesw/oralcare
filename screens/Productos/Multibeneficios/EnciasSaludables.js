import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class EnciasSaludables extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/EnciasSaludables/Titulo.png')} style={{top:-350,zIndex:-1,width:2350,height:840,transform: [{ scale: 0.2 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{width:465,fontSize:22,left:70,marginTop:115}}>Adicionada con tecnología Neutro-Odor* que ayuda a neutralizar el mal aliento causado por bacterias, para brindarte una salud bucal completa</Text>
                <Text style={{color:'red',fontSize:22,left:70,fontWeight:'bold',marginTop:40,marginBottom:15}}>BENEFICIOS:</Text>
                <Text style={{textAlign:'left',left:70,marginBottom:10}}>Reduce bacterias en los dientes, lengua, mejillas y encías.</Text>
                <Text style={{textAlign:'left',left:70,marginBottom:10 }}>Ayuda a reducir la placa que causa problemas en las encías.</Text>
                <Text style={{textAlign:'left',left:70,}}>Fortalece el esmalte y ayuda a aliviar la sensibilidad con el uso continuo.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="TotalProfessional" screenNext="AlientoSaludable" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
