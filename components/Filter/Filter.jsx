import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styles from './css/Filter.module.css';
import { setFilter } from './redux/actions/filter.action';

Filter.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    filterName: PropTypes.string
};
Filter.defaultProps = {
	className: ''
};

function Filter({title, className, filterName}) {
    const dispatch = useDispatch();
    const filterOptions = useSelector(state => state.filtersModuleReducer.FiltersReducer[filterName]);
    const selectedFilters = useSelector(state => state.filtersModuleReducer.FiltersReducer.selected);
    
    const changeFilters = (filterName, val) => {
        if(selectedFilters[filterName] === val){
            val = null;
        }
		
        const urlSearchParams = new URLSearchParams(window.location.search);
        if (val) {
            urlSearchParams.set(filterName, val);
        } else {
            urlSearchParams.delete(filterName);
        }
        window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${urlSearchParams}`));
        dispatch(setFilter({...selectedFilters, [filterName]: val}));
    }
    
    const filterItems = filterOptions.map((val) =>
        <li
            key={val} 
            onClick={() => changeFilters(filterName, val)}
            className={val === selectedFilters[filterName] ? styles.selected: ''}
        >
            <span>{val}</span>
        </li>
    );
    return (
        <div className={`${styles.filters} ${className}`}>
            <p><label>{title}</label></p>
            <ul>
                {filterItems}
            </ul>
        </div>
    );
}

export default Filter;