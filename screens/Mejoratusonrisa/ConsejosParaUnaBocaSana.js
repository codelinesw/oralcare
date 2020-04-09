import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'
import ButtonSlide from '../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class ConsejosParaUnaBocaSana extends React.Component {

  scrollref = createRef();
  constructor(props){
    super(props);

    this.state = {


    };


  }

  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Menu_')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle,{top:-15}]}>
            <Image source={require('../../images/screen-four/Titulo-05.png')} style={{top:0,width:1700,height:120,transform: [{ scale: 0.4 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,height:HEIGHT-200, flexDirection:'column'}]}>
            <View style={[styles.panel_left,{width:(WIDTH-50),height:HEIGHT-400,flexDirection:'row',alignItems:'center',justifyContent:'center'}]}>
                <View style={{position:'relative',flexDirection:'column',width:((WIDTH-50)/2),height:HEIGHT-400,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../images/screen-four/Numeros-1-2.png')} style={{position:'absolute',top:-76,left:-10,width:150,height:520,transform: [{ scale: 0.3 }]}} />
                    <Text style={[styles.globalText,{position:'relative',top:-40,fontSize:22,width:390,marginBottom:22}]}>Usar el cepillo dental adecuado para la necesidad de tu boca. Cepillate 3 veces al día por al menos 2 minutos, especialmente al levantarse por la mañana y antes de acostarse.</Text>
                    <Text style={[styles.globalText,{position:'relative',top:-40,fontSize:22,width:390,marginBottom:22}]}>Elige la crema dental adecuada para mantener tu boca sana.</Text>
                </View>
                <View style={{position:'relative',flexDirection:'column',width:((WIDTH-50)/2),height:HEIGHT-400,alignItems:'center',justifyContent:'center'}}>
                  <Image source={require('../../images/screen-four/Numeros-3-4.png')} style={{position:'absolute',top:-64,left:-10,width:150,height:520,transform: [{ scale: 0.3 }]}} />
                  <Text style={[styles.globalText,{position:'relative',top:-30,fontSize:19,width:390,marginBottom:22}]}>Finaliza tu higiene bucal con un enjuague bucal que potencie la acción de tu crema dental.</Text>
                  <Text style={[styles.globalText,{position:'relative',top:-5,fontSize:19,width:390,marginBottom:22}]}>Usa hilo dental una vez al día.</Text>
                </View>
            </View>
            <View style={[styles.panel_right,{top:-70,width:(WIDTH-50),height:HEIGHT-200,flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
              <View style={{position:'relative',top:-200,flexDirection:'row',justifyContent:'center',alignItems:'center',width:((WIDTH-50)/3),height:180}}>
                <Image source={require('../../images/screen-four/Imagen-01.png')} style={{left:-4,width:180,height:180,transform: [{ scale: 0.7 }]}} />
                <Text style={[styles.globalText,{fontSize:17,width:256,marginBottom:22,right:20}]}>Saque de 45 a 60 cm de hilo dental del dispesador.</Text>
              </View>
              <View style={{position:'relative',top:-200,flexDirection:'row',justifyContent:'center',alignItems:'center',width:((WIDTH-50)/3),height:180}}>
                <Image source={require('../../images/screen-four/Imagen-02.png')} style={{left:-4,width:180,height:180,transform: [{ scale: 0.7 }]}} />
                <Text style={[styles.globalText,{fontSize:17,width:256,marginBottom:22,right:20}]}>Enrolle los extremos del hilo en sus Dedos índice y medio.</Text>
              </View>
              <View style={{position:'relative',top:-200,flexDirection:'row',justifyContent:'center',alignItems:'center',width:((WIDTH-50)/3),height:180}}>
                <Image source={require('../../images/screen-four/Imagen-03.png')} style={{left:-4,width:180,height:180,transform: [{ scale: 0.7 }]}} />
                <Text style={[styles.globalText,{fontSize:17,width:256,marginBottom:22,right:20}]}>Sujete el hilo con ﬁrmeza alrededor de cada diente formando una C; mueva el hilo hacia adelante y hacia atrás jalando y empujando, de arriba hacia abajo contra el lado de cada diente.</Text>
              </View>
            </View>
          </View>
        </View>
        <ButtonSlide screenNext="Menu_" screenPrev="CambiaTuCepillo" navigation={this.props.navigation}/>
      </View>
    );
  }

}
