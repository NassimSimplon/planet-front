import React,{useState} from 'react';
import {Form} from '../import file/import';
import {addCarrier} from '../Redux/Carrier/Action';


const Carriers = () => {
    const [carrier,setCarrier] = useState({
        nom:'',
        prenom:'',
        profession:'',
        cv:''
    })
    const setItem = setCarrier;
    const inputDescription = [
        {label:'Nom',type:'text',name: 'nom'},{ label:'Prénom',type:'text',name:'prenom'},
        {label:'Profession',type:'text',name:'profession'},
         {label:'Charger votre CV',type:'file',name:'CV'}
   ]
   const btnValue = 'Envoyer';


    return (
        <div className='container-fluid'>
            <h1>CARRIERS</h1>
            <div className='row' >
            <div className="col-lg-2 col-md-12 col-sm-12"></div>
            <div className="col-lg-8  col-md-12 col-sm-12  text-center">
            <Form   setIt={setItem} item={carrier} action={addCarrier} name={inputDescription} value={btnValue} />

            </div>
            <div className="col-lg-2 col-md-12 col-sm-12"></div>

            </div>
        </div>
    )
}

export default Carriers
