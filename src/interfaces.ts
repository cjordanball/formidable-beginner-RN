import React from 'react';


export interface iAlbum {
    Cover: string,
    Title: string,
    Year: number,
    Artist: string
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