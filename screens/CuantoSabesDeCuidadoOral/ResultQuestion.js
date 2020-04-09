import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'
import Header from '../../components/Header'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class ResultQuestion extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: [''],
      countResponse:parseInt(JSON.stringify(this.props.navigation.getParam('cantidadRespuestas', '0')).replace(/\"/g,''))
    };

  }

  chooseAnswer(index){
    this.setState({AnswersFirstQuestion:true,IndexChooseAnswer:index});
  }

  chooseAnswerTwo(index){
    this.setState({AnswersSecondQuestion:true,IndexChooseAnswerTwo:index});
  }

  chooseAnswerThird(index){
    this.setState({AnswersThirdQuestion:true,IndexChooseAnswerThird:index});
  }
  componentDidMount(){
      console.log(parseInt(JSON.stringify(this.props.navigation.getParam('countAnswers', '0')).replace(/\"/g,'')));
  }

  render(){
    const { countResponse } = this.state;
    //alert(countResponse);
    return (
      <View style={[styles.container,{width:WIDTH,height:HEIGHT,backgroundColor:'#fbfbfb',justifyContent:'center',alignItems:'center'}]}>
        <View style={{position:'absolute',top:0,width:WIDTH,backgroundColor:'red'}}>
          <Image source={require('../../images/Logo-colgate.png')} style={{position:'absolute',left:20,top:-12,width:120,height:120,transform: [{ scale: 0.8 }]}} />
        </View>
        {(countResponse > 3 && countResponse < 6) ? <Image source={require('../../images/Preguntas/Confeti.png')} style={{position:'absolute',top:0,width:WIDTH,height:HEIGHT,zIndex:-1}} /> : null}
        <Image source={require('../../images/Preguntas/Fondo.jpg')} style={{position:'absolute',top:0,left:0,width:WIDTH,height:HEIGHT,zIndex:-2}} />
        <View style={{position:'relative',left:10,right:10,top:40,bottom:10,width:WIDTH-550,height:HEIGHT-350,alignItems:'center',justifyContent:'center'}}>
          {(countResponse > 3 && countResponse < 6) ? <View><Text style={{fontSize:75, marginTop:-45,color:'#00ff0f',fontWeight:'bold',left:85}}>{countResponse}/5</Text>
          <Text style={{fontSize:75, color:'#00ff0f',fontWeight:'bold'}}>Correctas</Text></View> : (countResponse > 2 && countResponse < 4) ? <Text style={{fontSize:75, marginTop:-45,color:'#f4fa00',fontWeight:'bold'}}>{countResponse}/5 Correctas</Text> : <Text style={{fontSize:75, marginTop:-45,color:'#636262',fontWeight:'bold'}}>{countResponse}/5 Correctas</Text>}
          {(countResponse > 3 && countResponse < 6) ? <Text style={{fontSize:65, color:'#ff0000',fontWeight:'bold'}}>¡Felicitaciones!</Text>: (countResponse > 2 && countResponse < 4) ? <Text style={{fontSize:65, color:'#ff0000',fontWeight:'bold'}}>¡Muy bien!</Text> : null}
          {(countResponse > 3 && countResponse < 6) ? <Text style={{fontSize:35, color:'#bfbfbf'}}>¡Eres un experto en cuidado oral</Text> : <Text style={{fontSize:35, color:'#bfbfbf'}}>Sigamos aprendiendo juntos</Text>}
          {(countResponse > 3 && countResponse < 6) ? <Text style={{fontSize:35, color:'#7d7d7d'}}>CONTAGIA TU SONRISA!</Text> : (countResponse < 3) ? <Text style={{fontSize:35, color:'#bfbfbf'}}>Visita nuestra seccion de consejos</Text> : null}
        </View>
        {
        (countResponse > 2 && countResponse < 4) ? <View style={{position:'absolute',bottom:0,width:WIDTH,height:350}}><Image source={require('../../images/Preguntas/Aplausos-2.png')} style={{position:'absolute',bottom:-135,width:550,height:550,left:-133,transform:[{scale:0.5}]}}/>
          <Image source={require('../../images/Preguntas/Aplausos-1.png')} style={{position:'absolute',bottom:-135,width:550,height:550,right:-133,transform:[{scale:0.5}]}}/></View> : null
        }
        <View style={{position:'absolute',bottom:25,width:WIDTH,height:90,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{position:'relative',top:-20,padding:10}} onPress={() => this.props.navigation.navigate('Thirdscreen')}>
            <Image source={require('../../images/Preguntas/Boton-inicio.png')} style={{top:10,left:-4,width:105,height:135,transform: [{ scale: 0.8 }]}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
