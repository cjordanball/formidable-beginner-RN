import { combineReducers } from "redux";
import jukeReducer from "@app/appState/reducers/jukeReducer";

const rootReducer = combineReducers({
    juke: jukeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;