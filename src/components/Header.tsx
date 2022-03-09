import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header: React.FC = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.headline}>The Formidable Beginner</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headline: {
        fontSize: 24
    }
});

export default Header;