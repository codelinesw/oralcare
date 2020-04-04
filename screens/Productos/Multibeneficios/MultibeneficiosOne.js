import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class MultibeneficiosOne extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/Titulo.png')} style={{top:-140,zIndex:-1,width:1750,height:420,transform: [{ scale: 0.32 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/Imagen-01.png')} style={{marginTop:10,width:410,height:320,transform: [{ scale: 1 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{color:'red',fontSize:22,fontWeight:'bold',marginTop:60}}>AYUDA A:</Text>
                <Text style={{textAlign:'left'}}>Prevenir las caries</Text>
                <Text style={{textAlign:'left'}}>Proteger las encías</Text>
                <Text style={{textAlign:'left'}}>Prevenir la formación de sarro</Text>
                <Text style={{textAlign:'left'}}>Prevenir la formación de placa</Text>
                <Text style={{textAlign:'left'}}>Combatir las bacterias</Text>
                <Text style={{textAlign:'left'}}>Combatir el mal aliento</Text>
                <Text style={{textAlign:'left'}}>Remover las manchas de los dientes</Text>
                <Text style={{textAlign:'left'}}>Fortalecer el esmalte dental</Text>
                <Text style={{textAlign:'left'}}>Prevenir las caries en raíces expuestas</Text>
                <Text style={{textAlign:'left'}}>Prevenir la pérdida mineral de los dientes</Text>
                <Text style={{textAlign:'left'}}>Prevenir problemas de encías causados por bacterias</Text>
                <Text style={{textAlign:'left'}}>Limpia aún entre dientes</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="Fourscreen" screenNext="MenuMultiBeneficios" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
