import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {GetComponent} from '../../import file/import';
import {getProduct} from '../../Redux/Product/Action'

const Products = () => {
    return (
        <div>
            <GetComponent  action={getProduct()} reducer={(state)=>state.productStore.product} />
        </div>
    )
}

export default Products
