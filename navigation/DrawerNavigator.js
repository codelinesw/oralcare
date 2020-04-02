import React from 'react';
import {  Platform , Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//screens
import Main from '../screens/Main'
import Secondscreen from '../screens/Secondscreen'
import Thirdscreen from '../screens/Thirdscreen'
import Fourscreen from '../screens/Fourscreen'
import Menu_ from '../screens/Mejoratusonrisa/Menu_'
import CepillaTusDientes from '../screens/Mejoratusonrisa/CepillaTusDientes'
import EnjuagueBucal from '../screens/Mejoratusonrisa/EnjuagueBucal'
import VisitaAlOdontologo from '../screens/Mejoratusonrisa/VisitaAlOdontologo'
import CambiaTuCepillo from '../screens/Mejoratusonrisa/CambiaTuCepillo'
import ConsejosParaUnaBocaSana from '../screens/Mejoratusonrisa/ConsejosParaUnaBocaSana'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Secondscreen,
    },
    Secondscreen: {
      screen: Secondscreen
    },

  },

);


const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen:Main,
    },
    Secondscreen: {
      screen:Secondscreen,
    },
    Thirdscreen: {
      screen: Thirdscreen
    },
    Fourscreen: {
      screen: Fourscreen
    },
    Menu_: {
      screen:Menu_
    },
    CepillaTusDientes: {
      screen:CepillaTusDientes
    },
    EnjuagueBucal:{
      screen:EnjuagueBucal
    },
    VisitaAlOdontologo: {
      screen: VisitaAlOdontologo
    },
    CambiaTuCepillo: {
      screen: CambiaTuCepillo
    },
    ConsejosParaUnaBocaSana: {
      screen: ConsejosParaUnaBocaSana
    }
  },
);

//const AppContainer = createAppContainer(RootStack);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
