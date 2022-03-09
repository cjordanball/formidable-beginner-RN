import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Header from '@comps/Header';
import TestComp from '@comps/testComp';

const InitScreen = () => {
    return (
        <SafeAreaView>
            <Header />
            <View>
                <Text>
                    Goodbye, Cruel World!
                </Text>
            </View>
            <TestComp />
        </SafeAreaView>
    );
};

export default InitScreen;
