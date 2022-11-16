import React, { useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from "../../styles/Styles";

import { CountContext } from '../../contexts/CountContext';
import { MedalContext } from '../../contexts/MedalContext';
import { BadgeContext } from '../../contexts/BadgeContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

const CounterScreen = () => {

    const { colors } = useTheme();
    const { setCounter, counter } = useContext(CountContext);
    const { badgeCount, setBadgeCount } = useContext(BadgeContext);
    const { setCountMedal1, setCountMedal2, setCountMedal3, setCountMedal4, setCountMedal5, setCountMedal6, achieved, setAchieved } = useContext(MedalContext);

    useEffect(() => {

        if (counter != 1 && counter != 100 && counter != 1000 && counter != 10000 && counter != 100000 && counter != 1000000) setAchieved(false);

        if (counter == 1 && achieved == false) {
            setCountMedal1(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }
        if (counter == 100 && achieved == false) {
            setCountMedal2(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }
        if (counter == 1000 && achieved == false) {
            setCountMedal3(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }
        if (counter == 10000 && achieved == false) {
            setCountMedal4(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }
        if (counter == 100000 && achieved == false) {
            setCountMedal5(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }
        if (counter == 1000000 && achieved == false) {
            setCountMedal6(1);
            setBadgeCount(badgeCount + 1);
            setAchieved(true);
        }

    })

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => setCounter(counter + 1)}
                    style={[styles.counterButton, { backgroundColor: colors.primary }]}>
                    <Text style={{ fontSize: 60 }}>{counter}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CounterScreen;
