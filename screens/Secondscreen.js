import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import styles from '../styles/styles'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Secondscreen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      progressStatus: 0
    };
    this.anim = new Animated.Value(0);
  }

  componentDidMount(){
    this.onAnimate();
  }

  onAnimate = () =>{
    this.anim.addListener(({value})=> {
        this.setState({progressStatus: parseInt(value,10)});
    });

    Animated.timing(this.anim, {
      toValue: 100,
      duration: 10000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      this.setState({progressStatus:0});
      Animated.timing(this.anim).stop();
      this.props.navigation.navigate('Thirdscreen')
    },10180);
  }

  componentWillUnmount(){
    Animated.timing(this.anim).stop();
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../images/Img.png')}  style={{width:WIDTH,height:HEIGHT}} />
        <View style={styles.containerbar}>
          <Animated.View style={[styles.barprogress,{width: this.state.progressStatus+"%"}]}/>
        </View>
      </View>
    );
  }

}
