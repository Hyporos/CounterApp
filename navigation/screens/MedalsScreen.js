import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from "../../styles/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MedalContext } from '../../contexts/MedalContext';

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

export default function MedalsScreen({ navigation }) {

    const { colors } = useTheme();
    const { countMedal1, countMedal2, countMedal3, countMedal4, countMedal5, countMedal6, customizeMedal1, customizeMedal2, secretMedal1, setSecretMedal1, secretMedal2, secretMedal3, tapsMedal1, tapsMedal2 } = useContext(MedalContext);

    const [secretCount, setSecretCount] = useState(1);

    const secretButton = () => {
        if (secretCount >= 10) setSecretMedal1(1);
        persistMedals();
    }

    const persistMedals = async () => {

        // Persist medal data
        try {
            await AsyncStorage.setItem('countMedalData1', JSON.stringify(countMedal1))
            await AsyncStorage.setItem('countMedalData2', JSON.stringify(countMedal2))
            await AsyncStorage.setItem('countMedalData3', JSON.stringify(countMedal3))
            await AsyncStorage.setItem('countMedalData4', JSON.stringify(countMedal4))
            await AsyncStorage.setItem('countMedalData5', JSON.stringify(countMedal5))
            await AsyncStorage.setItem('countMedalData6', JSON.stringify(countMedal6))
            await AsyncStorage.setItem('secretMedalData1', JSON.stringify(secretMedal1))
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        persistMedals();
    }, [countMedal1, countMedal2, countMedal3, countMedal4, countMedal5, countMedal6, tapsMedal1, tapsMedal2, customizeMedal1, customizeMedal2, secretMedal1])

    // ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

    return (
        <ScrollView style={{ backgroundColor: colors.background }}>

            <View style={[styles.medalCardContainer, { backgroundColor: colors.background }]}>

                <Text style={[styles.medalHeaderText, { color: colors.basicText }]}>Endurance</Text>

                <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 10 }]}></View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal1 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Getting Started</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal2 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Warming up</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button 100 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal3 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Casual Tapper</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button 1000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal4 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Serious Tapper</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button 10000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal5 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Carpal Tunnel</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button 100000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal6 }]}>
                    <TouchableOpacity onPress={() => {
                        setSecretCount(secretCount + 1);
                        secretButton();
                    }}>
                        <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    </TouchableOpacity>
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Congratulations, get a life!</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap the button 1000000 times</Text>
                    </View>
                </View>

                <Text style={[styles.medalHeaderText, { color: colors.basicText, marginTop: 10 }]}>Speed</Text>

                <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 10 }]}></View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: tapsMedal1 }]}>
                    <Ionicons name='time' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Placeholder | TPS 1</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Reach 10 taps per second</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: tapsMedal2 }]}>
                    <Ionicons name='time' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Placeholder | TPS 2</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Reach 15 taps per second</Text>
                    </View>
                </View>

                <Text style={[styles.medalHeaderText, { color: colors.basicText, marginTop: 10 }]}>Customization</Text>

                <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 10 }]}></View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: customizeMedal1 }]}>
                    <Ionicons name='color-palette' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Pablo Picasso</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Change the theme accent for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: customizeMedal2 }]}>
                    <Ionicons name='color-wand' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Placeholder | Customize 2</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Select an effect for the first time</Text>
                    </View>
                </View>

                <Text style={[styles.medalHeaderText, { color: colors.basicText, marginTop: 10 }]}>Secrets</Text>

                <View style={[styles.themeDivider, { borderColor: colors.border, marginBottom: 10 }]}></View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: secretMedal1 }]}>
                    <Ionicons name='help' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Wrong button, dude</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Tap a certain button 10 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: secretMedal2 }]}>
                    <Ionicons name='help' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>What could this order be?</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>2 7 9 1 3 6 4 8 10 5</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: secretMedal3 }]}>
                    <Ionicons name='help' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, { color: colors.basicText }]}>Ethical Hacker</Text>
                        <Text style={[styles.medalCardSubTitle, { color: colors.basicSubText }]}>Maybe it's in the source code?</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}