import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import Styles from '@app/styling';

const Header: React.FC = () => {
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    return (
    <View style={[Styles.Header.container, {width: screenWidth}]}>
        <Text style={Styles.Header.headline}>The Formidable Beginner</Text>
    </View>
    )
}

export default Header;