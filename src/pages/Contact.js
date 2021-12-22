import React,{useState} from 'react'
import {Form} from '../import file/import';
import {addContact} from '../Redux/Contact/Actions'

const Contact = () => {
    const [contact,setContact] = useState({
        nom:'',
        prenom:'',
        email:'',
        message:''
    })
    const setItem = setContact;
    const inputDescription = [
        {label:'Nom',type:'text',name: 'nom'},{ label:'Prénom',type:'text',name:'prenom'},
        {label:'Adresse Email',type:'text',name:'email'},
         {label:'Message',type:'text',name:'message'}
   ]
   const btnValue = 'Envoyer';

    return (
       
        
       
        <div className="container-fluid">
        <h1>CONTACT</h1>
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
            <Form   setIt={setItem} item={contact} action={addContact} name={inputDescription} value={btnValue} />

            </div>
            <div className="col-lg-3"></div>
        </div>   
        </div>
            
    
    )
}

export default Contact
