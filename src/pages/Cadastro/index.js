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
         ScrollView,
        } from 'react-native';


import { LinearGradient } from 'expo-linear-gradient';
import Statusbar from '../../StatusBar';



export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    

    const cadastro = () => {
        alert(nome);
        alert(email);
        alert(senha);
        alert(confirmarSenha);
        //Fazer chamada para o back-end para cadastro.
    }
 

    return (
        
        <ScrollView>
            <Statusbar/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
        <SafeAreaView style={styles.bar}>
                  <View style={styles.container}>
                          
                          <Image style={styles.imagem} source={require('../../assets/NemesisV1.1.png')} />
          
                            <TextInput placeholder='Nome Completo' placeholderTextColor="#b3b3b3" style={styles.textInput} onChangeText={text=>setNome(text)}/>
                            <TextInput placeholder='Email' placeholderTextColor="#b3b3b3" style={styles.textInput} onChangeText={text=>setEmail(text)}/>
                            <TextInput secureTextEntry={true} placeholder='Senha' placeholderTextColor="#b3b3b3" style={styles.textInput} onChangeText={text=>setSenha(text)}/>
                            <TextInput secureTextEntry={true} placeholder='Confirme Sua Senha' placeholderTextColor="#b3b3b3" style={styles.textInput} onChangeText={text=>setConfirmarSenha(text)}/>
          

                            <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>

                                <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Cadastrar</Text>

                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnContaExistente}>

                                <Text style={{color: '#1F67A9', textAlign: 'center', fontStyle: 'italic'}}>Já tem uma conta? Faça Login</Text>

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

        </SafeAreaView>
        </TouchableWithoutFeedback>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container:{
        marginTop: '-15%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '48%',
        backgroundColor: "#EBEBEB",
    },

    imagem:{
        width: 200,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 50,
    },

    textInput:{
        width: '80%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 6,
            height: 6,
          },
          shadowOpacity: 0.20,
          borderColor: '#C6C6C6',
          borderWidth: 1
    },
    btnCadastro:{
        width: '40%',
        height: 50,
        backgroundColor: '#3AAE9C',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
    },
    btnContaExistente:{
        width: '50%',
        height: 40,
        borderRadius: 10,
        marginTop: 20,
    },
    bar:{
        flex: 1,
        backgroundColor: '#EBEBEB',
        color: '#EBEBEB'
    }
});