import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'

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
        <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:0,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Thirdscreen')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle]}>
            <Image source={require('../../images/screen-four/Titulo-01.png')} style={{right:135,top:0,width:740,height:120,transform: [{ scale: 0.6 }]}} />
          </View>
          <View style={[styles.carousel,{top:80,height:HEIGHT-230}]}>
            <View style={[styles.panel_left,{width:(WIDTH/2)-150,height:HEIGHT-230,alignItems:'center'}]}>
              <Image source={require('../../images/screen-four/Imagen(2*3).png')} style={{marginTop:10,width:320,height:320,transform: [{ scale: 1 }],marginBottom:25}} />
              <Text style={[styles.textsmall,{left:10,width:290,textAlign:'center'}]}>Cepillando tus dientes 3 veces al día durante 2 minutos lograrás controlar la placa bacteriana y mantener una sonrisa sana.</Text>
            </View>
            <View style={[styles.panel_right,{width:(WIDTH/2)+100,height:HEIGHT-230}]}>

            </View>
          </View>
        </View>
        <View style={{position:'absolute',bottom:10,width:(WIDTH-50),height:55, flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity style={{position:'relative',top:-10,padding:10}} onPress={() => this.props.navigation.navigate('CepillaTusDientes')}>
            <Image source={require('../../images/screen-four/prev-button.png')} style={{top:-40,left:-4,width:80,height:115,transform: [{ scale: 0.4 }]}} />
          </TouchableOpacity>
          <TouchableOpacity style={{position:'relative',top:-10,padding:10}} onPress={() => this.props.navigation.navigate('VisitaAlOdontologo')}>
            <Image source={require('../../images/screen-four/next-button.png')} style={{top:-40,left:-4,width:80,height:115,transform: [{ scale: 0.4 }]}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
