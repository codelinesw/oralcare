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
      chooseResponseOne:false,
      chooseResponseTwo:false,
      chooseResponseThree:false,
      Answers:[
        {
          "FirstResponses":[
            {

              "answer":"Una vez al anio",
              "valid":false
            },
            {
              "answer":"Cada seis meses",
              "valid":false
            },
            {
              "answer": "Cada dos o tres meses",
              "valid":true
            }
          ]
        },
        {
          "SecondResponses":[
            {

              "answer":"Cepilla, crema, enjuague e hilo dental",
              "valid":true
            },
            {
              "answer":"Cepillo y crema dental",
              "valid":false
            },
            {
              "answer": "Cepillo dental",
              "valid":false
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

  render(){
    return (
      <View style={[styles.container,{backgroundColor:'#fbfbfb'}]}>
        <Header _path_="jum" />
        <Image source={require('../../image/Preguntas/confeti.png')} style={{width:WIDTH,height:HEIGHT}} />
      </View>
    );
  }

}
