import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class UltraSoft extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/UltraSoft/Titulo.png')} style={{top:-450,zIndex:-1,width:3150,height:980,transform: [{ scale: 0.1 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/UltraSoft/Imagen.png')} style={{left:45,top:-1125,width:680,height:2420,transform: [{ scale: 0.2 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
            <Text style={{color:'red',fontSize:22,right:150,fontWeight:'bold',marginTop:40,marginBottom:15,fontStyle:'italic'}}>BENEFICIOS:</Text>
            <Text style={{textAlign:'left',right:150,marginBottom:5}}>Ultra suave.</Text>
            <Text style={{textAlign:'left',right:150,marginBottom:5 }}>1 mm ultra suaves filamentos en alta densidad para una gentil y eficaz limpieza.</Text>
            <Text style={{textAlign:'left',right:150,marginBottom:5}}>Gentil en las encías.</Text>
            <Text style={{textAlign:'left',right:150,marginBottom:5}}>Remueve las manchas superficiales.</Text>
            <Text style={{textAlign:'left',right:150,marginBottom:5}}>Ayuda a proteger de las caries.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="AvancedTotal12" screenNext="MenuMultiBeneficios" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
