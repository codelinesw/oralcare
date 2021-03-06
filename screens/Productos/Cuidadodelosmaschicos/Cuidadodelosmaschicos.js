import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Cuidadodelosmaschicos extends React.Component {

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
            <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Titulo.png')} style={{top:-140,left:120,zIndex:-1,width:1750,height:420,transform: [{ scale: 0.32 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/Imagen.png')} style={{marginTop:-160,width:610,height:620,transform: [{ scale: 0.85 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={[styles.globalText,{color:'red',fontSize:20,right:100,width:400,marginTop:20,}]}>Combate las caries y protege el esmalte con los productos infantiles Colgate Minions TM !</Text>
                <Text style={[styles.ItalicText,{color:'red',right:65,fontSize:22,marginTop:40,marginBottom:8}]}>BENEFICIOS:</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,marginBottom:8,fontSize:17}]}>Cepillos con cerdas multi-nivel para limpiar dientes chicos y grandes.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,marginBottom:8,width:450,fontSize:17}]}>Gel dental clínicamente probado para dar protección contra las caries. Fortalece y protege los dientes en desarrollo.</Text>
                <Text style={[styles.globalText,{textAlign:'left',right:65,width:430,fontSize:17}]}>Enjuague bucal que limpia toda la boca, eliminando las partículas que pudieron haber quedado después del cepillado.</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="Fourscreen" screenNext="Menucuidadodeloasmaschicos" navigation={this.props.navigation} showbutton={true}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
