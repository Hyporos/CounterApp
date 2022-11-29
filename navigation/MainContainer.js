import React, { useState, useMemo, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from 'expo-status-bar';
import {
    Amber, Mustard, Cinnabar, Autumn, Inchworm, Mint, Azure, Cerulean, Wisteria, Rose,
    AmberSpruce, MustardSpruce, CinnabarSpruce, AutumnSpruce, InchwormSpruce, MintSpruce, AzureSpruce, CeruleanSpruce, WisteriaSpruce, RoseSpruce,
    AmberMauve, MustardMauve, CinnabarMauve, AutumnMauve, InchwormMauve, MintMauve, AzureMauve, CeruleanMauve, WisteriaMauve, RoseMauve,
    AmberWhiteGrey, MustardWhiteGrey, CinnabarWhiteGrey, AutumnWhiteGrey, InchwormWhiteGrey, MintWhiteGrey, AzureWhiteGrey, CeruleanWhiteGrey, WisteriaWhiteGrey, RoseWhiteGrey,
} from "../themes/Themes"

import CounterScreen from './screens/CounterScreen';
import CustomizeScreen from './screens/CustomizeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MedalsScreen from './screens/MedalsScreen';

import { ThemeContext } from '../contexts/ThemeContext';
import { MedalContext } from '../contexts/MedalContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

export default function MainContainer() {

    const counterName = 'Counter';
    const customizeName = 'Customize';
    const settingsName = 'Settings';
    const medalsName = "Medals";

    const Tab = createBottomTabNavigator();

    const [theme, setTheme] = useState('Amber');

    const [badgeCount, setBadgeCount] = useState(0);

    const [countMedal1, setCountMedal1] = useState(0.25);
    const [countMedal2, setCountMedal2] = useState(0.25);
    const [countMedal3, setCountMedal3] = useState(0.25);
    const [countMedal4, setCountMedal4] = useState(0.25);
    const [countMedal5, setCountMedal5] = useState(0.25);
    const [countMedal6, setCountMedal6] = useState(0.25);
    const [tapsMedal1, setTapsMedal1] = useState(0.25);
    const [tapsMedal2, setTapsMedal2] = useState(0.25);
    const [customizeMedal1, setCustomizeMedal1] = useState(0.25);
    const [customizeMedal2, setCustomizeMedal2] = useState(0.25);
    const [secretMedal1, setSecretMedal1] = useState(0.25);
    const [secretMedal2, setSecretMedal2] = useState(0.25);
    const [secretMedal3, setSecretMedal3] = useState(0.25);
    const [customizeAchieved1, setCustomizeAchieved1] = useState(false);

    const medalData = {
        badgeCount, setBadgeCount,
        countMedal1, setCountMedal1,
        countMedal2, setCountMedal2,
        countMedal3, setCountMedal3,
        countMedal4, setCountMedal4,
        countMedal5, setCountMedal5,
        countMedal6, setCountMedal6,
        tapsMedal1, setTapsMedal1,
        tapsMedal2, setTapsMedal2,
        customizeMedal1, setCustomizeMedal1,
        customizeMedal2, setCustomizeMedal2,
        secretMedal1, setSecretMedal1,
        secretMedal2, setSecretMedal2,
        secretMedal3, setSecretMedal3,
        customizeAchieved1, setCustomizeAchieved1
    };

    const containerTheme = useMemo(() => {
        switch (theme) {
            case 'Amber':
                return Amber;
            case 'Mustard':
                return Mustard;
            case 'Cinnabar':
                return Cinnabar;
            case 'Autumn':
                return Autumn;
            case 'Inchworm':
                return Inchworm;
            case 'Mint':
                return Mint;
            case 'Azure':
                return Azure;
            case 'Cerulean':
                return Cerulean;
            case 'Wisteria':
                return Wisteria;
            case 'Rose':
                return Rose;
            case 'AmberSpruce':
                return AmberSpruce;
            case 'MustardSpruce':
                return MustardSpruce;
            case 'CinnabarSpruce':
                return CinnabarSpruce;
            case 'AutumnSpruce':
                return AutumnSpruce;
            case 'InchwormSpruce':
                return InchwormSpruce;
            case 'MintSpruce':
                return MintSpruce;
            case 'AzureSpruce':
                return AzureSpruce;
            case 'CeruleanSpruce':
                return CeruleanSpruce;
            case 'WisteriaSpruce':
                return WisteriaSpruce;
            case 'RoseSpruce':
                return RoseSpruce;
            case 'AmberMauve':
                return AmberMauve;
            case 'MustardMauve':
                return MustardMauve;
            case 'CinnabarMauve':
                return CinnabarMauve;
            case 'AutumnMauve':
                return AutumnMauve;
            case 'InchwormMauve':
                return InchwormMauve;
            case 'MintMauve':
                return MintMauve;
            case 'AzureMauve':
                return AzureMauve;
            case 'CeruleanMauve':
                return CeruleanMauve;
            case 'WisteriaMauve':
                return WisteriaMauve;
            case 'RoseMauve':
                return RoseMauve;
                case 'AmberWhiteGrey':
                    return AmberWhiteGrey;
                case 'MustardWhiteGrey':
                    return MustardWhiteGrey;
                case 'CinnabarWhiteGrey':
                    return CinnabarWhiteGrey;
                case 'AutumnWhiteGrey':
                    return AutumnWhiteGrey;
                case 'InchwormWhiteGrey':
                    return InchwormWhiteGrey;
                case 'MintWhiteGrey':
                    return MintWhiteGrey;
                case 'AzureWhiteGrey':
                    return AzureWhiteGrey;
                case 'CeruleanWhiteGrey':
                    return CeruleanWhiteGrey;
                case 'WisteriaWhiteGrey':
                    return WisteriaWhiteGrey;
                case 'RoseWhiteGrey':
                    return RoseWhiteGrey;
            default: console.log("Invalid theme (" + theme + ")");
        }
    }, [theme])

    NavigationBar.setBackgroundColorAsync(containerTheme.colors.card);

    useEffect(() => {
        if (countMedal1 == 1) setBadgeCount(badgeCount + 1);
    }, [countMedal1, countMedal2, countMedal3, countMedal4, countMedal5, countMedal6, tapsMedal1, tapsMedal2, customizeMedal1, customizeMedal2, secretMedal1])

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (

        <ThemeContext.Provider value={{ theme, setTheme }}>
            <MedalContext.Provider value={medalData}>
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

                                        return <Ionicons name={iconName} size={30} color={color} />

                                    },
                                    tabBarInactiveTintColor: '#aaaaaa',
                                    tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
                                    tabBarStyle: { padding: 10, height: 70, borderTopWidth: 1 },
                                    tabBarShowLabel: false,
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
            </MedalContext.Provider>
        </ThemeContext.Provider>

    );
}