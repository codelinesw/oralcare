import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class BarbieMinions extends React.Component {

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
            <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/BarbieMinions/Titulo.png')} style={{top:-140,left:120,zIndex:-1,width:1750,height:420,transform: [{ scale: 0.25 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/BarbieMinions/Imagen.png')} style={{marginTop:-160,width:610,height:620,transform: [{ scale: 0.85 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.ItalicText,{color:'red',right:65,fontSize:22,marginTop:80,marginBottom:8}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,marginBottom:8}]}>Protección contra las caries, clínicamente probado.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,marginBottom:8,width:450}]}>Protección del esmalte que fortalece y protege los dientes.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,width:430}]}>Gel con delicioso sabor a tutti-frutti.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,width:430}]}>Con flúor para niños.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,width:430}]}>Viene en un cómodo tubo que es fácil de usar</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Cuidadochicos" />
        <ButtonSlide screenPrev="Menucuidadodeloasmaschicos" screenNext="LigadelaJusticia" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
