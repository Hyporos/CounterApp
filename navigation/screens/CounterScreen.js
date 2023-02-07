import React, { useContext, Button } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from "../../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MedalContext } from '../../contexts/MedalContext';
import { CounterContext } from '../../contexts/CounterContext';

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

const CounterScreen = () => {

    const { colors } = useTheme();
    const { setCountMedal1, setCountMedal2, setCountMedal3, setCountMedal4, setCountMedal5, setCountMedal6, tapsMedal1, tapsMedal2, setTapsMedal1, setTapsMedal2 } = useContext(MedalContext);
    const { counter, setCounter, tapsPerSecond, setTapsPerSecond } = useContext(CounterContext)

    const tapsFunction = async () => {

        setTapsPerSecond((c) => c + 1);
        setTimeout(() => setTapsPerSecond((c) => c - 1), 1000)

        // Persist count data
        try {
            await AsyncStorage.setItem('tapCount', JSON.stringify(counter + 1))
            await AsyncStorage.setItem('tapsMedalData1', JSON.stringify(tapsMedal1))
            await AsyncStorage.setItem('tapsMedalData2', JSON.stringify(tapsMedal2))
        } catch (e) {
            console.log(e);
        }

        if (counter == 0) setCountMedal1(1);
        if (counter == 99) setCountMedal2(1);
        if (counter == 999) setCountMedal3(1);
        if (counter == 9999) setCountMedal4(1);
        if (counter == 99999) setCountMedal5(1);
        if (counter == 999999) setCountMedal6(1);
        if (tapsPerSecond >= 10) setTapsMedal1(1);
        if (tapsPerSecond >= 15) setTapsMedal2(1);
    }

    // ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>

            <Text style={[styles.tpsCounter, { color: colors.basicSubText }]}>{tapsPerSecond} TPS</Text>

            <View elevation={7.5} style={[styles.buttonContainer, { backgroundColor: colors.background }]}>

                <TouchableOpacity style={[styles.buttonCounter, { backgroundColor: colors.primary, borderColor: colors.container }]}
                    onPress={() => {
                        setCounter(counter + 1);
                        tapsFunction();
                    }}>
                    <Text style={{ fontSize: 60 }}>{counter}</Text>
                </TouchableOpacity>

            </View>

            <View>
            <TouchableOpacity onPress={() => {AsyncStorage.clear();}}>
                <Text>Clear Data</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
}

export default CounterScreen;
