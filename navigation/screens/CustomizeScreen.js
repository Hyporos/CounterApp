import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from "../../styles/Styles";
import { useTheme } from '@react-navigation/native';

import { ThemeContext } from '../../contexts/ThemeContext';
import { MedalContext } from '../../contexts/MedalContext';
import { BadgeContext } from '../../contexts/BadgeContext';

// IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS // IMPORTS 

export default function CustomizeScreen({ navigation }) {

    const { colors } = useTheme();

    const [themeHighlight, setThemeHighlight] = useState(colors.container);
    const [effectsHighlight, setEffectsHighlight] = useState(colors.background);
    const [displayThemes, setDisplayThemes] = useState('flex');
    const [displayEffects, setDisplayEffects] = useState('none');

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const { setTheme } = useContext(ThemeContext);
    const { setBadgeCount, badgeCount } = useContext(BadgeContext);
    const { customizeAchieved1, setCustomizeAchieved1, customizeAchieved2, setCustomizeAchieved2, setCustomizeMedal1, setCustomizeMedal2 } = useContext(MedalContext);

    useEffect(() => {

        //if (colors.container != themeHighlight) {
        //    setThemeHighlight(colors.container);
        //}

        if (colors.primary != '#FFBF00' && customizeAchieved1 == false) {
            setCustomizeMedal1(1);
            setBadgeCount(badgeCount + 1)
            setCustomizeAchieved1(true);
        }
        if (colors.primary == '#aaaaaa' && customizeAchieved2 == false) {
            setCustomizeMedal2(1);
            setBadgeCount(badgeCount + 1)
            setCustomizeAchieved2(true);
        }

    })

    const accentSelectionAmber = useMemo(() => {
        if (colors.background == '#161619') return 'AmberSpruce';
        else if (colors.background == '#1a1716') return 'AmberSepia';
        else if (colors.background == '#17131c') return 'AmberMauve';
        else if (colors.background == '#ffffff') return 'AmberWhiteGrey';
        else if (colors.background == '#fffef2') return 'AmberCream';
        else return 'Amber';
    }, [colors.background])

    const accentSelectionMustard = useMemo(() => {
        if (colors.background == '#161619') return 'MustardSpruce';
        else if (colors.background == '#1a1716') return 'MustardSepia';
        else if (colors.background == '#17131c') return 'MustardMauve';
        else if (colors.background == '#ffffff') return 'MustardWhiteGrey';
        else if (colors.background == '#fffef2') return 'MustardCream';
        else return 'Mustard';
    }, [colors.background])

    const accentSelectionCinnabar = useMemo(() => {
        if (colors.background == '#161619') return 'CinnabarSpruce';
        else if (colors.background == '#1a1716') return 'CinnabarSepia';
        else if (colors.background == '#17131c') return 'CinnabarMauve';
        else if (colors.background == '#ffffff') return 'CinnabarWhiteGrey';
        else if (colors.background == '#fffef2') return 'CinnabarCream';
        else return 'Cinnabar';
    }, [colors.background])

    const accentSelectionAutumn = useMemo(() => {
        if (colors.background == '#161619') return 'AutumnSpruce';
        else if (colors.background == '#1a1716') return 'AutumnSepia';
        else if (colors.background == '#17131c') return 'AutumnMauve';
        else if (colors.background == '#ffffff') return 'AutumnWhiteGrey';
        else if (colors.background == '#fffef2') return 'AutumnCream';
        else return 'Autumn';
    }, [colors.background])

    const accentSelectionInchworm = useMemo(() => {
        if (colors.background == '#161619') return 'InchwormSpruce';
        else if (colors.background == '#1a1716') return 'InchwormSepia';
        else if (colors.background == '#17131c') return 'InchwormMauve';
        else if (colors.background == '#ffffff') return 'InchwormWhiteGrey';
        else if (colors.background == '#fffef2') return 'InchwormCream';
        else return 'Inchworm';
    }, [colors.background])

    const accentSelectionMint = useMemo(() => {
        if (colors.background == '#161619') return 'MintSpruce';
        else if (colors.background == '#1a1716') return 'MintSepia';
        else if (colors.background == '#17131c') return 'MintMauve';
        else if (colors.background == '#ffffff') return 'MintWhiteGrey';
        else if (colors.background == '#fffef2') return 'MintCream';
        else return 'Mint';
    }, [colors.background])

    const accentSelectionAzure = useMemo(() => {
        if (colors.background == '#161619') return 'AzureSpruce';
        else if (colors.background == '#1a1716') return 'AzureSepia';
        else if (colors.background == '#17131c') return 'AzureMauve';
        else if (colors.background == '#ffffff') return 'AzureWhiteGrey';
        else if (colors.background == '#fffef2') return 'AzureCream';
        else return 'Azure';
    }, [colors.background])

    const accentSelectionCerulean = useMemo(() => {
        if (colors.background == '#161619') return 'CeruleanSpruce';
        else if (colors.background == '#1a1716') return 'CeruleanSepia';
        else if (colors.background == '#17131c') return 'CeruleanMauve';
        else if (colors.background == '#ffffff') return 'CeruleanWhiteGrey';
        else if (colors.background == '#fffef2') return 'CeruleanCream';
        else return 'Cerulean';
    }, [colors.background])

    const accentSelectionWisteria = useMemo(() => {
        if (colors.background == '#161619') return 'WisteriaSpruce';
        else if (colors.background == '#1a1716') return 'WisteriaSepia';
        else if (colors.background == '#17131c') return 'WisteriaMauve';
        else if (colors.background == '#ffffff') return 'WisteriaWhiteGrey';
        else if (colors.background == '#fffef2') return 'WisteriaCream';
        else return 'Wisteria';
    }, [colors.background])

    const accentSelectionRose = useMemo(() => {
        if (colors.background == '#161619') return 'RoseSpruce';
        else if (colors.background == '#1a1716') return 'RoseSepia';
        else if (colors.background == '#17131c') return 'RoseMauve';
        else if (colors.background == '#ffffff') return 'RoseWhiteGrey';
        else if (colors.background == '#fffef2') return 'RoseCream';
        else return 'Rose';
    }, [colors.background])

    const baseSelectionGrey = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'Amber';
        else if (colors.primary == '#FFD95D') return 'Mustard';
        else if (colors.primary == '#F24333') return 'Cinnabar';
        else if (colors.primary == '#E67B35') return 'Autumn';
        else if (colors.primary == '#A1E44D') return 'Inchworm';
        else if (colors.primary == '#71ECB3') return 'Mint';
        else if (colors.primary == '#2A92FA') return 'Azure';
        else if (colors.primary == '#89BBFE') return 'Cerulean';
        else if (colors.primary == '#BC96E6') return 'Wisteria';
        else if (colors.primary == '#F991CC') return 'Rose';
    }, [colors.primary])

    const baseSelectionSpruce = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'AmberSpruce';
        else if (colors.primary == '#FFD95D') return 'MustardSpruce';
        else if (colors.primary == '#F24333') return 'CinnabarSpruce';
        else if (colors.primary == '#E67B35') return 'AutumnSpruce';
        else if (colors.primary == '#A1E44D') return 'InchwormSpruce';
        else if (colors.primary == '#71ECB3') return 'MintSpruce';
        else if (colors.primary == '#2A92FA') return 'AzureSpruce';
        else if (colors.primary == '#89BBFE') return 'CeruleanSpruce';
        else if (colors.primary == '#BC96E6') return 'WisteriaSpruce';
        else if (colors.primary == '#F991CC') return 'RoseSpruce';
    }, [colors.primary])

    const baseSelectionSepia = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'AmberSepia';
        else if (colors.primary == '#FFD95D') return 'MustardSepia';
        else if (colors.primary == '#F24333') return 'CinnabarSepia';
        else if (colors.primary == '#E67B35') return 'AutumnSepia';
        else if (colors.primary == '#A1E44D') return 'InchwormSepia';
        else if (colors.primary == '#71ECB3') return 'MintSepia';
        else if (colors.primary == '#2A92FA') return 'AzureSepia';
        else if (colors.primary == '#89BBFE') return 'CeruleanSepia';
        else if (colors.primary == '#BC96E6') return 'WisteriaSepia';
        else if (colors.primary == '#F991CC') return 'RoseSepia';
    }, [colors.primary])

    const baseSelectionMauve = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'AmberMauve';
        else if (colors.primary == '#FFD95D') return 'MustardMauve';
        else if (colors.primary == '#F24333') return 'CinnabarMauve';
        else if (colors.primary == '#E67B35') return 'AutumnMauve';
        else if (colors.primary == '#A1E44D') return 'InchwormMauve';
        else if (colors.primary == '#71ECB3') return 'MintMauve';
        else if (colors.primary == '#2A92FA') return 'AzureMauve';
        else if (colors.primary == '#89BBFE') return 'CeruleanMauve';
        else if (colors.primary == '#BC96E6') return 'WisteriaMauve';
        else if (colors.primary == '#F991CC') return 'RoseMauve';
    }, [colors.primary])

    const baseSelectionWhiteGrey = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'AmberWhiteGrey';
        else if (colors.primary == '#FFD95D') return 'MustardWhiteGrey';
        else if (colors.primary == '#F24333') return 'CinnabarWhiteGrey';
        else if (colors.primary == '#E67B35') return 'AutumnWhiteGrey';
        else if (colors.primary == '#A1E44D') return 'InchwormWhiteGrey';
        else if (colors.primary == '#71ECB3') return 'MintWhiteGrey';
        else if (colors.primary == '#2A92FA') return 'AzureWhiteGrey';
        else if (colors.primary == '#89BBFE') return 'CeruleanWhiteGrey';
        else if (colors.primary == '#BC96E6') return 'WisteriaWhiteGrey';
        else if (colors.primary == '#F991CC') return 'RoseWhiteGrey';
    }, [colors.primary])

    const baseSelectionCream = useMemo(() => {
        if (colors.primary == '#FFBF00') return 'AmberCream';
        else if (colors.primary == '#FFD95D') return 'MustardCream';
        else if (colors.primary == '#F24333') return 'CinnabarCream';
        else if (colors.primary == '#E67B35') return 'AutumnCream';
        else if (colors.primary == '#A1E44D') return 'InchwormCream';
        else if (colors.primary == '#71ECB3') return 'MintCream';
        else if (colors.primary == '#2A92FA') return 'AzureCream';
        else if (colors.primary == '#89BBFE') return 'CeruleanCream';
        else if (colors.primary == '#BC96E6') return 'WisteriaCream';
        else if (colors.primary == '#F991CC') return 'RoseCream';
    }, [colors.primary])

    // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS // DECLARATIONS 

    return (
        <View style={{ backgroundColor: colors.background, paddingBottom: 200 }}>
            <View style={[styles.tabHeaderContainer, { borderColor: colors.container, backgroundColor: colors.background }]}>

                <TouchableOpacity
                    onPress={() => {
                        setThemeHighlight(colors.container)
                        setEffectsHighlight(colors.background)
                        setDisplayThemes('flex')
                        setDisplayEffects('none')
                    }}
                    style={[styles.tabHeader, { backgroundColor: themeHighlight, borderBottomStartRadius: 23 }]} activeOpacity={.35}>
                    <Text style={[styles.tabHeaderText, {color: colors.basicText}]}>Theme</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setEffectsHighlight(colors.container)
                        setThemeHighlight(colors.background)
                        setDisplayEffects('flex')
                        setDisplayThemes('none')
                    }}
                    style={[styles.tabHeader, { backgroundColor: effectsHighlight, borderBottomEndRadius: 23 }]} activeOpacity={.35}>
                    <Text style={[styles.tabHeaderText, {color: colors.basicText}]}>Effects</Text>
                </TouchableOpacity>

            </View>

            <Text style={[styles.themeHeaderText, {color: colors.basicText}]}>Accent</Text>

            <View style={[styles.themeDivider, { borderColor: colors.border }]}></View>

            <View style={[styles.themeCardContainer, { backgroundColor: colors.background, display: displayThemes }]}>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder, marginTop: 0 }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionAmber)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/amberIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Amber</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder, marginTop: 0 }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionMustard)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/mustardIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Mustard</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionCinnabar)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/cinnabarIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Cinnabar</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionAutumn)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/autumnIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Autumn</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionInchworm)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/inchwormIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Inchworm</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionMint)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/mintIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Mint</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionAzure)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/azureIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Azure</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionCerulean)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/ceruleanIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Cerulean</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionWisteria)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/wisteriaIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Wisteria</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 5, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(accentSelectionRose)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/roseIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Rose</Text>
                    </TouchableOpacity>
                </Card>

            </View>

            <Text style={[styles.themeHeaderText, {color: colors.basicText}]}>Base</Text>

            <View style={[styles.themeDivider, { borderColor: colors.border }]}></View>

            <View style={[styles.themeCardContainer, { backgroundColor: colors.background, display: displayThemes }]}>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder, marginTop: 0 }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionGrey)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/darkGreyIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Dark / Grey</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder, marginTop: 0 }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionSpruce)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/darkSpruceIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Dark / Spruce</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionSepia)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/darkSepiaIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Dark / Sepia</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionMauve)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/darkMauveIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>Dark / Mauve</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionWhiteGrey)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/lightGreyIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>White / Grey</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={[styles.themeCard, { elevation: 3, backgroundColor: colors.container, borderColor: colors.basicBorder }]}>
                    <TouchableOpacity style={styles.themeCardTouchable}
                        onPress={() => setTheme(baseSelectionCream)}>
                        <Image style={{ width: 27, height: 27 }} source={require('../../assets/theme-icons/lightGreyIcon.png')}></Image>
                        <Text style={[styles.themeCardText, {color: colors.basicText}]}>White / Cream</Text>
                    </TouchableOpacity>
                </Card>

            </View>
        </View>
    );
}