import React from 'react';
import GetComponent from '../HOC/GET Component/GetComponent';
import {getProduct} from '../Redux/Product/Action';
import {classNames_Of_Product_Section} from '../Constent/CssConstent';
import '../App.css';

const Product = () => {
    
    return (
        <div>
        <h1>OUR PRODUCTS</h1>
            <GetComponent className={classNames_Of_Product_Section} action={getProduct()} reducer={(state) => state.productStore.product} />
        </div>
    )
}

export default Product
