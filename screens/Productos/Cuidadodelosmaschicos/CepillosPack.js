import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class CepillosPack extends React.Component {

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
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/4),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Cepillos2Pack/01.png')} style={{left:65,top:-2125,width:1800,height:4470,transform: [{ scale: 0.10 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/4),height:HEIGHT-310}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Cepillos2Pack/02.png')} style={{right:545,top:-1755,width:1500,height:3720,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_third,{width:(WIDTH/4),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Cepillos2Pack/03.png')} style={{right:5,top:-1755,width:1500,height:3720,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_third,{width:(WIDTH/4),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Cepillos2Pack/04.png')} style={{right:5,top:-1755,width:1550,height:3745,transform: [{ scale: 0.125 }],marginBottom:25}} />
            </View>
          </View>
        </View>
        <Submenu currentScreen="Cuidadochicos" />
        <ButtonSlide screenPrev="Cepilloschicos" screenNext="EnjuaguePlaxMinions" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
