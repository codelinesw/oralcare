import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class CarbonActivado extends React.Component {

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
            <Image source={require('../../../images/Productos/SaludNatural/CarbonActivado&Menta/Titulo.png')} style={{top:-330,zIndex:-1,width:3550,height:790,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/SaludNatural/CarbonActivado&Menta/Imagen.png')} style={{right:45,top:-1005,width:2380,height:2460,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{fontSize:20,right:80,width:660,marginTop:120,marginBottom:8}}>Los científicos de Colgate, después de años de investigación, han combinado el carbón activado y la menta, en una exclusiva fórmula con espuma activa que ayuda a eliminar las impurezas* y proteger tus dientes.</Text>
                <Text style={{width:465,fontSize:16,right:80,marginTop:65}}>* Con cepillado regular</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="SaludNatural" />
        <ButtonSlide screenPrev="CocoyJengibre" screenNext="Bamboo" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
