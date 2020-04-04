import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class TotalProfessional extends React.Component {

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
            <Image source={require('../../../images/Productos/Multibeneficios/TotalProfessional/Titulo.png')} style={{top:-150,zIndex:-1,width:2350,height:440,transform: [{ scale: 0.2 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
                <Image source={require('../../../images/Productos/Multibeneficios/TotalProfessional/Imagen.png')} style={{left:45,marginTop:0,width:910,height:520,transform: [{ scale: 0.7 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
                <Text style={{width:465,fontSize:22,left:70,marginTop:115}}>Adicionada con tecnología que cambia de color ayudándote a reducir la formación de placa y bacterias para una salud bucal completa* que hasta un odontólogo podrá ver.</Text>
                <Text style={{marginTop:70,fontSize:13,left:5,width:485}}>* Reduce bacterias en dientes, lengua, mejillas y encías; ayuda a reducir la placa que causa problemas en las encías, fortalece el esmalte y ayuda a aliviar la sensibilidad con el uso continuo.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Multibeneficios" />
        <ButtonSlide screenPrev="Total12" screenNext="EnciasSaludables" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
