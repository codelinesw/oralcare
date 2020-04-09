import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class MenuSaludNatural extends React.Component {

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
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-10,flexDirection:'column'}]}>
            <View style={[styles.panel_one,{width:(WIDTH-320),height:HEIGHT-440,flexDirection:'row',justifyContent:'space-between',alignItems:'center',}]}>
              <TouchableOpacity
                style={[styles.buttonButtonCarousel_,styles.BoxButton,{top:185,width:270,height:250}]}
                onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                >
                <Image
                source={require('../../../images/Productos/SaludNatural/Menu/01.png')}
                style={{width:270,height:250,transform: [{ scale: 1 }]}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonButtonCarousel_,styles.BoxButton,{position:'relative',top:-40,right:350,width:270,height:260}]}
                onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                >
                <Image
                source={require('../../../images/Productos/SaludNatural/Menu/03.png')}
                style={{width:270,height:260,transform: [{ scale: 1 }]}}
                />
              </TouchableOpacity>
            </View>
            <Image source={require('../../../images/Productos/Multibeneficios/Menu/toca-para-elegir.png')} style={{position:'absolute',top:205,width:900,height:255,transform: [{ scale: 0.35 }]}} />
            <View style={[styles.panel_second,{width:(WIDTH-320),height:HEIGHT-440,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                <TouchableOpacity
                  style={[styles.buttonButtonCarousel_,styles.BoxButton,{left:350,width:270,height:250,top:-65}]}
                  onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                  >
                  <Image
                  source={require('../../../images/Productos/SaludNatural/Menu/03.png')}
                  style={{width:270,height:260,transform: [{ scale: 1 }]}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonButtonCarousel_,styles.BoxButton,{width:270,height:250,top:-235}]}
                  onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                  >
                  <Image
                  source={require('../../../images/Productos/SaludNatural/Menu/04.png')}
                  style={{width:270,height:250,transform: [{ scale: 1 }]}}
                  />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="SaludNaturalOne" screenNext="DefensaReforzada" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
