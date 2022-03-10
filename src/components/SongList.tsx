import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { iSong } from '../interfaces';

type songListProps = {
    songs: Array<iSong>
};

const SongList = (songs: songListProps) => {
    console.log("SongList: ", songs);
    return (
        <FlatList
            data={songs}
            keyExtractor={(song) => `${song.title}-${Math.floor(Math.random() * 1_000_000).toString(10)}`}
            renderItem={({ item }) => {
                return (
                    <Text>{item.title}</Text>
                )
            }}
        />
    )
}

export default SongList;