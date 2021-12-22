import React ,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {GetComponent} from '../../import file/import';
import {getService,addService} from '../../Redux/Services/Actions'
import PostComponent from '../HOC/POST Component/PostComponent'

 
const Services = () => {
    const [partenaire,setPartenaire] =useState({
    image:"",
    title:""
        

    });
    const setItem = setPartenaire;
 
    const inputDescription = [
    {label:'Image',type:'text',name: 'image'},{ label:'title',type:'text',name:'title'},
    ]
        const btnValue = 'Envoyer';

    return (
        <div>
    
        </div>
    )
}

export default Services
