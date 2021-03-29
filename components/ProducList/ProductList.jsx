import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/ProductList.module.css';
import Product from './Product';

ProductList.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool
};

function ProductList({products, isLoading}) {
    const satelites = products.map((product) =>
        <li className={styles['list-item']} key={product.flight_number}>
            <Product
                img={product.links && product.links.mission_patch_small}
                name={product.mission_name}
                number={product.flight_number}
                mId={product.mission_id}
                year={product.launch_year}
                landing={product.launch_landing || false}
                launch={product.launch_success}
            />
        </li>
    );
    return (
        <>
            {isLoading &&
                <p>{'Please wait..., updated results will appear shortly.'}</p>
            }
            { !isLoading && products.length > 0 &&
                <ul className={styles.list}>
                    {satelites}
                </ul>
            }
            { !isLoading && products.length === 0 &&
                <p>{'There are no launch programs for applied filters, Please change/update to see the results.'}</p>
            }
        </>
    );
}

export default ProductList;