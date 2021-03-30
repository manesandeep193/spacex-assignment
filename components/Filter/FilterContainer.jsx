import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Filter from './Filter';
import styles from './css/Filter.module.css';
import { setFilter } from './redux/actions/filter.action';

function FilterContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search.substring(1));
        const pageLoadFilters = {
            year: params.get("year"),
            launch: params.get("launch"),
            landing: params.get("landing")
        };
        dispatch(setFilter({...pageLoadFilters}));
    }, []);
    return (
        <div className={styles.container}>
            <div>
                <p><b>{'Filters'}</b></p>
                <Filter
                    title={'Launch Year'}
                    filterName={'year'}
                />
                <Filter
                    title={'Successful Launch'}
                    filterName={'launch'}
                />
                <Filter
                    title={'Successful Landing'}
                    filterName={'landing'}
                />
            </div>
        </div>
    );
}

export default FilterContainer;