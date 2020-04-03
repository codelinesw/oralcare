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
      data: [
        {
          id:0,
          img:require('../../images/screen-four/01.png')
        },
        {
          id:1,
          img:require('../../images/screen-four/02.png')
        },
        {
          id:2,
          img:require('../../images/screen-four/03.png')
        },
        {
          id:3,
          img:require('../../images/screen-four/04.png')
        },
        {
          id:4,
          img:require('../../images/screen-four/05.png')
        },
        {
          id:5,
          img:require('../../images/screen-four/06.png')
        },

      ]

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

  componentWillUnmount(){
    clearInterval(this.start);
  }

  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Menu_')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle]}>
            <Image source={require('../../images/screen-four/Titulo-02.png')} style={{top:0,width:1200,height:120,transform: [{ scale: 0.4 }]}} />
          </View>
          <View style={[styles.carousel,{top:80,height:HEIGHT-230}]}>
            <View style={[styles.panel_left,{width:(WIDTH/2)-150,height:HEIGHT-230,alignItems:'center'}]}>
            <Image source={require('../../images/screen-four/subtitulo-01.png')} style={{top:0,width:1250,height:120,transform: [{ scale: 0.4 }]}} />
            <View style={{flexDirection:'row',top:-60}}>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',top:-50,left:35}}>
                  <Image source={require('../../images/screen-four/Plax-soft-mint.png')} style={{top:-0,width:200,height:400,transform: [{ scale: 0.6 }]}} />
                  <Text style={{top:-65,fontSize:25,width:110}}>Plax Soft Mint</Text>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../../images/screen-four/Plax-soft-mint.png')} style={{top:0,width:200,height:400,transform: [{ scale: 0.6 }]}} />
                  <Text style={{top:-65,fontSize:25,width:110}}>Liminuos White</Text>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',top:-50,right:35}}>
                  <Image source={require('../../images/screen-four/Plax-sensitive-pro-alivio.png')} style={{top:-0,width:200,height:400,transform: [{ scale: 0.6 }]}} />
                  <Text style={{top:-65,fontSize:25,width:110}}>Sensitive Pro-Alivio</Text>
              </View>
            </View>
            </View>
            <View style={[styles.panel_right,{width:(WIDTH/2)+100,height:HEIGHT-230, alignItems:'center'}]}>
              <Text style={[{marginTop:50,fontSize:25,width:450, marginBottom:25}]}>*Enjuaga tus dientes durante 1 minuto con tu enjuague de elección para completar tu higiene bucal.</Text>
              <Text style={[{fontSize:25,width:450}]}>*Usando tu enjuague bucal preferido durante un minuto luego del cepillado lograras un complemento perfecto para el cuidado de tu sonrisa.</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenNext="CambiaTuCepillo" screenPrev="VisitaAlOdontologo" navigation={this.props.navigation} />
      </View>
    );
  }

}
