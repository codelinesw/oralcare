import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class EnjuagueLiminuosWhite extends React.Component {

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
            <Image source={require('../../../images/Productos/Blanqueamiento/EnjuagueLiminuosWhite/Titulo.png')} style={{top:-330,zIndex:-1,width:3550,height:790,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Blanqueamiento/EnjuagueLiminuosWhite/Imagen.png')} style={{right:45,top:-1125,width:1140,height:2460,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.globalText,{fontSize:22,right:150,width:380,marginTop:70,marginBottom:8}]}>Ayuda a mantener el blanco natural de los dientes y refresca el aliento.</Text>
                <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:150,marginTop:20,marginBottom:5,}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{width:465,fontSize:18,right:150,marginTop:1,width:370}]}>Asegura una sonrisa brillante y una boca siempre fresca.</Text>
                <Text style={[styles.globalText,{marginTop:30,fontSize:15,right:150,width:425}]}>*Para obtener los mejores resultados, utilice la línea completa de Colgate Luminous White</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Blanqueamiento" />
        <ButtonSlide screenPrev="CepilloLiminuosWhite" screenNext="MenuBlanqueamiento" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
