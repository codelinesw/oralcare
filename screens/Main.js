import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles'

export default class Main extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    };

  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../images/Colgate-Logo.png')} style={styles.imgIndex} />
        <TouchableOpacity style={{top:-85,padding:10}} onPress={() => this.props.navigation.navigate('Secondscreen')}><Image source={require('../images/touch.png')} style={styles.imgtextIndex} /></TouchableOpacity>
      </View>
    );
  }

}
