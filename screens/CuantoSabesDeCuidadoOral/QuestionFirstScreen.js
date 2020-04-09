import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../../styles/styles'
import Header from '../../components/Header'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class QuestionFirstScreen extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      data: [''],
      chooseResponseOne:false,
      chooseResponseTwo:false,
      chooseResponseThree:false,
      Answers:[
        {
          "FirstResponses":[
            {

              "answer":"Una vez",
              "valid":false
            },
            {
              "answer":"Dos veces",
              "valid":false
            },
            {
              "answer": "Al menos, tres veces",
              "valid":true
            }
          ]
        },
        {
          "SecondResponses":[
            {

              "answer":"30 Segundos",
              "valid":false
            },
            {
              "answer":"1 Minuto",
              "valid":false
            },
            {
              "answer": "2 Minutos",
              "valid":true
            }
          ]
        },
        {
          "ThirdResponses":[
            {

              "answer":"Entre el quinto y sexto mes",
              "valid":true
            },
            {
              "answer":"A los dos anios",
              "valid":false
            },
            {
              "answer": "Al los cinco anios",
              "valid":false
            }
          ]
        }
      ],
      AnswersFirstQuestion:false,
      IndexChooseAnswer:0,
      AnswersSecondQuestion:false,
      IndexChooseAnswerTwo:0,
      AnswersThirdQuestion:false,
      IndexChooseAnswerThird:0
    };

    this.countAnswers = 0;
  }

  chooseAnswer(index,valid){
    this.setState({AnswersFirstQuestion:true,IndexChooseAnswer:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }

  chooseAnswerTwo(index,valid){
    this.setState({AnswersSecondQuestion:true,IndexChooseAnswerTwo:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }

  chooseAnswerThird(index,valid){
    this.setState({AnswersThirdQuestion:true,IndexChooseAnswerThird:index});
    if(valid){
      this.countAnswers = this.countAnswers+1;
    }
  }

  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Header _path_="jum" />
        <View style={[styles.carouselcontainer,{height:HEIGHT-150}]}>
          <View style={[styles.containerTitle,{top:-25}]}>
            <Image source={require('../../images/Preguntas/Titulo.png')} style={{top:0,width:1750,height:120,transform: [{ scale: 0.4 }]}} />
          </View>
          <View style={[styles.carousel,{top:40,width:WIDTH,height:HEIGHT-310}]}>
            <View style={[styles.panel_one,{width:(WIDTH/3),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
              <View style={{width:(WIDTH/3)-90,padding:10,paddingLeft:10,paddingRight:10,height:153,borderRadius:8}}>
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'600',fontFamily:'ColgateReady-Italic',color:'red'}}>¿Cuántas veces al día</Text>
                <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>hay que cepillarse</Text>
                <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>los dientes?</Text>
                <Image source={require('../../images/Preguntas/reactangulo-preguntas.png')} style={{position:'absolute',left:-25,top:0,width:(WIDTH/3)-30,paddingLeft:10,paddingRight:10,padding:10,height:140,borderRadius:8}} />
              </View>
              <View style={{width:(WIDTH/3)-90,height:380,marginTop:25}}>
              {this.state.Answers[0].FirstResponses.map((item,index) => {
                let stylevalid = !this.state.AnswersFirstQuestion ? null : this.state.IndexChooseAnswer == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
                return(
                  <TouchableOpacity key={index} style={{flexDirection:'row',height:40, left:30,marginBottom:15}} onPress={() => this.chooseAnswer(index,item.valid)}>
                    <Image source={!this.state.AnswersFirstQuestion ? require('../../images/Preguntas/option.png') : this.state.IndexChooseAnswer == index ? (item.valid ? require('../../images/Preguntas/option-correcto.png') : require('../../images/Preguntas/option-incorrecto.png')) : (item.valid ? require('../../images/Preguntas/option.png') : require('../../images/Preguntas/option.png')) } style={{width:40,height:40}}/>
                    <Text style={[{fontSize:22,top:3,fontFamily:'ColgateReady'},stylevalid]}>{item.answer}</Text>
                    {!this.state.AnswersFirstQuestion ? null : this.state.IndexChooseAnswer == index ? (item.valid ?
                      <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />
                      : <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />) : (item.valid ? <Image source={require('../../images/Preguntas/respuesta-correcta.png')} style={{position:'absolute',zIndex:-2,left:-12,width:(WIDTH/3)-90,height:40}} /> : null)}
                  </TouchableOpacity>
                )
              })}
              </View>
            </View>
            <View style={[styles.panel_second,{width:(WIDTH/3),height:HEIGHT-310,alignItems:'center', alignItems:'center'}]}>
            <View style={{width:(WIDTH/3)-90,padding:10,paddingLeft:10,paddingRight:10,height:153,borderRadius:8}}>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>¿Cuál es el tiempo</Text>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>indicado para un</Text>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady-Italic',fontWeight:'600',color:'red'}}>cepillado efectivo?</Text>
              <Image source={require('../../images/Preguntas/reactangulo-preguntas.png')} style={{position:'absolute',left:-25,top:0,width:(WIDTH/3)-30,paddingLeft:10,paddingRight:10,padding:10,height:140,borderRadius:8}} />
            </View>
            <View style={{width:(WIDTH/3)-90,height:380,marginTop:25}}>
            {this.state.Answers[1].SecondResponses.map((item,index) => {
              let stylevalid = !this.state.AnswersSecondQuestion ? null : this.state.IndexChooseAnswerTwo == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
              return(
                <TouchableOpacity key={index} style={{flexDirection:'row',height:40, left:30,marginBottom:15}} onPress={() => this.chooseAnswerTwo(index,item.valid)}>
                  <Image source={!this.state.AnswersSecondQuestion ? require('../../images/Preguntas/option.png') : this.state.IndexChooseAnswerTwo == index ? (item.valid ? require('../../images/Preguntas/option-correcto.png') : require('../../images/Preguntas/option-incorrecto.png')) : (item.valid ? require('../../images/Preguntas/option.png') : require('../../images/Preguntas/option.png')) } style={{width:40,height:40}}/>
                  <Text style={[{fontSize:22,top:3,fontFamily:'ColgateReady'},stylevalid]}>{item.answer}</Text>
                  {!this.state.AnswersSecondQuestion ? null : this.state.IndexChooseAnswerTwo == index ? (item.valid ?
                    <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />
                    : <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />) : (item.valid ? <Image source={require('../../images/Preguntas/respuesta-correcta.png')} style={{position:'absolute',zIndex:-2,left:-12,width:(WIDTH/3)-90,height:40}} /> : null)}
                </TouchableOpacity>
              )
            })}
            </View>
            </View>
            <View style={[styles.panel_third,{width:(WIDTH/3),height:HEIGHT-310, alignItems:'center', alignItems:'center'}]}>
            <View style={{width:(WIDTH/3)-90,padding:10,paddingLeft:10,paddingRight:10,height:153,borderRadius:8}}>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>¿Cuando deberia ser</Text>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady-Italic',fontWeight:'600',color:'red'}}>la primer visita</Text>
              <Text style={{fontSize:25,textAlign:'center',fontFamily:'ColgateReady',fontWeight:'600'}}>al odontologo?</Text>
              <Image source={require('../../images/Preguntas/reactangulo-preguntas.png')} style={{position:'absolute',left:-25,top:0,width:(WIDTH/3)-30,paddingLeft:10,paddingRight:10,padding:10,height:140,borderRadius:8}} />
            </View>
            <View style={{width:(WIDTH/3)-90,height:380,marginTop:25}}>
            {this.state.Answers[2].ThirdResponses.map((item,index) => {
              let stylevalid = !this.state.AnswersThirdQuestion ? null : this.state.IndexChooseAnswerThird == index ? (item.valid ? null : null) : (item.valid ? {color:'white'} : null);
              return(
                <TouchableOpacity key={index} style={{flexDirection:'row',height:40, left:30,marginBottom:15}} onPress={() => this.chooseAnswerThird(index,item.valid)}>
                  <Image source={!this.state.AnswersThirdQuestion ? require('../../images/Preguntas/option.png') : this.state.IndexChooseAnswerThird == index ? (item.valid ? require('../../images/Preguntas/option-correcto.png') : require('../../images/Preguntas/option-incorrecto.png')) : (item.valid ? require('../../images/Preguntas/option.png') : require('../../images/Preguntas/option.png')) } style={{width:40,height:40}}/>
                  <Text style={[{fontSize:22,top:3,fontFamily:'ColgateReady'},stylevalid]}>{item.answer}</Text>
                  {!this.state.AnswersThirdQuestion ? null : this.state.IndexChooseAnswerThird == index ? (item.valid ?
                    <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />
                    : <Image source={require('../../images/Preguntas/rectangulo-respuesta.png')} style={{position:'absolute',left:-12,width:(WIDTH/3)-90,height:40}} />) : (item.valid ? <Image source={require('../../images/Preguntas/respuesta-correcta.png')} style={{position:'absolute',zIndex:-2,left:-12,width:(WIDTH/3)-90,height:40}} /> : null)}
                </TouchableOpacity>
              )
            })}
            </View>
            </View>
          </View>
        </View>
        <View style={{position:'absolute',bottom:25,width:WIDTH,height:90,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{position:'relative',top:-10,padding:10}} onPress={() => this.props.navigation.navigate('QuestionSecondScreen',{countAnswers:this.countAnswers})}>
            <Image source={require('../../images/Preguntas/boton-continuar.png')} style={{top:10,left:-4,width:105,height:135,transform: [{ scale: 0.8 }]}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
