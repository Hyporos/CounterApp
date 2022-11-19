import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#181818',

        alignItems: 'center',
    },

    // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER 

    buttonCounter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        borderRadius: 500,
    },

    tpsCounter: {
        fontSize: 20,
        paddingTop: 15
    },

    buttonContainer: {
        borderRadius: 500,
        marginTop: '47%',
    },

    // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB // TAB 

    tabHeader: {
        paddingHorizontal: 63.75,
        paddingVertical: 10,
        paddingBottom: 16
    },

    tabHeaderText: {
        color: '#ffffff',
        fontSize: 20,
    },

    tabHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
        height: 50,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        borderColor: '#3d3d3d',
        borderEndWidth: 2,
        borderStartWidth: 2,
        borderBottomWidth: 2,
    },

    // THEMES // THEMES // THEMES // THEMES // THEMES // THEMES // THEMES // THEMES // THEMES // THEMES 

    themeCardContainer: {
        backgroundColor: '#181818',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 7.5,
    },

    themeCard: {
        backgroundColor: '#3D3D3D',
        borderColor: '#aaaaaa',
        width: '47.5%',
        paddingVertical: 10,
        marginTop: 10,
    },

    themeCardText: {
        color: '#ffffff',
        fontSize: 19,
        textAlign: 'center',
        paddingLeft: '6.5%',
    },

    themeCardTouchable: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: '6.5%',
    },

    themeHeaderText: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        paddingTop: 10
    },

    themeDivider: {
        borderColor: 'ffffff',
        borderBottomWidth: 1,
        marginBottom: 23,
        paddingTop: 13
    },

    // EFFECTS // EFFECTS // EFFECTS // EFFECTS // EFFECTS // EFFECTS // EFFECTS // EFFECTS // EFFECTS 

    effectCardContainer: {
        backgroundColor: '#181818',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 250,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        flexWrap: 'wrap',
    },

    effectCard: {
        backgroundColor: '#3d3d3d',
        borderWidth: 1,
        paddingVertical: 50,
        paddingHorizontal: 50,
        marginTop: 20,
        marginHorizontal: 15,
    },

    effectCardText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    },

    // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS // MEDALS 

    medalCardContainer: {
        backgroundColor: '#181818',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },

    medalCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#3d3d3d',
        paddingVertical: 7.5,
        marginTop: 10,
        borderRadius: 35, // 10
        paddingLeft: '2.5%',
    },

    medalCardTitle: {
        alignSelf: 'baseline',
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
        paddingLeft: '2.5%',
    },

    medalCardSubTitle: {
        alignSelf: 'baseline',
        color: '#aaaaaa',
        fontSize: 15,
        textAlign: 'center',
        paddingLeft: '2.5%',
    },

    medalHeaderText: {
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
    },

    // MISC

});

export { styles }