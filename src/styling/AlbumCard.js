import { StyleSheet } from 'react-native';


const styles = StyleSheet.create ({
    listItem: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1

    },
    imageHolder: {
        paddingRight: 5,
    },
    image: {
        height: 100,
        width: 100,
        paddingRight: 5,

    },
    textSpace: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    titleView: {
        width: 250,
        alignItems: 'center',
    },
    artistView: {
        width: 250,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#00c'
    },
    artist: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black'
    }
});

export default styles;