import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Image } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';


export default function Bar() {

    return(
    <SafeAreaView>
            <View style={styles.header}>
                    <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: 27, height: 40 }}
                    resizeMode="contain"
                     />
                     <Image
                    source={require('../../assets/user.png')}
                    style={{ width: 35, height: 35 }}
                    resizeMode="contain"
                     />
            </View>

            <View style={styles.row}>
            <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#45C4B0", "#C5DEC0"]}
                  style={{ height: 1,              
                }}
                />
            </View>


        </SafeAreaView>
    );
}
    
    const styles = StyleSheet.create({
        header: {
            backgroundColor: 'transparent',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 5,
            
        }
    });