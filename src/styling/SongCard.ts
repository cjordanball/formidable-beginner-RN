import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    containerView: {
        backgroundColor: '#ddd',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 5
    },
    title: {
        fontSize: 18,
        color: 'purple'
    }
});

export default styles;