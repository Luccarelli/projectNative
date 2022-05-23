import React from 'react';
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function Splash() {
    return (
       
     <View>

        <LinearGradient
                  start={{x: 0, y: 0 }}
                  end={{x: 0, y: 1 }}
                  locations={[0.1 , 0.9]}
                  colors={["#FFFFFF", "#C5DEC0"]}
                  style={{   
                    height: '100%',       
                }}
                />
        </View>
       
    );
}

