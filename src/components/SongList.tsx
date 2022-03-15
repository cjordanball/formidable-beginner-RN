import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SongCard from './SongCard';
import { iSong } from '../interfaces';

type songListProps = {
    songs: Array<iSong>
};

const SongList = ({ songs }: songListProps) => {
    return (
        <FlatList
            data={songs}
            keyExtractor={(song) => `${song.title}-${Math.floor(Math.random() * 1_000_000).toString(10)}`}
            renderItem={({ item }) => {
                return (
                    <View>
                        <SongCard song={item} />
                    </View>
                )
            }}
        />
    )
}

export default SongList;