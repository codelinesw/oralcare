import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../../styles/styles'
import Header from '../../../components/Header'
import ButtonSlide from '../../../components/ButtonSlide'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class Menucuidadodeloasmaschicos extends React.Component {

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
                style={[styles.buttonButtonCarousel_,styles.BoxButton,{top:35,width:240,height:220}]}
                onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                >
                <Image
                source={require('../../../images/Productos/Cuidadodelosmaschicos/Menu/01.png')}
                style={{width:240,height:220,transform: [{ scale: 1 }]}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonButtonCarousel_,styles.BoxButton,{width:240,height:220,top:35}]}
                onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                >
                <Image
                source={require('../../../images/Productos/Cuidadodelosmaschicos/Menu/05.png')}
                style={{width:240,height:220,transform: [{ scale: 1 }]}}
                />
              </TouchableOpacity>
            </View>
            <Image source={require('../../../images/Productos/Blanqueamiento/Menu/toca-para-elegir.png')} style={{position:'absolute',top:205,width:900,height:255,transform: [{ scale: 0.35 }]}} />
            <View style={[styles.panel_second,{width:(WIDTH-320),height:HEIGHT-440,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}]}>
                <TouchableOpacity
                  style={[styles.buttonButtonCarousel_,styles.BoxButton,{width:240,height:220,top:-115}]}
                  onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                  >
                  <Image
                  source={require('../../../images/Productos/Cuidadodelosmaschicos/Menu/02.png')}
                  style={{width:240,height:220,transform: [{ scale: 1 }]}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonButtonCarousel_,styles.BoxButton,{width:240,height:220,top:-35}]}
                  onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                  >
                  <Image
                  source={require('../../../images/Productos/Cuidadodelosmaschicos/Menu/03.png')}
                  style={{width:240,height:220,transform: [{ scale: 1 }]}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.buttonButtonCarousel_,styles.BoxButton,{width:240,height:220,top:-115}]}
                  onPress={() => this.props.navigation.navigate('CepillaTusDientes')}
                  >
                  <Image
                  source={require('../../../images/Productos/Cuidadodelosmaschicos/Menu/04.png')}
                  style={{width:240,height:220,transform: [{ scale: 1 }]}}
                  />
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <ButtonSlide screenPrev="Cuidadodelosmaschicos" screenNext="BarbieMinions" navigation={this.props.navigation}/>
        <Image source={require('../../../images/Productos/Multibeneficios/Fondo.png')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
      </View>
    );
  }

}
