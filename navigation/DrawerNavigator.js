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
import QuestionFirstScreen from '../screens/CuantoSabesDeCuidadoOral/QuestionFirstScreen'
import QuestionSecondScreen from '../screens/CuantoSabesDeCuidadoOral/QuestionSecondScreen'
import ResultQuestion from '../screens/CuantoSabesDeCuidadoOral/ResultQuestion'
import MultibeneficiosOne from '../screens/Productos/Multibeneficios/MultibeneficiosOne'
import MenuMultiBeneficios from "../screens/Productos/Multibeneficios/MenuMultiBeneficios"
import Total12 from "../screens/Productos/Multibeneficios/Total12"
import TotalProfessional from "../screens/Productos/Multibeneficios/TotalProfessional"
import EnciasSaludables from "../screens/Productos/Multibeneficios/EnciasSaludables"
import AlientoSaludable from "../screens/Productos/Multibeneficios/AlientoSaludable"
import AvancedTotal12 from "../screens/Productos/Multibeneficios/AvancedTotal12"
import UltraSoft from "../screens/Productos/Multibeneficios/UltraSoft"
import BlanqueamientoOne from "../screens/Productos/Blanqueamiento/BlanqueamientoOne"
import MenuBlanqueamiento from "../screens/Productos/Blanqueamiento/MenuBlanqueamiento"
import LiminuosWhite from "../screens/Productos/Blanqueamiento/LiminuosWhite"
import DientesBlancos from "../screens/Productos/Blanqueamiento/DientesBlancos"
import MaxWhite from "../screens/Productos/Blanqueamiento/MaxWhite"
import Advanced_ from "../screens/Productos/Blanqueamiento/Advanced_"
import CepilloLiminuosWhite from "../screens/Productos/Blanqueamiento/CepilloLiminuosWhite"
import EnjuagueLiminuosWhite from "../screens/Productos/Blanqueamiento/EnjuagueLiminuosWhite"
import SaludNaturalOne from "../screens/Productos/SaludNatural/SaludNaturalOne"
import MenuSaludNatural from "../screens/Productos/SaludNatural/MenuSaludNatural"
import DefensaReforzada from "../screens/Productos/SaludNatural/DefensaReforzada"
import CocoyJengibre from "../screens/Productos/SaludNatural/CocoyJengibre"
import CarbonActivado from "../screens/Productos/SaludNatural/CarbonActivado"
import Bamboo from "../screens/Productos/SaludNatural/Bamboo"
import CuidadoFamiliar from "../screens/Productos/CuidadoFamiliar/CuidadoFamiliar"
import MaximaProteccion from "../screens/Productos/CuidadoFamiliar/MaximaProteccion"
import MenucuidadoFamiliar from "../screens/Productos/CuidadoFamiliar/MenucuidadoFamiliar"
import MentaOriginal from "../screens/Productos/CuidadoFamiliar/MentaOriginal"
import XtraBlancura from "../screens/Productos/CuidadoFamiliar/XtraBlancura"
import XtraFrescura from "../screens/Productos/CuidadoFamiliar/XtraFrescura"
import TripleAccion_ from "../screens/Productos/CuidadoFamiliar/TripleAccion_"
import SoftMint from "../screens/Productos/CuidadoFamiliar/SoftMint"
import MenuSensibilidad from "../screens/Productos/Sensibilidad/MenuSensibilidad"
import SensitiveProAlivio from "../screens/Productos/Sensibilidad/SensitiveProAlivio"
import RealWhite from "../screens/Productos/Sensibilidad/RealWhite"
import ReparacionCompleta from "../screens/Productos/Sensibilidad/ReparacionCompleta"
import ProAlivio from "../screens/Productos/Sensibilidad/ProAlivio"
import BlanqueamientoSensitive from "../screens/Productos/Sensibilidad/BlanqueamientoSensitive"
import ProAlivioInmediato from "../screens/Productos/Sensibilidad/ProAlivioInmediato"
import Cepillos from "../screens/Productos/Sensibilidad/Cepillos"
import EnjuagueSensitiveProAlivio from "../screens/Productos/Sensibilidad/EnjuagueSensitiveProAlivio"
import Cuidadodelosmaschicos from "../screens/Productos/Cuidadodelosmaschicos/Cuidadodelosmaschicos"
import Menucuidadodeloasmaschicos from "../screens/Productos/Cuidadodelosmaschicos/Menucuidadodeloasmaschicos"
import BarbieMinions from "../screens/Productos/Cuidadodelosmaschicos/BarbieMinions"
import LigadelaJusticia from "../screens/Productos/Cuidadodelosmaschicos/LigadelaJusticia"
import Cepilloschicos from "../screens/Productos/Cuidadodelosmaschicos/Cepilloschicos"
import CepillosPack from "../screens/Productos/Cuidadodelosmaschicos/CepillosPack"


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
    },
    QuestionFirstScreen: {
      screen: QuestionFirstScreen
    },
    QuestionSecondScreen: {
      screen: QuestionSecondScreen
    },
    ResultQuestion: {
      screen: ResultQuestion
    },
    MultibeneficiosOne: {
      screen: MultibeneficiosOne
    },
    MenuMultiBeneficios: {
      screen: MenuMultiBeneficios
    },
    Total12: {
      screen:Total12
    },
    TotalProfessional: {
      screen:TotalProfessional
    },
    EnciasSaludables: {
      screen:EnciasSaludables
    },
    AlientoSaludable: {
      screen:AlientoSaludable
    },
    AvancedTotal12:{
      screen: AvancedTotal12
    },
    UltraSoft: {
      screen: UltraSoft
    },
    BlanqueamientoOne: {
      screen: BlanqueamientoOne
    },
    MenuBlanqueamiento: {
      screen: MenuBlanqueamiento
    },
    LiminuosWhite: {
      screen: LiminuosWhite
    },
    DientesBlancos: {
      screen: DientesBlancos
    },
    MaxWhite: {
      screen: MaxWhite
    },
    Advanced_: {
      screen:Advanced_
    },
    CepilloLiminuosWhite: {
      screen: CepilloLiminuosWhite
    },
    EnjuagueLiminuosWhite: {
      screen:EnjuagueLiminuosWhite
    },
    SaludNaturalOne: {
      screen: SaludNaturalOne
    },
    MenuSaludNatural: {
      screen: MenuSaludNatural
    },
    DefensaReforzada: {
      screen: DefensaReforzada
    },
    CocoyJengibre: {
      screen: CocoyJengibre
    },
    CarbonActivado: {
      screen: CarbonActivado
    },
    Bamboo: {
      screen: Bamboo
    },
    CuidadoFamiliar: {
      screen: CuidadoFamiliar
    },
    MenucuidadoFamiliar: {
      screen: MenucuidadoFamiliar
    },
    MaximaProteccion: {
      screen: MaximaProteccion
    },
    MentaOriginal: {
      screen: MentaOriginal
    },
    XtraBlancura: {
      screen: XtraBlancura
    },
    XtraFrescura: {
      screen: XtraFrescura
    },
    TripleAccion_: {
      screen: TripleAccion_
    },
    SoftMint: {
      screen: SoftMint
    },
    SensitiveProAlivio: {
      screen: SensitiveProAlivio
    },
    MenuSensibilidad: {
      screen: MenuSensibilidad
    },
    RealWhite: {
      screen: RealWhite
    },
    ReparacionCompleta: {
      screen: ReparacionCompleta
    },
    ProAlivio: {
      screen: ProAlivio
    },
    BlanqueamientoSensitive: {
      screen: BlanqueamientoSensitive
    },
    ProAlivioInmediato: {
      screen: ProAlivioInmediato
    },
    Cepillos: {
      screen: Cepillos
    },
    EnjuagueSensitiveProAlivio: {
      screen: EnjuagueSensitiveProAlivio
    },
    Cuidadodelosmaschicos: {
      screen: Cuidadodelosmaschicos
    },
    Menucuidadodeloasmaschicos: {
      screen: Menucuidadodeloasmaschicos
    },
    BarbieMinions: {
      screen: BarbieMinions
    },
    LigadelaJusticia: {
      screen: LigadelaJusticia
    },
    Cepilloschicos: {
      screen: Cepilloschicos
    },
    CepillosPack: {
      screen: CepillosPack
    }

  },
);

//const AppContainer = createAppContainer(RootStack);
const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;
