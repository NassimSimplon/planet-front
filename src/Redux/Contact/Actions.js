 
//REQUESTS
import {fetchGetContact,fetchAddContact,fetchDeleteContact} from '../Requests/Requests'

//@GET
export const getContact = ()=> async (dispatch)=>{
    try{
        const res = fetchGetContact();
        dispatch({type:"GET_CONTACT_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@POST
export const addContact = (Contact)=> async (dispatch)=>{
    try{
        const res = await fetchAddContact(Contact);
        dispatch({type:"ADD_CONTACT_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deleteContact = (id)=> async (dispatch)=>{
    try{
        const res = fetchDeleteContact(id);
        dispatch({type:"DELETE_CONTACT_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}