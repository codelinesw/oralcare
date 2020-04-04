import { StyleSheet, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#e30000',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },

  imgIndex: {
    width:660,
    height:630
  },

  imgtextIndex:{
    width:550,
    height:40,
    transform: [{ scale: 1 }]
  },

  containerbar: {
    position:'absolute',
    bottom:0,
    width:WIDTH,
    height:13,
    backgroundColor:'transparent',
  },
  barprogress:{
    position:'absolute',
    left:0,
    height:13,
    backgroundColor:'#ffffff'
  },

  panel_top: {
    position:'absolute',
    top:0,
    width:WIDTH,
    height:160,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  panel_bottom: {
    position:'absolute',
    bottom:0,
    width:WIDTH,
    height:160,
    flexDirection:'row',
    justifyContent:'space-between',
  },

  //styles para el contenedor del carrusel
  carouselcontainer: {
    position:'relative',
    width:WIDTH-10,
    height:350,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  content_: {
    position:'relative',
    width:WIDTH-50,
    height:350,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  carousel: {
    position:'relative',
    width:WIDTH-50,
    height:350,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  buttonButtonCarousel: {
    padding:5,
    height:210,

  },
  buttonButtonCarousel_:{
    padding:5,
    width:380,
    height:320,
  },
  BoxButton: {
    width:230,
    height:230,
    borderRadius:5,
  },

  containerTitle: {
    position:'absolute',
    top:10,
    width:WIDTH-80,
    padding:10,
    left:60,
    right:60,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  title_:{
    fontSize:40,
    fontWeight:'bold'
  },
  secondTitle: {
    fontSize:25,
  }


});

export default styles;
