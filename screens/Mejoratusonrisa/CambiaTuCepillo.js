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
            <Image source={require('../../images/screen-four/Titulo-04.png')} style={{top:0,width:1600,height:120,transform: [{ scale: 0.4 }]}} />
          </View>
          <View style={[styles.carousel,{top:80,height:HEIGHT-230}]}>
            <Image source={require('../../images/screen-four/cambia-de-cepillo.png')} style={{position:'absolute',top:0,width:WIDTH,height:450,transform: [{ scale: 0.9 }]}} />
            <View style={[styles.panel_one,{width:(WIDTH/2)-150,height:HEIGHT-230,alignItems:'center'}]}>
              <Text style={[{position:'relative',top:40,left:90,marginTop:50,fontSize:25,width:400, marginBottom:25}]}>Cambia tu cepillo cuando sus ﬁlamentos estén deformados,de esta manera lograras unmejor control de la placabacteriana y al mismo tiempo evitaras la contaminación de tu cepillo por uso prolongado en el tiempo..</Text>
            </View>
            <View style={[styles.panel_third,{width:(WIDTH/2)+100,height:HEIGHT-230, alignItems:'center'}]}>
              <Text style={[{position:'relative',top:40,left:120,marginTop:50,fontSize:25,width:400, marginBottom:25}]}>Estudios han demostrado que después de 3 meses de uso regular, un cepillo es menos efectivo para remover la placa de los dientes y de las encías, en comparación con un cepillo nuevo..</Text>
            </View>
          </View>
        </View>
        <ButtonSlide screenNext="ConsejosParaUnaBocaSana" screenPrev="EnjuagueBucal" navigation={this.props.navigation}/>
      </View>
    );
  }

}
