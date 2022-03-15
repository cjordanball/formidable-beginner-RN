import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1
    },
    globalContainer: {
      width: '100%'
    },
    safeContainer: {
      flex: 1,
      width: '100%'
    },
    bodyContainer: {
    },
    albumList: {
      marginTop: 10,
      width: '100%'
    },
    modal: {
      flex: 1
    },
    modalHeader: {
      height: 70,
      justifyContent: 'center',
      alignItems: 'center'
    },
    innerModal: {
      flex: 1,
      paddingVertical: 40,
      backgroundColor: '#999'
    },
    returnButton: {
      shadowColor: 'rgba(0, 0, 100, .8)',
      shadowOffset: { height: 2, width: 1},
      shadowOpacity: 1,
      shadowRadius: 1,
      padding: 10,
      borderRadius: 4,
      backgroundColor: 'white',
    }
  });

  export default styles;