import { createStore } from 'redux';
import rootReducer from '@app/appState/reducers';

export const formidableStore = createStore(rootReducer);

