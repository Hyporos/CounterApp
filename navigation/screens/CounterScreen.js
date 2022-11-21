import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { styles } from "../../styles/Styles";

import { MedalContext } from '../../contexts/MedalContext';

// ―――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――― //

const CounterScreen = () => {

    const { colors } = useTheme();
    const { setCountMedal1, setCountMedal2, setCountMedal3, setCountMedal4, setCountMedal5, setCountMedal6, setTapsMedal1, setTapsMedal2 } = useContext(MedalContext);

    const [counter, setCounter] = useState(0);
    const [tapsPerSecond, setTapsPerSecond] = useState(0);

    const tapsFunction = () => {

        setTapsPerSecond((c) => c + 1);
        setTimeout(() => setTapsPerSecond((c) => c - 1), 1000)

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

        </View>
    );
}

export default CounterScreen;
