import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Advanced_ extends React.Component {

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
            <Image source={require('../../../images/Productos/Blanqueamiento/360Advanced/Titulo.png')} style={{top:-330,zIndex:-1,width:2350,height:760,transform: [{ scale: 0.17 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>

            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{color:'red',fontSize:22,right:75,fontWeight:'bold',marginTop:70,marginBottom:8,fontStyle:'italic'}}>BENEFICIOS:</Text>
                <Text style={{width:465,fontSize:18,right:75,marginTop:2}}>Copas removedoras de manchas.</Text>
                <Text style={{width:465,fontSize:18,right:75,marginTop:2}}>Cerdas pulidoras exclusivas.</Text>
                <Text style={{width:465,fontSize:18,right:75,marginTop:2}}>Limpiador de lengua y mejillas único y punta limpiadora elevada.</Text>
                <Text style={{width:465,fontSize:18,right:75,marginTop:2}}>Diseño avanzado y limpieza efectiva y cómoda.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Blanqueamiento" />
        <ButtonSlide screenPrev="MaxWhite" screenNext="CepilloLiminuosWhite" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
