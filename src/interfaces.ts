import React from 'react';


export interface iAlbum {
    Cover: string,
    Title: string,
    Year: number,
    Artist: string,
    Songs: Array<iSong>
}
export interface iSong {
    title: string,
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