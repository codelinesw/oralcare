import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class MaximaProteccion extends React.Component {

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
            <Image source={require('../../../images/Productos/CuidadoFamiliar/MaximaProteccion/Titulo.png')} style={{top:-215,zIndex:-1,width:1750,height:520,transform: [{ scale: 0.22 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/CuidadoFamiliar/MaximaProteccion/Imagen.png')} style={{left:45,marginTop:-40,width:1550,height:620,transform: [{ scale: 0.4 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={[styles.globalText,{fontSize:20,left:50,width:460,marginTop:60,marginBottom:8}]}>Su fórmula con fluoruro activo penetra en sus dientes para retener el calcio natural haciéndolos tan fuertes como puedan ser.</Text>
            <Text style={[styles.ItalicText,{color:'red',fontSize:22,left:80,marginTop:50,marginBottom:2}]}>BENEFICIOS:</Text>
            <Text style={[styles.globalText,{width:465,fontSize:18,left:80,marginTop:1,marginBottom:5}]}>Ayuda a combatir las caries, incluso entre los dientes.</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,left:80,width:385,marginBottom:5}]}>Fortalece y limpia lo dientes</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,left:80,marginBottom:5}]}>Delicioso sabor refrescante</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="CuidadoFamiliar" />
        <ButtonSlide screenPrev="MenucuidadoFamiliar" screenNext="MentaOriginal" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
