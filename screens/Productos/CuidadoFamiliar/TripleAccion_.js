import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class TripleAccion_ extends React.Component {

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
            <Image source={require('../../../images/Productos/CuidadoFamiliar/TripleAccion/Titulo.png')} style={{top:-330,zIndex:-1,width:3550,height:790,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/CuidadoFamiliar/TripleAccion/Imagen.png')} style={{right:45,top:-1345,width:700,height:2950,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{color:'red',fontSize:22,right:240,fontWeight:'bold',marginTop:140,marginBottom:2,fontStyle:'italic'}}>BENEFICIOS:</Text>
                <Text style={{width:465,fontSize:18,right:240,marginTop:1}}>Ayuda a remover delicadamente las manchas a revelar el blanco natural de los dientes.</Text>
                <Text style={{marginTop:3,fontSize:15,right:240,width:385}}>Efectiva remoción de la placa bacteriana</Text>
                <Text style={{marginTop:3,fontSize:15,right:240}}>Refresca el aliento</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="CuidadoFamiliar" />
        <ButtonSlide screenPrev="XtraFrescura" screenNext="SoftMint" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
