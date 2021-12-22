 
//REQUESTS
import {fetchGetService,fetchAddService,fetchDeleteService,fetchUpdateService} from '../Requests/Requests'

//@GET
export const getService = ()=> async (dispatch)=>{
    try{
        const res =  await fetchGetService();
        dispatch({type:"GET_SERVICE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@POST
export const addService = (Service)=> async (dispatch)=>{
    try{
        const res = await fetchAddService(Service);
        dispatch({type:"ADD_SERVICE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deleteService = (id)=> async (dispatch)=>{
    try{
        const res = fetchDeleteService(id);
        dispatch({type:"DELETE_SERVICE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}