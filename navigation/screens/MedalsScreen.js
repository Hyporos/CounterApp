import React, { useEffect, useState, useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CountContext } from '../../contexts/CountContext';
import { MedalContext } from '../../contexts/MedalContext';
import { styles } from "../../styles/Styles";


export default function MedalsScreen({ navigation }) {

    const { colors } = useTheme();
    const { counter, setCounter } = useContext(CountContext);
    const { setMedalVisible, setMedalTitle, setMedalSubtitle } = useContext(MedalContext);
    const [achieved, setAchieved] = useState(false);
    const [customizeAchieved1, setCustomizeAchieved1] = useState(false);

    const [countMedal1, setCountMedal1] = useState(0.25);
    const [countMedal2, setCountMedal2] = useState(0.25);
    const [countMedal3, setCountMedal3] = useState(0.25);
    const [countMedal4, setCountMedal4] = useState(0.25);
    const [countMedal5, setCountMedal5] = useState(0.25);
    const [countMedal6, setCountMedal6] = useState(0.25);
    const [countMedal7, setCountMedal7] = useState(0.25);
    const [customizeMedal1, setCustomizeMedal1] = useState(0.25);
    const [customizeMedal2, setCustomizeMedal2] = useState(0.25);
    const [secretMedal, setSecretMedal] = useState(0.25); // 

    useEffect(() => {

        if (counter != 1 && 100 && 1000 && 10000 && 100000 && 1000000 && 10000000) {
            setAchieved(false);
            console.log(achieved);
        }
        
        if (counter == 1 && achieved == false) {
            setCountMedal1(1);
            setMedalTitle('Getting Started')
            setMedalSubtitle('Tap the button for the first time')
            setMedalVisible(true);
            setAchieved(true);
            console.log(achieved);
        }

        if (counter == 100 && achieved == false) {
            setCountMedal2(1);
            setMedalTitle('Placeholder | Tap 2')
            setMedalSubtitle('Tap the button 100 times')
            setMedalVisible(true);
            setAchieved(true);
            console.log(achieved);
        }

        if (colors.primary != '#FFBF00' && customizeAchieved1 == false) {
            setCustomizeMedal1(1);
            setMedalTitle('Pablo Picasso')
            setMedalSubtitle('Change the theme for the first time')
            setMedalVisible(true);
            setCustomizeAchieved1(true);
        }
    })

    return (
        <ScrollView style={{ backgroundColor: '#181818' }}>

            <View style={styles.medalCardContainer}>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal1 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Getting Started</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal2 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 2</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 100 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal3 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 3</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 1000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal4 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 4</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 10000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal5 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 5</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 100000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal6 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 6</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 1000000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: countMedal7 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Tap 7</Text>
                        <Text style={styles.medalCardSubTitle}>Tap the button 10000000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: customizeMedal1 }]}>
                    <Ionicons name='color-palette' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Pablo Picasso</Text>
                        <Text style={styles.medalCardSubTitle}>Change the theme for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: customizeMedal2 }]}>
                    <Ionicons name='color-wand' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Customize 2</Text>
                        <Text style={styles.medalCardSubTitle}>Select an effect for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { borderColor: colors.border, opacity: secretMedal }]}>
                    <Ionicons name='help' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={styles.medalCardTitle}>Placeholder | Secret 1</Text>
                        <Text style={styles.medalCardSubTitle}>Maybe it's in the source code?</Text>
                    </View>
                </View>


            </View>

        </ScrollView>
    );
}