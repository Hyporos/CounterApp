import React, { useState, useMemo } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from 'expo-status-bar';
import { Amber, Tiger, Crimson, Blush, Amethyst, Azure, Lime } from "../styles/Themes"

import CounterScreen from './screens/CounterScreen';
import CustomizeScreen from './screens/CustomizeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MedalsScreen from './screens/MedalsScreen';

import { ThemeContext } from '../contexts/ThemeContext';
import { CountContext } from '../contexts/CountContext';
import { BadgeContext } from '../contexts/BadgeContext';
import { MedalContext } from '../contexts/MedalContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

export default function MainContainer() {

    NavigationBar.setBackgroundColorAsync("#212121");

    const counterName = 'Counter';
    const customizeName = 'Customize';
    const settingsName = 'Settings';
    const medalsName = "Medals";

    const Tab = createBottomTabNavigator();

    const [theme, setTheme] = useState('Amber');
    const [counter, setCounter] = useState(0);
    const [badgeCount, setBadgeCount] = useState(0);

    const [countMedal1, setCountMedal1] = useState(0.25);
    const [countMedal2, setCountMedal2] = useState(0.25);
    const [countMedal3, setCountMedal3] = useState(0.25);
    const [countMedal4, setCountMedal4] = useState(0.25);
    const [countMedal5, setCountMedal5] = useState(0.25);
    const [countMedal6, setCountMedal6] = useState(0.25);
    const [customizeMedal1, setCustomizeMedal1] = useState(0.25);
    const [customizeMedal2, setCustomizeMedal2] = useState(0.25);
    const [secretMedal, setSecretMedal] = useState(0.25)
    const [achieved, setAchieved] = useState(false);
    const [customizeAchieved1, setCustomizeAchieved1] = useState(false);

    const medalData = {
        countMedal1, setCountMedal1,
        countMedal2, setCountMedal2,
        countMedal3, setCountMedal3,
        countMedal4, setCountMedal4,
        countMedal5, setCountMedal5,
        countMedal6, setCountMedal6,
        customizeMedal1, setCustomizeMedal1,
        customizeMedal2, setCustomizeMedal2,
        secretMedal, setSecretMedal,
        achieved, setAchieved,
        customizeAchieved1, setCustomizeAchieved1
    };

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

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (

        <ThemeContext.Provider value={{ theme, setTheme }}>
            <MedalContext.Provider value={medalData}>
                <BadgeContext.Provider value={{ badgeCount, setBadgeCount }}>
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
                                <Tab.Screen name={medalsName} component={MedalsScreen}
                                    options={{ tabBarBadge: badgeCount ? badgeCount : undefined }}
                                    listeners={{
                                        tabPress: e => {
                                            setBadgeCount(0);
                                        }
                                    }}
                                />
                                <Tab.Screen name={settingsName} component={SettingsScreen} />

                            </Tab.Navigator>

                        </NavigationContainer>
                    </CountContext.Provider>
                </BadgeContext.Provider>
            </MedalContext.Provider>
        </ThemeContext.Provider>

    );
}