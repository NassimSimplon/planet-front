//REQUESTS
import {fetchGetProduct,fetchAddProduct,fetchDeleteProduct} from '../Requests/Requests'
import axios from 'axios'
//@GET
export const getProduct = ()=> async (dispatch)=>{
    try{
        const res = await fetchGetProduct();
        dispatch({type:"GET_PRODUCT_SUCCED",payload:res.data})
    }
    catch(err){
        console.log(err)
    }
     
    

}

//@POST
export const addProduct = (product)=> async (dispatch)=>{
    try{
        const res = fetchAddProduct(product);
        dispatch({type:"ADD_PRODUCT_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deleteProduct = (id)=> async (dispatch)=>{
    try{
        const res = fetchDeleteProduct(id);
        dispatch({type:"DELETE_PRODUCT_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}