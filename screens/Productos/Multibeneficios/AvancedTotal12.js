import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class AvancedTotal12 extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/360-Avanced-Total-12/Titulo.png')} style={{top:-350,zIndex:-1,width:3150,height:780,transform: [{ scale: 0.13 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/360-Avanced-Total-12/Imagen.png')} style={{left:45,top:-1125,width:680,height:2420,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{width:465,fontSize:22,right:120,marginTop:35}}>Limpieza saludable en toda tu boca limpiador de lengua y mejillas con diseño innovador, remueve bacterias en cuatro áreas:</Text>
                <Text style={{textAlign:'left',marginTop:25,right:80,marginBottom:10}}>Dientes.</Text>
                <Text style={{textAlign:'left',right:80,marginBottom:10 }}>Lengua.</Text>
                <Text style={{textAlign:'left',right:80,marginBottom:10}}>Mejillas.</Text>
                <Text style={{textAlign:'left',right:80,}}>Encias.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="AlientoSaludable" screenNext="UltraSoft" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
