/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import styles from './styles/styles.js'
import AppContainer from './navigation/DrawerNavigator'


export default class App extends React.Component{
  constructor(props){
      super(props);

      this.state = {

      };
  }

  render(){
    return(
        <AppContainer/>
      );
  }
}
