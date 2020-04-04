import React,{ createRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, FlatList, Animated,ScrollView } from 'react-native';
import styles from '../styles/styles'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class Submenu extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    const { _path_, currentScreen } = this.props;
    let _styles_ = {borderBottomColor: 'red', borderBottomWidth: 4};
    return(
      <View style={{position:'absolute',bottom:0,width:WIDTH,height:140,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
        <View style={{top:40,flexDirection:'row',width:WIDTH-250, justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "Multibeneficios" ? _styles_ : null]}>
                {currentScreen == "Multibeneficios"
                ? <Image source={require('../images/Productos/Multibeneficios/Submenu/Multibeneficios.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
                : null}
                <Image
                source={currentScreen == "Multibeneficios" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-1.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-1.png') }
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "Blanqueamiento" ? _styles_ : null]}>
              {currentScreen == "Blanqueamiento"
              ? <Image source={require('../images/Productos/Multibeneficios/Submenu/Blanqueamiento.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
              : null}
                <Image
                source={currentScreen == "Blanqueamiento" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-2.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-1.png')}
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "SaludNatural" ? _styles_ : null]}>
              {currentScreen == "SaludNatural"
              ? <Image source={require('../images/Productos/Multibeneficios/Submenu/SaludNatural.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
              : null}
                <Image
                source={currentScreen == "SaludNatural" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-3.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-3.png')}
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "CuidadoFamiliar" ? _styles_ : null]}>
                {currentScreen == "CuidadoFamiliar"
                ? <Image source={require('../images/Productos/Multibeneficios/Submenu/CuidadoFamiliar.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
                : null}
                <Image
                source={currentScreen == "CuidadoFamiliar" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-4.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-4.png')}
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "Sensibilidad" ? _styles_ : null]}>
                {currentScreen == "Sensibilidad"
                ? <Image source={require('../images/Productos/Multibeneficios/Submenu/Sensibilidad.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
                : null}
                <Image
                source={currentScreen == "Sensibilidad" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-5.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-5.png')}
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
          <TouchableOpacity style={[{width:140,height:60},currentScreen == "Cuidadochicos" ? _styles_ : null]}>
                {currentScreen == "Cuidadochicos"
                ? <Image source={require('../images/Productos/Multibeneficios/Submenu/Cuidadochicos.png')} style={{position:'absolute',left:10,top:-130,width:120,height:120,transform: [{ scale: 1 }]}} />
                : null}
                <Image
                source={currentScreen == "Cuidadochicos" ? require('../images/Productos/Multibeneficios/Submenu/Boton-seleccionado-6.png') : require('../images/Productos/Multibeneficios/Submenu/Boton-6.png')}
                style={{right:20,marginTop:0,width:180,height:50,transform: [{ scale: 0.6 }],marginBottom:25}}
                 />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
