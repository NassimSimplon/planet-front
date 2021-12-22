import React from 'react'
import {ImageSection ,TextSection,Form} from '../import file/import';
import {Partenaire_title,Partenaire_Paragraphe} from '../Constent/JsxConstent'
 import {addPartenaire} from '../Redux/Partenaires/Actions'
import {useEffect,useState} from 'react';

const Partenaires = () => {
    const [partenaire,setPartenaire] =useState({
        nom:"",
        prenom:"",
        profession:"",
        numéroDeTéléphone:"",
        nomCompagnie:"",
        pays:"",
        objetDuPartenariat:"",
        sujet:"",
        message:"",
        email:""
        

    });
    const setItem = setPartenaire;
 
     const inputDescription = [
     {label:'Nom',type:'text',name: 'nom'},{ label:'Prénom',type:'text',name:'prenom'},
     {label:'Profession',type:'text',name:'profession'}, {label:'Numéro de téléphone',type:'text',name: 'numéroDeTéléphone'},
     {label:'Nom de la compagnie',type:'text',name: 'nomCompagnie'},
     {label:'Pays',type:'text',name: 'pays'},{label:'Objet du partenariat',type:'text',name: 'objetDuPartenariat'},
     {label:'Sujet',type:'text',name: 'sujet'}, {label:'Message',type:'text',name:'message'}, {label:'Adresse Email',type:'text',name:'email'}
]
 
    const btnValue = 'Envoyer';
    
    
    return (
        <div>
           <ImageSection className='img-fluid' image={'partners.jpg'}/>
            <TextSection title={Partenaire_title} paragraphe={Partenaire_Paragraphe} />
            <div className='container-fluid' >
                <div className='row text-center'   id='partenaire-section'>
                <div className="col-lg-2 col-md-12 col-sm-12"></div>
            <div className="col-lg-8  col-md-12 col-sm-12  text-center" >
            <Form   setIt={setItem} item={partenaire} action={addPartenaire} name={inputDescription} value={btnValue} />
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12"></div>

                </div>
            </div>
           </div>
    )
}

export default Partenaires
