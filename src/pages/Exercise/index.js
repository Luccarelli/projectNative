import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Animated} from 'react-native';

export default function Exercise() {
    
    return (
        <View style={styles.container}>
            <ScrollView>

            <Text style={styles.text}>Exercícios (treino)</Text>

            <View style={styles.box}></View>

            <View style={styles.box}></View>

            <View style={styles.box}></View>

            <View style={styles.box}></View>

            <View style={styles.box}></View>


        </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        
        backgroundColor: 'white',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingBottom: 10,
    },
    box:{
        height: 300,
        backgroundColor: '#DDD',
        margin: 7,
        borderRadius: 5,
    }
});