import {useSelector,useDispatch} from 'react-redux';
import {GetComponent} from '../../import file/import';
import {getPartenaire,deletePartenaire,updatePartenaire,addPartenaire} from '../../Redux/Partenaires/Actions'
 import {useEffect,useState} from 'react';
 import PostComponent from '../HOC/POST Component/PostComponent'
 import "../Dashboard.css"
  

const Partenaire = () => {
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
        <div >
        <h1>Partenaires</h1>
         <PostComponent    setIt={setItem} item={partenaire} action={addPartenaire} name={inputDescription} value={btnValue}  />
        
            <GetComponent   setIt={setItem} item={partenaire}  name={inputDescription} value={btnValue} upAction={updatePartenaire} deleteAction={deletePartenaire} className='row dash-partenaires-section' action={getPartenaire()} reducer={(state)=>state.partenaireStore.partenaire} />
        </div>
    )
}

export default Partenaire
