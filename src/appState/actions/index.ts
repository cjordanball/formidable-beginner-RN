import { iAlbum } from "@app/appState/actions";

export interface iGetAlbums {
    readonly type: 'IMPORT_ALBUMS';
    payload: string;
}

export type AlbumActions = iGetAlbums;