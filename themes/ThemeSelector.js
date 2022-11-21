import { useMemo } from 'react';
const { colors } = useTheme();

const accentSelectionAmber = useMemo(() => {
    if (colors.background == '#161619') return 'AmberSpruce';
    else if (colors.background == '#17131c') return 'AmberMauve';
    else if (colors.background == '#ffffff') return 'AmberWhiteGrey';
    else return 'Amber';
}, [colors.background])

const accentSelectionMustard = useMemo(() => {
    if (colors.background == '#161619') return 'MustardSpruce';
    else if (colors.background == '#17131c') return 'MustardMauve';
    else if (colors.background == '#ffffff') return 'MustardWhiteGrey';
    else return 'Mustard';
}, [colors.background])

const accentSelectionCinnabar = useMemo(() => {
    if (colors.background == '#161619') return 'CinnabarSpruce';
    else if (colors.background == '#17131c') return 'CinnabarMauve';
    else if (colors.background == '#ffffff') return 'CinnabarWhiteGrey';
    else return 'Cinnabar';
}, [colors.background])

const accentSelectionAutumn = useMemo(() => {
    if (colors.background == '#161619') return 'AutumnSpruce';
    else if (colors.background == '#17131c') return 'AutumnMauve';
    else if (colors.background == '#ffffff') return 'AutumnWhiteGrey';
    else return 'Autumn';
}, [colors.background])

const accentSelectionInchworm = useMemo(() => {
    if (colors.background == '#161619') return 'InchwormSpruce';
    else if (colors.background == '#17131c') return 'InchwormMauve';
    else if (colors.background == '#ffffff') return 'InchwormWhiteGrey';
    else return 'Inchworm';
}, [colors.background])

const accentSelectionMint = useMemo(() => {
    if (colors.background == '#161619') return 'MintSpruce';
    else if (colors.background == '#17131c') return 'MintMauve';
    else if (colors.background == '#ffffff') return 'MintWhiteGrey';
    else return 'Mint';
}, [colors.background])

const accentSelectionAzure = useMemo(() => {
    if (colors.background == '#161619') return 'AzureSpruce';
    else if (colors.background == '#17131c') return 'AzureMauve';
    else if (colors.background == '#ffffff') return 'AzureWhiteGrey';
    else return 'Azure';
}, [colors.background])

const accentSelectionCerulean = useMemo(() => {
    if (colors.background == '#161619') return 'CeruleanSpruce';
    else if (colors.background == '#17131c') return 'CeruleanMauve';
    else if (colors.background == '#ffffff') return 'CeruleanWhiteGrey';
    else return 'Cerulean';
}, [colors.background])

const accentSelectionWisteria = useMemo(() => {
    if (colors.background == '#161619') return 'WisteriaSpruce';
    else if (colors.background == '#17131c') return 'WisteriaMauve';
    else if (colors.background == '#ffffff') return 'WisteriaWhiteGrey';
    else return 'Wisteria';
}, [colors.background])

const accentSelectionRose = useMemo(() => {
    if (colors.background == '#161619') return 'RoseSpruce';
    else if (colors.background == '#17131c') return 'RoseMauve';
    else if (colors.background == '#ffffff') return 'RoseWhiteGrey';
    else return 'Rose';
}, [colors.background])

export {
    accentSelectionAmber, accentSelectionMustard, accentSelectionCinnabar, accentSelectionAutumn, accentSelectionInchworm, accentSelectionMint, accentSelectionAzure, accentSelectionCerulean, accentSelectionWisteria, accentSelectionRose
}