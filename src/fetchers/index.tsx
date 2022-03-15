import React from 'react';
import { getDatabase, ref, onValue, child, get } from 'firebase/database';
import app from './firebase';
import { iAlbum, iFetchedAlbum } from '../interfaces';
import { iGetAlbums, iGetSongs } from '@app/appState/actions';


export const getAlbumList = (jukeDispatchAlbums: React.Dispatch<iGetAlbums>): void => {

    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'ALBUMS')).then((snap) => {
        if (snap.exists()) {
            const fetchedAlbums: Array<iFetchedAlbum> = snap.val().map((album: iAlbum): iFetchedAlbum => {
                return {
                    title: album.Title,
                    artist: album.Artist,
                    cover: album.Cover
                }
            });
            jukeDispatchAlbums({
                type: 'IMPORT_ALBUMS',
                payload: fetchedAlbums
            });
        } else {
            console.log("No Data");
        }
    }).catch((err) => {
        console.log('ERR: ', err);
    });
}

export const getSongList = (jukeDispatchSongs: React.Dispatch<iGetSongs>, parentAlbum: iFetchedAlbum): void => {
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, 'ALBUMS')).then((snap) => {
        if (snap.exists()) {
            const selectedAlbum =  snap.val().find((album: iAlbum) => {
                return album.Cover === parentAlbum.cover
            });
            jukeDispatchSongs({
                type: 'IMPORT_SONGS',
                payload: selectedAlbum.Songs ? selectedAlbum.Songs : null
            });
        } else {
            console.log("No Data");
        }
    }).catch((err) => {
        console.log('ERR: ', err);
    })
};