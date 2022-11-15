import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#181818',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryLabel: {
        flex: 1,
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 25,
        textShadowColor: '#181818',
        textShadowRadius: 20
    },
    categoryContainer: {
        backgroundColor: '#3d3d3d',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: '#212121',
        marginTop: 7.5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 7.5
    },
    divider: {
        borderBottomWidth: .15,
        borderColor: '#FFBF00',
    },

    verticalDivider: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 50,
        borderColor: '#3d3d3d',
    },

    categoryDivider: {
        borderBottomWidth: 1,
        borderColor: '#FFBF00',
    },

    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        borderRadius: 500,
        borderColor: '#3d3d3d',
        borderWidth: 10,
    },

    counterText: {
        fontSize: 60,
    },

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
        marginBottom: 250,
        paddingHorizontal: 10,
    },

    medalTextContainer: {
        alignItems: 'center',
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

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

});

export { styles }