import React, { useEffect, useState, Dispatch } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

import { useDispatch, useSelector } from 'react-redux';
import { AlbumActions } from '@app/appState/actions';
import { getAlbumList } from '../fetchers';
import { RootState } from '../appState/reducers';


const TestComp = () => {
    const { albums } = useSelector((state: RootState) => state.juke);
    const [sound, setSound] = useState(null);
    const jukeDispatch = useDispatch<Dispatch<AlbumActions>>();

    async function playSound() {
        console.log('loadiing sound file');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/audio.m4a')
        );
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound ? () => { console.log('Unloading Sound'); sound.unloadAsync();} : undefined;
    }, [sound]);

    console.log('Albums: ', albums);

    useEffect(() => {
        getAlbumList(jukeDispatch);
        return () => { return };
    }, [jukeDispatch]);


    return (
        <View>
            <Button
                title="Play"
                onPress={() => {
                    console.log("She's got electric boobs, a mohair suit!")
                    playSound();
                }}
            />
            <Text>
                Albums go here.
            </Text>
        </View>
    )
}

export default TestComp;