import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'center',
    },

    // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER // COUNTER 

    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        borderRadius: 500,
        borderColor: '#3d3d3d',
        borderWidth: 10,
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 10,
        marginBottom: 250,
        paddingHorizontal: 10,
    },

    themeCard: {
        backgroundColor: '#3d3d3d',
        borderWidth: 1,
        paddingVertical: 10,
        marginTop: 10,
    },

    themeCardText: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
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
        borderWidth: 1,
        paddingVertical: 7.5,
        marginTop: 10,
        borderRadius: 10,
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

    // MISC

});

export { styles }