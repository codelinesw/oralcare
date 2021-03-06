import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class SensitiveProAlivio extends React.Component {

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
            <Image source={require('../../../images/Productos/Sensibilidad/SensitiveProAlivio/Titulo.png')} style={{top:-215,zIndex:-1,width:1750,height:520,transform: [{ scale: 0.22 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Sensibilidad/SensitiveProAlivio/Imagen.png')} style={{marginTop:-120,width:410,height:450,transform: [{ scale: 1 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:40,marginTop:100,marginBottom:2}]}>BENEFICIOS:</Text>
            <Text style={[styles.globalText,{width:465,fontSize:18,right:40,marginTop:1,marginBottom:5}]}>Exclusiva fórmula Pro-Argin.</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:40,width:385,marginBottom:5}]}>Alivio Instantáneo (Con aplicación directa)</Text>
            <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:40,marginBottom:5}]}>Alivio duradero (Con cepillado diario)</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="Fourscreen" screenNext="MenuSensibilidad" navigation={this.props.navigation} showbutton={true}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
