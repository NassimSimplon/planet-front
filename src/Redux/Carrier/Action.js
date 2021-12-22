 
//REQUESTS
import {fetchGetCarrier,fetchAddCarrier,fetchDeleteCarrier} from '../Requests/Requests'

//@GET
export const getCarrier = ()=> async (dispatch)=>{
    try{
        const res = fetchGetCarrier();
        dispatch({type:"GET_CARRIER_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@POST
export const addCarrier = (carrier)=> async (dispatch)=>{
    try{
        const res = await fetchAddCarrier(carrier);
        dispatch({type:"ADD_CARRIER_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deleteCarrier = (id)=> async (dispatch)=>{
    try{
        const res = fetchDeleteCarrier(id);
        dispatch({type:"DELETE_CARRIER_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}