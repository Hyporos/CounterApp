import React, { useEffect, useContext, useState } from 'react';
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
    const { setCountMedal1, setCountMedal2, setCountMedal3, setCountMedal4, setCountMedal5, setCountMedal6, achieved, setAchieved, setTapsMedal1, setTapsMedal2 } = useContext(MedalContext);

    const [tapsPerSecond, setTapsPerSecond] = useState(0);

    const [tapsAchieved1, setTapsAchieved1] = useState(false);
    const [tapsAchieved2, setTapsAchieved2] = useState(false);

    const tapsCalculator = () => {

        setTapsPerSecond((c) => c + 1);
        setTimeout(() => setTapsPerSecond((c) => c - 1), 1000)

        if(tapsPerSecond >= 10 && tapsAchieved1 == false) setTapsMedal1(1), setBadgeCount(badgeCount + 1), setTapsAchieved1(true);
        if(tapsPerSecond >= 15 && tapsAchieved2 == false) setTapsMedal2(1), setBadgeCount(badgeCount + 1), setTapsAchieved2(true);

    };

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

        console.log('useeffect');

    })

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.tpsText, { color: colors.basicSubText }]}>{tapsPerSecond} TPS</Text>
            <View elevation={7.5} style={{ backgroundColor: colors.background, borderRadius: 500, marginTop: '47%' }}>
                <TouchableOpacity
                    onPress={() => { setCounter(counter + 1); tapsCalculator(); }}
                    style={[styles.counterButton, { backgroundColor: colors.primary, borderColor: colors.container, borderWidth: 0 }]}>
                    <Text style={{ fontSize: 60 }}>{counter}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CounterScreen;
