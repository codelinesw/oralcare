import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class Menu_ extends React.Component {

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
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Thirdscreen')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={styles.carouselcontainer}>
          <View style={styles.content_}>
              <View style={[styles.carousel]}>
                  <TouchableOpacity style={[styles.buttonButtonCarousel,styles.BoxButton]} onPress={() => this.props.navigation.navigate('CepillaTusDientes')}><Image source={require('../../images/screen-four/boton-menu-01.png')} style={{width:230,height:230,transform: [{ scale: 1 }]}} /></TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonButtonCarousel,styles.BoxButton]} onPress={() => this.props.navigation.navigate('VisitaAlOdontologo')}><Image source={require('../../images/screen-four/boton-menu-02.png')} style={{width:230,height:230,transform: [{ scale: 1 }]}} /></TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonButtonCarousel,styles.BoxButton]} onPress={() => this.props.navigation.navigate('EnjuagueBucal')}><Image source={require('../../images/screen-four/boton-menu-03.png')} style={{width:230,height:230,transform: [{ scale: 1 }]}} /></TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonButtonCarousel,styles.BoxButton]} onPress={() => this.props.navigation.navigate('CambiaTuCepillo')}><Image source={require('../../images/screen-four/boton-menu-04.png')} style={{width:230,height:230,transform: [{ scale: 1 }]}} /></TouchableOpacity>
                  <TouchableOpacity style={[styles.buttonButtonCarousel,styles.BoxButton]} onPress={() => this.props.navigation.navigate('ConsejosParaUnaBocaSana')}><Image source={require('../../images/screen-four/boton-menu-05.png')} style={{width:230,height:230,transform: [{ scale: 1 }]}} /></TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
    );
  }

}
