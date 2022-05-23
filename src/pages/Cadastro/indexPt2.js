import React, {useState} from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         SafeAreaView,
         TextInput,
         TouchableOpacity,
         TouchableWithoutFeedback,
         Keyboard,
         ScrollView
        } from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';

import ModalSelector from 'react-native-modal-selector';

import DataDeNascimento from './dataDeNascimento';

import Statusbar from '../../StatusBar';



export default function CadastroDados() {


    let index = 0;

    


    const sexo = [
        { key: index++, section: true, label: 'Sexo' },
        { key: index++, label: 'Masculino' },
        { key: index++, label: 'Feminino' },
        { key: index++, label: 'Prefiro não dizer' },
        
 
 
 
    ];

    const altura = [
        { key: index++, section: true, label: 'Altura' },
        { key: index++, label: '1.40 m' },
        { key: index++, label: '1.41 m' },
        { key: index++, label: '1.42 m' },
        { key: index++, label: '1.43 m' },
        { key: index++, label: '1.44 m' },
        { key: index++, label: '1.45 m' },
        { key: index++, label: '1.46 m' },
        { key: index++, label: '1.47 m' },
        { key: index++, label: '1.48 m' },
        { key: index++, label: '1.49 m' },
        { key: index++, label: '1.50 m' },
        { key: index++, label: '1.51 m' },
        { key: index++, label: '1.52 m' },
        { key: index++, label: '1.53 m' },
        { key: index++, label: '1.54 m' },
        { key: index++, label: '1.55 m' },
        { key: index++, label: '1.56 m' },
        { key: index++, label: '1.57 m' },
        { key: index++, label: '1.58 m' },
        { key: index++, label: '1.59 m' },
        { key: index++, label: '1.60 m' },
        { key: index++, label: '1.61 m' },
        { key: index++, label: '1.62 m' },
        { key: index++, label: '1.63 m' },
        { key: index++, label: '1.64 m' },
        { key: index++, label: '1.65 m' },
        { key: index++, label: '1.66 m' },
        { key: index++, label: '1.67 m' },
        { key: index++, label: '1.68 m' },
        { key: index++, label: '1.69 m' },
        { key: index++, label: '1.70 m' },
        { key: index++, label: '1.70 m' },
        { key: index++, label: '1.71 m' },
        { key: index++, label: '1.72 m' },
        { key: index++, label: '1.73 m' },
        { key: index++, label: '1.74 m' },
        { key: index++, label: '1.75 m' },
        { key: index++, label: '1.76 m' },
        { key: index++, label: '1.77 m' },
        { key: index++, label: '1.78 m' },
        { key: index++, label: '1.79 m' },
        { key: index++, label: '1.80 m' },
        { key: index++, label: '1.81 m' },
        { key: index++, label: '1.82 m' },
        { key: index++, label: '1.83 m' },
        { key: index++, label: '1.84 m' },
        { key: index++, label: '1.85 m' },
        { key: index++, label: '1.86 m' },
        { key: index++, label: '1.87 m' },
        { key: index++, label: '1.88 m' },
        { key: index++, label: '1.89 m' },
        { key: index++, label: '1.90 m' },
        { key: index++, label: '1.90 m' },
        { key: index++, label: '1.91 m' },
        { key: index++, label: '1.92 m' },
        { key: index++, label: '1.93 m' },
        { key: index++, label: '1.94 m' },
        { key: index++, label: '1.95 m' },
        { key: index++, label: '1.96 m' },
        { key: index++, label: '1.97 m' },
        { key: index++, label: '1.98 m' },
        { key: index++, label: '1.99 m' },
        { key: index++, label: '2.00 m' },
        { key: index++, label: '2.01 m' },
        { key: index++, label: '2.02 m' },
        { key: index++, label: '2.03 m' },
        { key: index++, label: '2.04 m' },
        { key: index++, label: '2.05 m' },
        { key: index++, label: '2.06 m' },
        { key: index++, label: '2.07 m' },
        { key: index++, label: '2.08 m' },
        { key: index++, label: '2.09 m' },
        { key: index++, label: '2.10 m' },
    ];

    const peso = [
        { key: index++, section: true, label: 'Peso' },
        { key: index++, label: '45 Kg' },
        { key: index++, label: '46 Kg' },
        { key: index++, label: '47 Kg' },
        { key: index++, label: '48 Kg' },
        { key: index++, label: '49 Kg' },
        { key: index++, label: '50 Kg' },
        { key: index++, label: '51 Kg' },
        { key: index++, label: '52 Kg' },
        { key: index++, label: '53 Kg' },
        { key: index++, label: '54 Kg' },
        { key: index++, label: '55 Kg' },
        { key: index++, label: '56 Kg' },
        { key: index++, label: '57 Kg' },
        { key: index++, label: '58 Kg' },
        { key: index++, label: '59 Kg' },
        { key: index++, label: '60 Kg' },
        { key: index++, label: '61 Kg' },
        { key: index++, label: '62 Kg' },
        { key: index++, label: '63 Kg' },
        { key: index++, label: '64 Kg' },
        { key: index++, label: '65 Kg' },
        { key: index++, label: '66 Kg' },
        { key: index++, label: '67 Kg' },
        { key: index++, label: '68 Kg' },
        { key: index++, label: '69 Kg' },
        { key: index++, label: '70 Kg' },
        { key: index++, label: '71 Kg' },
        { key: index++, label: '72 Kg' },
        { key: index++, label: '73 Kg' },
        { key: index++, label: '74 Kg' },
        { key: index++, label: '75 Kg' },
        { key: index++, label: '76 Kg' },
        { key: index++, label: '77 Kg' },
        { key: index++, label: '78 Kg' },
        { key: index++, label: '79 Kg' },
        { key: index++, label: '80 Kg' },
        { key: index++, label: '81 Kg' },
        { key: index++, label: '82 Kg' },
        { key: index++, label: '83 Kg' },
        { key: index++, label: '84 Kg' },
        { key: index++, label: '85 Kg' },
        { key: index++, label: '86 Kg' },
        { key: index++, label: '87 Kg' },
        { key: index++, label: '88 Kg' },
        { key: index++, label: '89 Kg' },
        { key: index++, label: '90 Kg' },
        { key: index++, label: '91 Kg' },
        { key: index++, label: '92 Kg' },
        { key: index++, label: '93 Kg' },
        { key: index++, label: '94 Kg' },
        { key: index++, label: '95 Kg' },
        { key: index++, label: '96 Kg' },
        { key: index++, label: '97 Kg' },
        { key: index++, label: '98 Kg' },
        { key: index++, label: '99 Kg' },
        { key: index++, label: '100 Kg' },
        { key: index++, label: '101 Kg' },
        { key: index++, label: '102 Kg' },
        { key: index++, label: '103 Kg' },
        { key: index++, label: '104 Kg' },
        { key: index++, label: '105 Kg' },
        { key: index++, label: '106 Kg' },
        { key: index++, label: '107 Kg' },
        { key: index++, label: '108 Kg' },
        { key: index++, label: '109 Kg' },
        { key: index++, label: '110 Kg' },
        { key: index++, label: '111 Kg' },
        { key: index++, label: '112 Kg' },
        { key: index++, label: '113 Kg' },
        { key: index++, label: '114 Kg' },
        { key: index++, label: '115 Kg' },
        { key: index++, label: '116 Kg' },
        { key: index++, label: '117 Kg' },
        { key: index++, label: '118 Kg' },
        { key: index++, label: '119 Kg' },
        { key: index++, label: '120 Kg' },
        { key: index++, label: '121 Kg' },
        { key: index++, label: '122 Kg' },
        { key: index++, label: '123 Kg' },
        { key: index++, label: '124 Kg' },
        { key: index++, label: '125 Kg' },
        { key: index++, label: '126 Kg' },
        { key: index++, label: '127 Kg' },
        { key: index++, label: '128 Kg' },
        { key: index++, label: '129 Kg' },
        { key: index++, label: '130 Kg' },
    ];

    const objetivo = [
        { key: index++, section: true, label: 'Objetivo' },
        { key: index++, label: 'Perder Peso' },
        { key: index++, label: 'Hipertrofia' },
        { key: index++, label: 'Manter a Forma', accessibilityLabel: 'Tap here for cranberries' },
    ];
    
 

    return (

        
       
        <SafeAreaView style={styles.bar}>
            <ScrollView>
            <Statusbar/>
                  <View style={styles.container}>
                          
                          <Image style={styles.imagem} source={require('../../assets/NemesisV1.1.png')} />


                    <DataDeNascimento/>

                    <ModalSelector  
                        data={sexo}
                        initValue="Sexo"
                        onChange={(option)=>{}}
                        style={styles.modalSelector} 
                        selectStyle={styles.modalSelectStyle}
                        animationType='fade'
                        overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)',}}
                        
                        sectionTextStyle={{color: '#3AAE9C', fontSize: 25, alignContent:'center', alignItems:'center', alignSelf: 'center'}}
                        
                        selectedItemTextStyle={{color: '#5faac7'}}

                        

                        cancelText="Sair"
                        cancelTextStyle={{color: 'red', fontSize: 20, alignSelf:'center', paddingTop: 3}}
                        cancelStyle={{borderRadius: 10, height: 45, alignItems: 'center'}}
                        
                        optionContainerStyle={{borderRadius: 10, marginBottom: 15,  maxHeight: 650}}
                        optionStyle={{height: 50, alignContent:'center', alignItems:'center'}}
                        optionTextStyle={{color: '#525252', fontSize: 20, paddingTop: 5}}

                        backdropPressToClose="true"
                    />

                    <ModalSelector
                        data={altura}
                        initValue="Altura"
                        onChange={(option)=>{}}
                        style={styles.modalSelector} 
                        selectStyle={styles.modalSelectStyle}
                        animationType='fade'
                        overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)',}}
                        
                        sectionTextStyle={{color: '#3AAE9C', fontSize: 25, alignContent:'center', alignItems:'center', alignSelf: 'center'}}
                        
                        selectedItemTextStyle={{color: '#5faac7'}}

                       

                        cancelText="Sair"
                        cancelTextStyle={{color: 'red', fontSize: 20, alignSelf:'center', paddingTop: 3}}
                        cancelStyle={{borderRadius: 10, height: 45, alignItems: 'center',}}
                        
                        optionContainerStyle={{borderRadius: 10, marginBottom: 15, maxHeight: 650}}
                        optionStyle={{height: 50, alignContent:'center', alignItems:'center'}}
                        optionTextStyle={{color: '#525252', fontSize: 20, paddingTop: 5}}

                        backdropPressToClose="true"
                    />

                    <ModalSelector
                        data={peso}
                        initValue="Peso"
                        onChange={(option)=>{}}
                        style={styles.modalSelector} 
                        selectStyle={styles.modalSelectStyle}
                        animationType='fade'
                        overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)',}}
                        
                        sectionTextStyle={{color: '#3AAE9C', fontSize: 25, alignContent:'center', alignItems:'center', alignSelf: 'center'}}
                        
                        selectedItemTextStyle={{color: '#5faac7'}}

                        
                        
                        cancelText="Sair"
                        cancelTextStyle={{color: 'red', fontSize: 20, alignSelf:'center', paddingTop: 3}}
                        cancelStyle={{borderRadius: 10, height: 45, alignItems: 'center'}}
                        
                        optionContainerStyle={{borderRadius: 10, marginBottom: 15, maxHeight: 650}}
                        optionStyle={{height: 50, alignContent:'center', alignItems:'center'}}
                        optionTextStyle={{color: '#525252', fontSize: 20, paddingTop: 5}}

                        backdropPressToClose="true"
                    />

                    <ModalSelector
                        data={objetivo}
                        initValue="Objetivo"
                        onChange={(option)=>{}}
                        style={styles.modalSelector} 
                        selectStyle={styles.modalSelectStyle}
                        animationType='fade'
                        overlayStyle={{ flex: 1, padding: '5%', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.6)',}}
                        
                        sectionTextStyle={{color: '#3AAE9C', fontSize: 25, alignContent:'center', alignItems:'center', alignSelf: 'center'}}
                        
                        selectedItemTextStyle={{color: '#5faac7'}}

                        
                        
                        cancelText="Sair"
                        cancelTextStyle={{color: 'red', fontSize: 20, alignSelf:'center', paddingTop: 3}}
                        cancelStyle={{borderRadius: 10, height: 45, alignItems: 'center'}}
                        
                        optionContainerStyle={{borderRadius: 10, marginBottom: 15,  maxHeight: 650}}
                        optionStyle={{height: 50, alignContent:'center', alignItems:'center'}}
                        optionTextStyle={{color: '#525252', fontSize: 20, paddingTop: 5}}

                        backdropPressToClose="true"
                    />


                    <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>

                        <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Cadastrar</Text>

                    </TouchableOpacity>

                            
                  </View>
     <View>

        <LinearGradient
            start={{x: 0, y: 0 }}
            end={{x: 0, y: 1 }}
            locations={[0.1 , 0.9]}
            colors={["#EBEBEB", "#EBEBEB"]}
            style={{   
                height: '100%',       
                }}
        />
        </View>
        </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        marginTop: '-15%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '35%',
        backgroundColor: "#EBEBEB",
},

    imagem:{
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 50,
},

    btnCadastro:{
        width: '40%',
        height: 50,
        backgroundColor: '#3AAE9C',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 25,
},

    bar:{
    flex: 1,
    backgroundColor: '#EBEBEB',
    color: '#EBEBEB'
},

    modalSelector:{
    width: '80%',           
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
                width: 6,
                height: 6,
                },
    shadowOpacity: 0.20,
    borderColor: '#C6C6C6',
    marginBottom: 15,


},

    modalSelectStyle:{
        height: 50, 
        borderRadius: 10,  
        alignContent: 'center',
        alignItems: 'flex-start', 
        paddingTop: '4%',   
},
    btnData:{
        width: 330,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 25,
        shadowOffset: {
            width: 6,
            height: 6,
            },
shadowOpacity: 0.20,
borderColor: '#C6C6C6',
marginBottom: 15,
borderWidth: 1,

}
});