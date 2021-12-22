import { fetchSignIN } from "../../Redux/Requests/Requests";
import jwt_decode from "jwt-decode";
import axios from "axios";
export const LOGIN_REQUEST = "LOGIN_REQUEST";




export const login =(token)=> async(dispatch) =>{
    
    try{
        
        
     const res =  await axios.post('http://localhost:8000/PlanetConectUs/admin/signIn',token)
            if (res.data){
              
                const {token} = res.data

              console.log(token)
                
                window.localStorage.setItem('token',token)
                
                 
                dispatch({
                    type:'LOGIN_SUCCESS',
                    payload:{
                        token 
                    }
                   
                })
             }else{
                if(res.status === 400){
                    dispatch({
                        type:"LOGIN_FAILED",
                        payload:{error:res.data.error}
                    })
                }
    
            }
          
        
       
       
    }
    catch (error) {
              console.log(error);
             }
}

export const isUserLoggedIn = () =>{
  return async dispatch =>{
      const token = localStorage.getItem('token')
      if(token){
          const user = JSON.parse(localStorage.getItem('user'))
        dispatch({
              type:'LOGIN_SUCCESS',
              payload:{
                  token,user
              }
          })
      }else{
          dispatch({type:'LOGIN_FAILED',
              payload:{
                  
                  error:'Failed to login'
              }
          })
      }
  }

}

export const signout = () =>{
  return async dispatch =>{
      localStorage.clear()
      dispatch({
          type:'LOGOUT_REQUEST'
      })
  }
}