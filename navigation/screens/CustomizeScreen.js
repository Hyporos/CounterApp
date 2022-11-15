import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

import { styles } from "../../styles/Styles";
import { ThemeContext } from '../../contexts/ThemeContext';
import { useTheme } from '@react-navigation/native';

export default function CustomizeScreen({ navigation }) {

    const [themeHighlight, setThemeHighlight] = useState('#3d3d3d');
    const [effectsHighlight, setEffectsHighlight] = useState('#181818');

    const [displayThemes, setDisplayThemes] = useState('flex');
    const [displayEffects, setDisplayEffects] = useState('none');

    const { setTheme, theme } = useContext(ThemeContext);
    const { colors } = useTheme();

    return (
        <View style={{ backgroundColor: '#181818' }}>

            <View style={styles.tabHeaderContainer}>

                <TouchableOpacity
                    onPress={() => {
                        setThemeHighlight('#3d3d3d')
                        setEffectsHighlight('#181818')
                        setDisplayThemes('flex')
                        setDisplayEffects('none')
                    }}
                    style={[styles.tabHeader, { backgroundColor: themeHighlight, borderBottomStartRadius: 23 }]}
                    activeOpacity={.35}>
                    <Text style={styles.tabHeaderText}>Theme</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setEffectsHighlight('#3d3d3d')
                        setThemeHighlight('#181818')
                        setDisplayEffects('flex')
                        setDisplayThemes('none')
                    }}
                    style={[styles.tabHeader, { backgroundColor: effectsHighlight, borderBottomEndRadius: 23 }]}
                    activeOpacity={.35}>
                    <Text style={styles.tabHeaderText}>Effects</Text>
                </TouchableOpacity>

            </View>

            <View style={[styles.themeCardContainer, { display: displayThemes }]}>

                <Card style={[styles.themeCard, { borderColor: '#FFBF00' }]}>
                    <TouchableOpacity
                    onPress={() => setTheme('Amber')}>
                        <Text style={styles.themeCardText}>Amber</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#F96815' }]}>
                    <TouchableOpacity
                    onPress={() => setTheme('Tiger')}>
                        <Text style={styles.themeCardText}>Tiger</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#DC143C' }]}>
                <TouchableOpacity
                    onPress={() => setTheme('Crimson')}>
                        <Text style={styles.themeCardText}>Crimson</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#FE828C' }]}>
                <TouchableOpacity
                    onPress={() => setTheme('Blush')}>
                        <Text style={styles.themeCardText}>Blush</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#9966CC' }]}>
                <TouchableOpacity
                    onPress={() => setTheme('Amethyst')}>
                        <Text style={styles.themeCardText}>Amethyst</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#0080FF' }]}>
                <TouchableOpacity
                    onPress={() => setTheme('Azure')}>
                        <Text style={styles.themeCardText}>Azure</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { borderColor: '#32CD32' }]}>
                <TouchableOpacity
                    onPress={() => setTheme('Lime')}>
                        <Text style={styles.themeCardText}>Lime</Text>
                    </TouchableOpacity>
                </Card>

            </View>

            <View style={[styles.effectCardContainer, { display: displayEffects, paddingBottom: 300 }]}>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.effectCard, { borderColor: colors.border }]}>
                    <TouchableOpacity>
                        <Text style={styles.effectCardText}>WIP</Text>
                    </TouchableOpacity>
                </Card>

            </View>

        </View>
    );
}