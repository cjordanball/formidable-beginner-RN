import { iAlbum } from "@app/interfaces";

export interface iGetAlbums {
    readonly type: 'IMPORT_ALBUMS';
    payload: string;
}

export interface iGetSongs {
    readonly type: 'IMPORT_SONGS';
    payload: string;
}

export type AlbumActions = iGetAlbums | iGetSongs;