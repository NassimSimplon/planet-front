//Import URLS
import {
    Add_Product_Url, Get_Product_Url, Delete_Product_Url,Update_Product_Url,
    Add_Partenaire_Url,Get_Partenaire_Url,Delete_Partenaire_Url,Update_Partenaire_Url,
    Add_Service_Url,Get_Service_Url,Delete_Service_Url,Update_Service_Url,
    Add_Contact_Url,Get_Contact_Url,Delete_Contact_Url,Update_Contact_Url,
    Add_Admin_Url,Get_Admin_Url,Delete_Admin_Url,SignIn_Url,Add_Carrier_Url,Get_Carrier_Url,
    Delete_Carrier_Url,Update_Carrier_Url,Get_Partenaire_By_ID_Url} from './ApiUrls'

//AXIOS
import axios from 'axios'

//-----------------------------------------PRODUCT

//@GET
export const fetchGetProduct = async ()=>{
 return  await  axios.get(Get_Product_Url) 
}

//@POST
export const fetchAddProduct = (product)=>{
    return  axios.post(Add_Product_Url,{...product})
}

//@DELETE
export const fetchDeleteProduct = (id)=>{
    return  axios.delete(`${Delete_Product_Url}/${id}`)
}

//@UPDATE
export const fetchUpdateProduct = (product)=>{
    return axios.put(`${Update_Product_Url}/${product.id}`,product)
}


//-----------------------------------------PARTENAIRES

//@GET
export const fetchGetPartenaire = async ()=>{
    return await  axios.get(Get_Partenaire_Url)
}

//@POST
export const fetchAddPartenaire = async (partenaire)=>{
    return await axios.post(Add_Partenaire_Url,{...partenaire})
}

//@DELETE
export const fetchDeletePartenaire = async (id)=>{
    return await  axios.delete(`${Delete_Partenaire_Url}/${id}`)
}

//@UPDATE
export const fetchUpdatePartenaire = async(partenaire)=>{
    return await  axios.put(`${Update_Partenaire_Url}/${partenaire._id}`,partenaire)
}

//@GET
export const fetchGetPartenaireByID = async (id)=>{
    return await  axios.get( `${Get_Partenaire_By_ID_Url}/${id}`
)
}

//------------------------------------------SERVICES

//@GET
export const fetchGetService = async ()=>{
    return await  axios.get(Get_Service_Url)
}

//@POST
export const fetchAddService = async(Service)=>{
    return await  axios.post(Add_Service_Url,{...Service})
}

//@DELETE
export const fetchDeleteService = (id)=>{
    return  axios.delete(`${Delete_Service_Url}/${id}`)
}

//@UPDATE
export const fetchUpdateService = async(Service)=>{
    return await axios.put(`${Update_Service_Url}/${Service._id}`,Service)
}

//-------------------------------------------CONTACT

//@GET
export const fetchGetContact = ()=>{
    return axios.get(Get_Contact_Url)
}

//@POST
export const fetchAddContact = async (Contact)=>{
    return await axios.post(Add_Contact_Url,{...Contact})
}

//@DELETE
export const fetchDeleteContact = (id)=>{
    return  axios.delete(`${Delete_Contact_Url}/${id}`)
}

//@UPDATE
export const fetchUpdateContact = (Contact)=>{
    axios.put(`${Update_Contact_Url}/${Contact.id}`,Contact)
}

//-------------------------------------------CARRIER

//@GET
export const fetchGetCarrier = ()=>{
    return axios.get(Get_Carrier_Url)
}

//@POST
export const fetchAddCarrier = async (carrier)=>{
    return await axios.post(Add_Carrier_Url,{...carrier})
}

//@DELETE
export const fetchDeleteCarrier = (id)=>{
    return  axios.delete(`${Delete_Carrier_Url}/${id}`)
}

//@UPDATE
export const fetchUpdateCarrier = (Carrier)=>{
    axios.put(`${Update_Carrier_Url}/${Carrier.id}`,Carrier)
}

//-------------------------------------------ADMIN

//@GET
export const fetchGetAdmin = ()=>{
    return  axios.get(Get_Admin_Url)
}

//@POST
export const fetchAddAdmin = (Admin)=>{
    return  axios.post(Add_Admin_Url,{...Admin})
}

//@DELETE
export const fetchDeleteAdmin = (id)=>{
    return  axios.delete(`${Delete_Admin_Url}/${id}`)
}

//-------------------------------------------SIGN IN

//@POST
export const fetchSignIN = async(token)=>{
    return await axios.post(`${SignIn_Url}`,{...token})
}

