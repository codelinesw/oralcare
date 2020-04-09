import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'
import ButtonSlide from '../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class CepillaTusDientes extends React.Component {

  scrollref = createRef();
  constructor(props){
    super(props);

    this.state = {
      data: [""]

    };
    this.CurrentSlide = 0;
    this.IntervalTime = 4000;
    this.scrollx = new Animated.Value(0);
    this.start = "";

  }

  componentDidMount(){
    // this.start = setInterval(() => {
    //   this._goToNextPage();
    // },6000);
  }


  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Menu_')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle,{top:-25}]}>
              <Image source={require('../../images/screen-four/Titulo-03.png')} style={{top:0,width:1250,height:120,transform: [{ scale: 0.4 }]}} />
          </View>
          <View style={[styles.carousel,{top:80,height:HEIGHT-230}]}>
            <View style={[styles.panel_left,{width:(WIDTH/2)-50,height:HEIGHT-230,alignItems:'center'}]}>
              <Image source={require('../../images/screen-four/visita-al-dentista.png')} style={{marginTop:10,width:520,height:420,transform: [{ scale: 1 }],marginBottom:25}} />
            </View>
            <View style={[styles.panel_right,{width:(WIDTH/2),height:HEIGHT-230}]}>
              <View style={{flexDirection:'column',marginBottom:5, alignItems:'center'}}>
                <Text style={[styles.globalText,{color:'red',fontSize:20,marginTop:25}]}>INFORMACIÓN GENERAL</Text>
                <Text style={[styles.globalText,{marginTop:10,fontSize:17,width:470, marginBottom:25}]}>Cuidarse los dientes signiﬁca más que cepillarse y usar hilo dental. Para cuidarse de forma completa es importante visitar al dentista cada seis meses para realizarse chequeos y
limpiezas profesionales. El primer paso del proceso es encontrar un dentista con quien se sienta cómodo, y luego concertar una cita.</Text>
              </View>
              <View style={{flexDirection:'column',marginBottom:25, alignItems:'center'}}>
                <Text style={[styles.globalText,{color:'red',fontSize:20,marginTop:15}]}>¿QUÉ ESPERAR DE LA VISITA AL DENTISTA?</Text>
                <Text style={[styles.globalText,{marginTop:10,fontSize:17,width:450, marginBottom:25}]}>Durante su primera visita al dentista, este establecerá el historial completo de su salud. En las visitas de seguimiento, si su estado de salud ha cambiado, no se olvide de comentárselo al dentista..</Text>
              </View>
            </View>
          </View>
        </View>
        <ButtonSlide screenNext="EnjuagueBucal" screenPrev="CepillaTusDientes" navigation={this.props.navigation} />
      </View>
    );
  }

}
