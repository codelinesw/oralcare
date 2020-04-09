import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class CocoyJengibre extends React.Component {

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
            <Image source={require('../../../images/Productos/SaludNatural/Coco&Jengibre/Titulo.png')} style={{top:-330,zIndex:-1,width:3550,height:790,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/SaludNatural/Coco&Jengibre/Imagen.png')} style={{right:45,top:-1005,width:2380,height:2460,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.globalText,{fontSize:18,right:80,width:660,marginTop:15,marginBottom:8}]}>Colgate Natural Extracts contiene aceite de jengibre y extracto de coco. Su combinación única de ingredientes naturales y lo mejor de la ciencia de Colgate te ayudan a remover bacterias que pueden causar mal aliento, caries o problemas de encías con el cepillado regular. Déjate sorprender por el sabor del jengibre que proporciona un sabor refrescante, mientras que el aceite de coco envuelve en tu boca una sensación suave y dulce.</Text>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:80,marginTop:20,marginBottom:2}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{width:465,fontSize:18,right:80,marginTop:1}]}>Explosión de sabores para el cuidado de tu sonrisa.</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:80,width:385}]}>Contiene extractos naturales de aceite de coco y jengibre que ayudan a eliminar bacterias que causan el mal aliento, la caries y problemas de encías. Ayuda a fortalecer los dientes y proporciona una sensación natural refrescante</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:80}]}>El sabor del jengibre proporciona una sensación refrescante</Text>
                <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:80}]}>El aceite de coco proporciona una sensación suave y dulce</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="SaludNatural" />
        <ButtonSlide screenPrev="DefensaReforzada" screenNext="CarbonActivado" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
