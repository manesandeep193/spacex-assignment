import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/ProductList.module.css';

Product.propTypes = {
    img: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.number,
    mId: PropTypes.array,
    year: PropTypes.string,
    landing: PropTypes.bool,
    launch: PropTypes.bool
};

function Product({img, name, number, mId, year, landing, launch}) {
    const missionIds = mId.length > 0 && mId.map(id => 
        <li key={id}>{id}</li>
    )
    return (
        <div className={styles['list-content']}>
            <div className={styles['img-content']}>
                <img src={img} alt={name}/>
            </div>
            <p><a href='#'>{name}{`#${number}`}</a></p>
            {mId.length > 0 &&
                <>
                    <p>{'Mission Ids:'}</p>
                    <ul>
                        {missionIds}
                    </ul>
                </> 
                
            }
            <p>{'Launch Year:'} <label>{year}</label></p>
            <p>{'Successful Launch:'} <label>{`${launch}`}</label></p>
            <p>{'Successful Landing:'} <label>{`${landing}`}</label></p>
        </div>
    );
}

export default Product;