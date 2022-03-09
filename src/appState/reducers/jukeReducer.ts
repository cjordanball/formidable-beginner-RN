import { iAlbum, jukeState } from '@app/interfaces';
import { AlbumActions } from '@app/appState/actions';

const initState: jukeState = {
    selector: '',
	albums: [],
	hotSong: 0,
	position: 0,
	songLength: 0,
	musicStyles: [],
	selectedStyles: [],
} ;


const jukeReducer = (state: jukeState = initState, action: AlbumActions): jukeState => {
    switch (action.type) {
        case 'IMPORT_ALBUMS':
            const AlbumArray: Array<iAlbum> = [];
            AlbumArray.push(...action.payload);
            return {
                ...state,
                albums: AlbumArray
            }
        default:
            return state;
    }
};

export default jukeReducer;