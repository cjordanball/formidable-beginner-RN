import React, { useEffect, useState, Dispatch } from 'react';
import { View, Text, Button, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumActions } from '@app/appState/actions';
import { getAlbumList, getSongList } from '../fetchers';
import { RootState } from '../appState/reducers';
import { iAlbum } from '../interfaces';


const TestComp = () => {
    const { albums, albumSongs } = useSelector((state: RootState) => state.juke);
    // const { albumSongs } = useSelector((state: RootState) => )
    const [showSongs, setShowSongs] = useState(false);
    // const [sound, setSound] = useState(null);
    const jukeDispatch = useDispatch<Dispatch<AlbumActions>>();

    async function playSound(filePath: string = '') {
        await Audio.setAudioModeAsync({ playInSilentModeIOS: true })
        const { sound: playbackObject } = await Audio.Sound.createAsync(
            { uri: filePath },
            // { uri:'https://raw-video-backup.s3.amazonaws.com/music/01+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Introitus_+Requiem+Aeternam.mp3' },
            {shouldPlay: true }
        );
        // setSound(sound);
        // await sound.playAsync();
    }

    const getAlbumSongs = (item: iAlbum) => {
        console.log('item2: ', item);
        getSongList(jukeDispatch, item);
    };

    // useEffect(() => {
    //     return sound ? () => { sound.unloadAsync();} : undefined;
    // }, [sound]);

    useEffect(() => {
        getAlbumList(jukeDispatch);
        return () => { return };
    }, [jukeDispatch]);

    return (
        <View>
            <Button
                title="Mozart"
                onPress={() => {
                    playSound('https://raw-video-backup.s3.amazonaws.com/music/01+Mozart_+Requiem+In+D+Minor%2C+K+626+-+Introitus_+Requiem+Aeternam.mp3');
                }}
            />
            <Button
                title="Clapton"
                onPress={() => {
                    playSound('https://raw-video-backup.s3.amazonaws.com/music/02+Hideaway.m4a');
                }}
            />
            <Text>
                Albums go here:
            </Text>
            <View style={styles.albumList}>
                <FlatList
                    data={albumSongs}
                    keyExtractor={(song) => `${song.title}-${(Math.floor(Math.random() * 1_000_000).toString(10))}`}
                    renderItem={({ item }) => {
                        return (
                            <Text>{item.Title}</Text>
                        )
                    }}
                />
                <FlatList
                    data={albums}
                    keyExtractor={(album) => `${album.title}-${(Math.floor(Math.random() * 1_000_000).toString(10))}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={[styles.listStyle, index % 2 ? styles.oddStyle : styles.evenStyle]}>
                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('item: ', item);
                                        getAlbumSongs(item);
                                    }}
                                >
                                    <Text>{`${item.title}: ${item.artist}`}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    albumList: {
        height: 400,
        width: '100%'
    },
    listStyle: {
        width: '100%',
        height: 30
    },
    oddStyle: {
        backgroundColor: '#fff'
    },
    evenStyle: {
        backgroundColor: '#ccc'
    },
    songList: {
    }
});

export default TestComp;