import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';

import Diet from '../Diet';
import Exercise from '../Exercise';
import Notification from '../Notification';
import Configuration from '../Configuration/configuration';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "white",
            tabBarShowLabel: false,
            tabBarItemStyle:{
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
            },

              tabBarIcon: ({ color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Exercise':
                        iconName = 'weight-lifter';
                        break;
                    case 'Diet':
                        iconName = 'food-apple-outline';
                        break;
                    case 'Notification':
                        iconName = 'bell-outline';
                        break;
                    case 'Configuration':
                        iconName = 'cogs';
                        break;
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarBackground: () => (
              <View>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#45C4B0", "#C5DEC0"]}
                  style={{ height: 100
                }}
                />
              </View>
            ),
        })}
        >
            <Tab.Screen name="Exercise" component={Exercise} />

            <Tab.Screen name="Diet" component={Diet} />

            <Tab.Screen name="Notification" component={Notification} />

            <Tab.Screen name="Configuration" component={Configuration} /> 

            
        </Tab.Navigator>
        </NavigationContainer>
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