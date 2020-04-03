import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../styles/styles'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default class ButtonSlide extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    };

  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render(){
    const { screenPrev, screenNext } = this.props;
    return (
        <View style={{position:'absolute',bottom:25,width:(WIDTH-50),height:55, flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity style={{position:'relative',top:-10,padding:10}} onPress={() => this.props.navigation.navigate(screenPrev)}>
            <Image source={require('../images/screen-four/prev-button.png')} style={{top:-40,left:-4,width:105,height:115,transform: [{ scale: 0.8 }]}} />
          </TouchableOpacity>
          <TouchableOpacity style={{position:'relative',top:-10,padding:10}} onPress={() => this.props.navigation.navigate(screenNext)}>
            <Image source={require('../images/screen-four/next-button.png')} style={{top:-40,left:-4,width:105,height:115,transform: [{ scale: 0.8 }]}} />
          </TouchableOpacity>
        </View>
    );
  }

}
