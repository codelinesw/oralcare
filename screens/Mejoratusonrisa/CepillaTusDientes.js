import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView, ActivityIndicator } from 'react-native';
import styles from '../../styles/styles'
import ButtonSlide from '../../components/ButtonSlide'
import { WebView } from "react-native-webview";
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import pathvideo from '../../video/Coaching.mp4';

export default class CepillaTusDientes extends React.Component {

  scrollref = createRef();
  videoPlayer;

  constructor(props){
    super(props);

    this.state = {
      buferring:true,
      opacity:0,
      paused:true,
      icon:"play",
      visible: 1,
      showcontrols:false
    };

  }

  onLoadStart = () => {
    this.setState({opacity: 1});
  }

  onLoad = () => {
      this.setState({opacity: 0});
  }

  onBuffer = ({isBuffering}) => {
      this.setState({opacity: isBuffering ? 1 : 0});
  }

  start = () => {
    Animated.sequence([
       Animated.parallel([
         Animated.timing(this.state.visible, {
           toValue: 1,
           duration: 400,
         }),

       ]),
       Animated.delay(1000),
       Animated.parallel([
         Animated.timing(this.state.visible, {
           toValue: 0,
           duration: 400,
         }),
       ]),
     ]).start();
  }

  playVideo(){
    //this.start();
    if(!this.state.paused){
      this.setState({paused:true,visible:1});
    }else{
      this.setState({paused:false,visible:0});
    }
    
  }

  render(){
    const { paused, visible  } = this.state;

    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        <TouchableOpacity style={{position:'absolute',top:-5, right:5, padding:2}} onPress={() => this.props.navigation.navigate('Menu_')}>
          <Image source={require('../../images/screen-four/menu.png')} style={{right:-25,top:0,width:240,height:120,transform: [{ scale: 0.6 }]}} />
        </TouchableOpacity>
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle]}>
            <Image source={require('../../images/screen-four/Titulo-01.png')} style={{right:135,top:-50,width:740,height:120,transform: [{ scale: 0.6 }]}} />
          </View>
          <View style={[styles.carousel,{top:80,height:HEIGHT-230}]}>
            <View style={[styles.panel_left,{width:(WIDTH/2)-150,height:HEIGHT-230,alignItems:'center'}]}>
              <Image source={require('../../images/screen-four/Imagen(2*3).png')} style={{marginTop:10,width:320,height:320,transform: [{ scale: 1 }],marginBottom:25}} />
              <Text style={[styles.textsmall,{left:10,width:290,textAlign:'center'}]}>Cepillando tus dientes 3 veces al día durante 2 minutos lograrás controlar la placa bacteriana y mantener una sonrisa sana.</Text>
            </View>
            <View style={[styles.panel_right,{width:(WIDTH/2)+100,height:HEIGHT-230}]}>
              <View style={{width:650,height:550}}>
                  <Video 
                    source={pathvideo}
                    resize="cover"
                    paused={paused}
                    style={{position:'relative',top:10,left:68,width:640,height:440}}
                    onBuffer={this.onBuffer}
                    onLoadStart={this.onLoadStart}
                    onLoad={this.onLoad}
                  />
                   <View style={{position:'absolute',left:0,top:0,width:650,height:550,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                     <Image source={require('../../images/Miniatura-01.png')} style={{position:'relative',top:-90,left:62,width:640,height:360,opacity:this.state.visible}}/>
                     {
                       this.state.visible  > 0 ? <TouchableOpacity 
                       style={{
                         position:'absolute',
                         top:135,
                         width:82,
                         height:82,
                         borderRadius:100,
                         backgroundColor:'red',
                         left:360,
                         justifyContent:'center',
                         alignItems:'center'
                       }}
                       onPress={() => this.playVideo()}
                     >
                       <ActivityIndicator
                         animating
                         size="large"
                         color="white"
                         style={[{position:'relative',
                         opacity: this.state.opacity}]} 
                       />
                       {this.state.opacity > 0 ? this.state.paused ? null : <Icon name="play" size={30} color="#ffffff" /> : <Icon name="play" size={30} color="#ffffff" style={{top:-17,left:2}}/>}
                     </TouchableOpacity> : <TouchableOpacity 
                       style={{
                         position:'absolute',
                         top:10,
                         width:640,
                         height:360,
                         backgroundColor:'transparent',
                         justifyContent:'center',
                         alignItems:'center',
                         left:65,
                         zIndex:300
                       }}
                     onPress={() => this.playVideo()}
                     >
                     </TouchableOpacity> 
                     }
                  </View>
              </View>
            </View>
          </View>
        </View>
        <ButtonSlide screenNext="VisitaAlOdontologo" screenPrev="Menu_" navigation={this.props.navigation} />
      </View>
    );
  }

}
