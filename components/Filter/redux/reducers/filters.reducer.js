import { SET_FILTER } from "../actions/filter.action";

const initialState = {
    year:['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017','2018', '2019', '2020'],
    launch:['true', 'false'],
    landing:['true', 'false'],
    selected:{
        year: null,
        launch: null,
        landing: null
    }
}
export const FiltersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_FILTER:
            return {
                ...state,
                selected: {...payload}
            }
        default:
			return state;
    }
}