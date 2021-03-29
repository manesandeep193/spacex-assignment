import {combineReducers} from 'redux';
import {filtersModuleReducer} from '../components/Filter/redux/reducers/index';

export const rootReducer = combineReducers({
    filtersModuleReducer
});