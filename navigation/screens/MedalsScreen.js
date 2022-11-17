import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import { styles } from "../../styles/Styles";

import { MedalContext } from '../../contexts/MedalContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

export default function MedalsScreen({ navigation }) {

    const { colors } = useTheme();
    const { countMedal1, countMedal2, countMedal3, countMedal4, countMedal5, countMedal6, customizeMedal1, customizeMedal2, secretMedal } = useContext(MedalContext);

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (
        <ScrollView style={{ backgroundColor: colors.background }}>
            <View style={[styles.medalCardContainer, {backgroundColor: colors.background}]}>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal1 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Getting Started</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal2 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Tap 2</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button 100 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal3 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View style={styles.medalTextContainer}>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Tap 3</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button 1000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal4 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Tap 4</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button 10000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal5 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Tap 5</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button 100000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: countMedal6 }]}>
                    <Ionicons name='radio-button-on-outline' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Tap 6</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Tap the button 1000000 times</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: customizeMedal1 }]}>
                    <Ionicons name='color-palette' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Pablo Picasso</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Change the theme accent for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: customizeMedal2 }]}>
                    <Ionicons name='color-wand' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Customize 2</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Select an effect for the first time</Text>
                    </View>
                </View>

                <View style={[styles.medalCard, { backgroundColor: colors.container, borderColor: colors.border, opacity: secretMedal }]}>
                    <Ionicons name='help' size={50} color={colors.primary} />
                    <View>
                        <Text style={[styles.medalCardTitle, {color: colors.basicText}]}>Placeholder | Secret 1</Text>
                        <Text style={[styles.medalCardSubTitle, {color: colors.basicSubText}]}>Maybe it's in the source code?</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}