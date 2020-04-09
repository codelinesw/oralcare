import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class SaludNaturalOne extends React.Component {

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
            <Image source={require('../../../images/Productos/SaludNatural/Titulo.png')} style={{top:-165,zIndex:-1,width:1750,height:420,transform: [{ scale: 0.32 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/SaludNatural/Imagen.png')} style={{marginTop:-30,width:410,height:450,transform: [{ scale: 1 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.globalText,{fontSize:19,right:30,width:500,marginTop:70,marginBottom:8}]}>Te sorprenderá con las propiedades de sus ingredientes de origen natural. Te da una explosión de sabor para el cuidado de tu sonrisa en tres presentaciones: “Cítricos y Eucalipto” “Coco y Jengibre” y “Carbón Activado y Menta”.</Text>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:30,marginTop:40}]}>AYUDA A:</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:30,width:360}]}>Remover las bacterias que pueden causar mal aliento, caries o problemas de encías con el cepillado regular.</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="Fourscreen" screenNext="MenuSaludNatural" navigation={this.props.navigation} showbutton={true}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
