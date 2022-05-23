import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Diet() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dieta</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 25,
        fontWeight: 'bold'
    }
});