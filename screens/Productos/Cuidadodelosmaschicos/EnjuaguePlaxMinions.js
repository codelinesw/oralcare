import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
import Submenu from '../../../components/Submenu'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class EnjuaguePlaxMinions extends React.Component {

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
            <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/EnjuaguePlaxMinions/Titulo.png')} style={{top:-345,zIndex:-1,width:3150,height:810,transform: [{ scale: 0.12 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/2),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
              <Image source={require('../../../images/Productos/Cuidadodelosmaschicos/EnjuaguePlaxMinions/Imagen.png')} style={{left:45,top:-1085,width:1140,height:2460,transform: [{ scale: 0.23 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/2),height:HEIGHT-310}]}>
              <Text style={[styles.globalText,{fontSize:20,right:100,width:450,marginTop:20}]}>Enjuague bucal con flúor que ayuda a fortalecer el esmalte y brinda protección anticaries para los niños.</Text>
              <Text style={[styles.ItalicText,{color:'red',fontSize:22,right:100,marginTop:30,marginBottom:2}]}>BENEFICIOS:</Text>
              <Text style={[styles.globalText,{width:465,fontSize:18,right:100,marginTop:1,marginBottom:5}]}>Ahora presentando por los personajes favoritos de tus hijos, los minions!</Text>
              <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:100,width:455,marginBottom:5}]}>Limpia toda la boca, eliminando las partículas que pudieron haber quedado después del cepillado</Text>
              <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:100,width:455,marginBottom:5}]}>Fun Bello TM Bubble Fruit R , con sabor a chicle de frutas que los niños disfrutarán.</Text>
              <Text style={[styles.globalText,{marginTop:3,fontSize:15,right:100,width:455,marginBottom:5}]}>Recomendado para niños mayores a 6 años.</Text>
            </View>
          </View>
        </View>
        <Submenu currentScreen="Cuidadochicos" />
        <ButtonSlide screenPrev="CepillosPack" screenNext="Fourscreen" navigation={this.props.navigation} showbutton={false}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
