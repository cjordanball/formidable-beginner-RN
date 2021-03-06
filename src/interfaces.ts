import React from 'react';


export interface iAlbum {
    Cover: string,
    Title: string,
    Year: number,
    Artist: string
}

export interface iFetchedAlbum {
    title: string,
    artist: string,
    cover: string
}
export interface iSong {
    title: string,
    url: string
}

export interface iFetchedSong {
    Title: string,
    url: string
}

interface iJukeState {
    selector: string;
    albums: Array<iAlbum>
    hotSong: number;
    position: number;
    songLength: number;
    musicStyles: Array<string>;
    selectedStyles: Array<string>;
}

export type jukeState = iJukeState;