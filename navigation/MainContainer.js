import React, { useState, useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from 'expo-status-bar';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

import CounterScreen from './screens/CounterScreen';
import CustomizeScreen from './screens/CustomizeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MedalsScreen from './screens/MedalsScreen';
import { styles } from '../styles/Styles';

import { Amber, Tiger, Crimson, Blush, Amethyst, Azure, Lime } from "../styles/Themes"
import { ThemeContext } from '../contexts/ThemeContext';
import { CountContext } from '../contexts/CountContext';
import { MedalContext } from '../contexts/MedalContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

const counterName = 'Counter';
const customizeName = 'Customize';
const settingsName = 'Settings';
const medalsName = "Medals";

const Tab = createBottomTabNavigator();
NavigationBar.setBackgroundColorAsync("#212121");

// DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

export default function MainContainer() {

    const [theme, setTheme] = useState('Amber');
    const [counter, setCounter] = useState(0);

    const [medalVisible, setMedalVisible] = useState(false);
    const [medalTitle, setMedalTitle] = useState('Placeholder');
    const [medalSubtitle, setMedalSubtitle] = useState('Placeholder');

    const containerTheme = useMemo(() => {
        switch (theme) {
            case 'Amber':
                return Amber;
            case 'Tiger':
                return Tiger;
            case 'Crimson':
                return Crimson;
            case 'Blush':
                return Blush;
            case 'Amethyst':
                return Amethyst;
            case 'Azure':
                return Azure;
            case 'Lime':
                return Lime;
            default: console.log("Invalid theme (" + theme + ")");
        }
    }, [theme])

    setTimeout(() => {
        setMedalVisible(false);
    }, 5000)

    return (


        <ThemeContext.Provider value={{ theme, setTheme }}>
            <MedalContext.Provider value={{ medalVisible, setMedalVisible, medalTitle, setMedalTitle, medalSubtitle, setMedalSubtitle }}>
                <CountContext.Provider value={{ counter, setCounter }}>
                    <NavigationContainer theme={containerTheme}>

                        <StatusBar style="auto" />



                        <Tab.Navigator
                            initialRouteName={counterName}
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    let rn = route.name;

                                    if (rn === counterName) {
                                        iconName = focused ? 'radio-button-on-outline' : 'radio-button-off-outline';
                                    } else if (rn === customizeName) {
                                        iconName = focused ? 'color-palette' : 'color-palette-outline';
                                    } else if (rn === medalsName) {
                                        iconName = focused ? 'medal' : 'medal-outline';
                                    } else if (rn === settingsName) {
                                        iconName = focused ? 'settings' : 'settings-outline';
                                    }

                                    return <Ionicons name={iconName} size={size} color={color} />

                                },
                                tabBarInactiveTintColor: '#aaaaaa',
                                tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                                tabBarStyle: { padding: 10, height: 70, borderTopWidth: 1 },

                                headerStyle: { borderBottomWidth: 1 },
                                headerTitleAlign: 'center',
                                headerTitleStyle: { fontSize: 20 },
                            })}>



                            <Tab.Screen name={counterName} component={CounterScreen} />
                            <Tab.Screen name={customizeName} component={CustomizeScreen} />
                            <Tab.Screen name={medalsName} component={MedalsScreen} />
                            <Tab.Screen name={settingsName} component={SettingsScreen} />

                        </Tab.Navigator>


                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={medalVisible}
                            onRequestClose={() => {
                                setMedalVisible(!medalVisible);
                            }}
                        >
                            <View style={[styles.medalCardContainer, {marginTop: '16%'}]}>
                                <View style={styles.medalCard}>
                                    <Ionicons name='radio-button-on-outline' size={50} color={'white'} />
                                    <View style={styles.medalTextContainer}>
                                        <Text style={styles.medalCardTitle}>{medalTitle}</Text>
                                        <Text style={styles.medalCardSubTitle}>{medalSubtitle}</Text>
                                    </View>
                                </View>
                            </View>
                        </Modal>


                    </NavigationContainer>
                </CountContext.Provider>
            </MedalContext.Provider>
        </ThemeContext.Provider>


    );
}