import React from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { iFetchedAlbum } from '../interfaces';
import styles from '../styling';

const AlbumCard = ({ item, index, getAlbumSongs }) => {
    const { height: screenHeight, width: screenWidth } = useWindowDimensions();
    return (
        <View style={styles.AlbumCard.listItem}>
            <TouchableOpacity
                onPress={() => {
                    getAlbumSongs(item);
                }}
            >
                <View style={styles.AlbumCard.imageHolder}>
                    <Image
                        style={styles.AlbumCard.image}
                        source={{
                            uri: item.cover
                        }}
                    />
                </View>
            </TouchableOpacity>
            <View style={styles.AlbumCard.textSpace}>
                <View style={styles.AlbumCard.titleView}>
                    <Text style={[styles.AlbumCard.title, {width: screenWidth - 110}]}>{item.title}</Text>
                </View>
                <View style={styles.AlbumCard.artistView}>
                    <Text style={[styles.AlbumCard.artist, {width: screenWidth - 110}]}>{item.artist}</Text>
                </View>
            </View>
        </View>
    )
}

export default AlbumCard;

//             <TouchableOpacity
//                 onPress={() => {
//                     setSelectedAlbum(item.cover);
//                     getAlbumSongs(item);
//                     setShowSongs(!showSongs);
//                 }}
//             >
//                 <Text>{`${item.title}: ${item.artist}`}</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }}