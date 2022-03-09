import { getDatabase, ref, onValue } from 'firebase/database';
import app from './firebase';
import { iAlbum } from '../interfaces';
import { iGetAlbums } from '@app/appState/actions';
import React from 'react';


export const getAlbumList = (jukeDispatchAlbums: React.Dispatch<iGetAlbums>): void => {

//     const dbRef = ref(getDatabase());
//     get(child(dbRef, 'ALBUMS')).then((snap) => {
//         if (snap.exists()) {
//             console.log(snap.val().length);
//         } else {
//             console.log("No Data");
//         }
//     }).catch((err) => {
//         console.log('ERR: ', err);
//     });



// }
    console.log('getAlbums');
    const db = getDatabase(app);
    const albumsRef = ref(db, 'ALBUMS');
    onValue(albumsRef, (snap) => {
        const fetchedAlbums = snap.val().map((album: iAlbum) => {
            return {
                title: album.Title,
                artist: album.Artist,
                year: album.Year,
                songs: album.Songs
            };
        });
        jukeDispatchAlbums({
            type: 'IMPORT_ALBUMS',
            payload: fetchedAlbums
        });
    });
}