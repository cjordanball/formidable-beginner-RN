import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, useWindowDimensions } from 'react-native';
import { Audio } from 'expo-av';
import { iSong, iFetchedSong } from '../interfaces';
import styles from '../styling';

type songCardProps = {
    song: iFetchedSong
};

const SongCard = ({ song }: songCardProps) => {

    const { height: screenHeight, width: screenWidth } = useWindowDimensions();

    const [isPlaying, setIsPlaying] = useState(false);
    const [playbackObject, setPlaybackObject] = useState(null);
    const [playbackStatus, setPlaybackStatus] = useState(null);

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

    useEffect(() => {
        if (playbackObject === null) {
            setPlaybackObject(new Audio.Sound());
        }
    }, []);


    return (
        <View style={[styles.SongCard.containerView, { paddingEnd: screenHeight > screenWidth ? 0 : 50 }]}>
            <Text style={styles.SongCard.title}>{song.Title}</Text>
            <View>
                <Button
                    title={isPlaying ? 'Pause' : 'Play'}
                    onPress={() => {
                        const urlString: string = song.url
                        playPauseSound(urlString);
                    }}
                />
            </View>
        </View>
    )
}

export default SongCard;