
 
//REQUESTS
import {fetchGetAdmin,fetchAddAdmin,fetchDeleteAdmin} from '../Requests/Requests'

//@GET
export const getAdmin = ()=> async (dispatch)=>{
    try{
        const res = fetchGetAdmin();
        dispatch({type:"GET_ADMIN_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@POST
export const addAdmin = (Admin)=> async (dispatch)=>{
    try{
        const res = fetchAddAdmin(Admin);
        dispatch({type:"ADD_ADMIN_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deleteAdmin = (id)=> async (dispatch)=>{
    try{
        const res = fetchDeleteAdmin(id);
        dispatch({type:"DELETE_ADMIN_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}