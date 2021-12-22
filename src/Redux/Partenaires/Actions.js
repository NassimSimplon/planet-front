//REQUESTS
import {fetchGetPartenaire,fetchDeletePartenaire,fetchAddPartenaire,fetchGetPartenaireByID,fetchUpdatePartenaire} from '../Requests/Requests'
 
//@GET
export const getPartenaire = ()=> async (dispatch)=>{

    
    try{
        const res = await fetchGetPartenaire();
        dispatch({type:"GET_PARTENAIRE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@GET
export const getPartenaireByID = (id)=> async (dispatch)=>{

    
    try{
        const res = await fetchGetPartenaireByID(id);
        dispatch({type:"GET_PARTENAIRE_BY_ID_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@POST
export const addPartenaire = (partenaire)=> async (dispatch)=>{
    try{
        const res = await fetchAddPartenaire(partenaire);
        dispatch({type:"ADD_PARTENAIRE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const deletePartenaire = (id)=> async (dispatch)=>{
    try{
        const res = await fetchDeletePartenaire(id);
        dispatch({type:"DELETE_PARTENAIRE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}

//@DELETE
export const updatePartenaire = (partenaire)=> async (dispatch)=>{
    try{
        const res = await fetchUpdatePartenaire(partenaire);
        dispatch({type:"DELETE_PARTENAIRE_SUCCED",payload:res.data});
    }
    catch(err){
        console.log(err);
    }

}
