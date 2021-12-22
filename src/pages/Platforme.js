import React ,{useEffect} from 'react'
import { TextSection ,Button,Input} from '../import file/import';
import {Platforme_title,Platforme_Paragraphe} from '../Constent/JsxConstent';
import {getService} from '../Redux/Services/Actions';
import {useDispatch,useSelector} from 'react-redux';


const Platforme = () => {
    const service = useSelector(state=>state.serviceStore.service)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getService())
    })
    return (
        <div>
        <TextSection title={Platforme_title} paragraphe={Platforme_Paragraphe} />
        <div className="container-fluid mt-5">
        <div className="row mt-5">
       <div className="col-lg-2"></div>
       <div className="col-lg-8" > 
       <div className="row mt-5">
            {service.map(el=>(
             
                <div className="col-lg-3 col-md-6 col-sm-12 service-section "> 
                    <img className="img-fluid" src={el.image} alt="" id='service-icons' />
                   <h1 id='service-titles'> {el.serviceTitle}</h1>
                   <br/>
                </div>
            ))} </div></div>
            <div className="col-lg-2"></div>
        </div></div> </div> 
    )
}

export default Platforme
