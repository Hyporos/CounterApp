import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CountContext } from '../../contexts/CountContext';
import { styles } from "../../styles/Styles";

const CounterScreen = () => {

    const { colors } = useTheme();
    const { setCounter, counter } = useContext(CountContext);

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    onPress={() => setCounter(counter + 1)}
                    style={[styles.counterButton, {backgroundColor: colors.primary}]}>
                    <Text style={styles.counterText}>{counter}</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
}

export default CounterScreen;
