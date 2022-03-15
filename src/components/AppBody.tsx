import React, { useEffect, useState, Dispatch } from 'react';
import { View, Text, Modal, FlatList, ScrollView, Image, StyleSheet, TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native';
import { Audio } from 'expo-av';
import SongList from './SongList';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumActions } from '@app/appState/actions';
import { getAlbumList, getSongList } from '../fetchers';
import { RootState } from '../appState/reducers';
import { iAlbum, iFetchedAlbum, iSong } from '../interfaces';
import AlbumCard from './AlbumCard';
import Styles from '../styling';


const AppBody = () => {

    const { height: screenHeight, width: screenWidth } = useWindowDimensions();

    const { albums, albumSongs } = useSelector((state: RootState) => state.juke);
    // const { albumSongs } = useSelector((state: RootState) => )
    const [showSongs, setShowSongs] = useState(false);
    const [selectedAlbum, setSelectedAlbum] = useState('');

    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackObject, setPlaybackObject] = useState(null);
    const [playbackStatus, setPlaybackStatus] = useState(null);
    // const [sound, setSound] = useState(null);
    const jukeDispatch = useDispatch<Dispatch<AlbumActions>>();

    const playPauseSound = async (filePath: string = '') => {
        if (playbackObject !== null && playbackStatus === null) {
            const status = await playbackObject.loadAsync(
                { uri: filePath },
                { shouldPlay: true }
            );
            setIsPlaying(true);
            return setPlaybackStatus(status);
        }

        if (isPlaying) {
            const status = await playbackObject.pauseAsync();
            setIsPlaying(false);
            return setPlaybackStatus(status);
        }

        if (!isPlaying) {
            const status = await playbackObject.playAsync();
            setIsPlaying(true);
            return setPlaybackStatus(status);
        }
    }

    const checking = () => {
        console.log("isPlay: ", playbackStatus.positionMillis);
    }

    const getAlbumSongs = (item: iFetchedAlbum) => {
        getSongList(jukeDispatch, item);
        setShowSongs(true);
    };

    useEffect(() => {
        if (playbackObject === null) {
            setPlaybackObject(new Audio.Sound());
        }
    }, []);

    useEffect(() => {
        getAlbumList(jukeDispatch);
        return () => { return };
    }, [jukeDispatch]);

    return (
        <View style={Styles.Globals.RootStyle.bodyContainer}>
            <View style={Styles.Globals.RootStyle.modal}>
                {screenHeight > screenWidth ? (
                    <Modal
                        transparent={false}
                        visible={showSongs}
                        animationType="slide"
                        supportedOrientations={['portrait', 'landscape']}
                        onOrientationChange={() => {
                            console.log('Twisted');
                        }}
                    >
                        <View style={Styles.Globals.RootStyle.innerModal}>
                            <View style={Styles.Globals.RootStyle.modalHeader}>
                                <TouchableOpacity
                                    style={Styles.Globals.RootStyle.returnButton}
                                    onPress={() => {
                                        setShowSongs(false);
                                    }}
                                >
                                    <Text>
                                        Back to Albums
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <SongList songs={albumSongs}/>
                        </View>
                    </Modal>
                ) : (
                        <Modal
                            transparent={false}
                            visible={showSongs}
                            animationType="slide"
                            supportedOrientations={['portrait', 'landscape']}
                        >
                            <View style={Styles.Globals.RootStyle.innerModal}>
                                <View style={Styles.Globals.RootStyle.modalHeader}>
                                    <TouchableOpacity
                                        style={Styles.Globals.RootStyle.returnButton}
                                        onPress={() => {
                                            setShowSongs(false);
                                        }}
                                    >
                                        <Text>
                                            Back to Albums
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <SongList songs={albumSongs}/>
                            </View>
                        </Modal>
                )}
            </View>
            <View style={Styles.Globals.RootStyle.albumList}>
                <FlatList
                    data={albums}
                    keyExtractor={(album) => `${album.title}-${(Math.floor(Math.random() * 1_000_000).toString(10))}`}
                    renderItem={({ item, index }) => {
                        return (
                            <AlbumCard item={item} index={index} getAlbumSongs={getAlbumSongs}/>
                        )
                    }}
                />
            </View>
        </View>
    )
}

// const styles = StyleSheet.create ({
//     albumList: {
//         height: 400,
//         width: '100%'
//     },
//     image: {
//         height: 100,
//         width: 100
//     },
//     listStyle: {
//         width: '100%',
//     },
//     oddStyle: {
//         backgroundColor: '#fff'
//     },
//     evenStyle: {
//         backgroundColor: '#ccc'
//     },
//     songList: {
//     }
// });

export default AppBody;