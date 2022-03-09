import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { iSong } from '../interfaces';

const SongList = (songs: Array<iSong>) => {
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