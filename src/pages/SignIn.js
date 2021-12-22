 import React,{useState} from 'react'
import {Form} from '../import file/import';
import {login} from '../authentification/Sign in/Actions'
import {useSelector,useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
const SignIn = () => {
    const auth = useSelector(state =>state.signInStore)

     const [token,setToken] = useState({
        adminEmail:"",
        password:""
    })
    const setItem = setToken;
    const inputDescription = [
        {label:"Adresse Email",type:"email",name:"adminEmail"},
        {label:"Mot de Passe",type:"password",name:"password"},
   ]
   const btnValue = 'Connexion';
   if(auth.authenticate){
    return <Redirect to={`/dashboard`} />
  }
    return (
        <div className="container-fluid">
        <h1>SIGN IN</h1>
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
            <Form   setIt={setItem} item={token} action={login} name={inputDescription} value={btnValue} />

            </div>
            <div className="col-lg-3"></div>
        </div>   
        </div>
    )
}

export default SignIn
