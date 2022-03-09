import React, { useEffect, Dispatch } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AlbumActions } from '@app/appState/actions';
import { getAlbumList } from '../fetchers';
import { RootState } from '../appState/reducers';


const TestComp = () => {
    const { albums } = useSelector((state: RootState) => state.juke);
    const jukeDispatch = useDispatch<Dispatch<AlbumActions>>();

    console.log('Albums: ', albums);

    useEffect(() => {
        getAlbumList(jukeDispatch);
        return () => { return };
    }, [jukeDispatch]);


    return (
        <View>
            <Text>
                Albums go here.
            </Text>
        </View>
    )
}

export default TestComp;