
import {combineReducers} from 'redux';

const initialState = {
    filtersModuleReducer: {
        FiltersReducer:{
            year:['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018', '2019', '2020'],
            launch:['true', 'false'],
            landing:['true', 'false'],
            selected:{
                year: null,
                launch: null,
                landing: null
            }
        }
    }
    
}
const filtersModuleReducer  = (state = initialState.filtersModuleReducer) => {
	return state;
};
const combinedReducers = combineReducers({
	filtersModuleReducer
});


export const mockReducer = (state, action) => {
	return combinedReducers(state, action);
};
