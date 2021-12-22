import React from 'react';
 import {useDispatch} from 'react-redux';
const Form = (props) => {
    const dispatch = useDispatch()
    const addIt = (e) =>{
       e.preventDefault()
     return  props.setIt({...props.item,[e.target.name]:e.target.value})
      
      }
     
      const saveIt = () =>{
       return   dispatch(props.action(props.item))
    
            } 
    return (
       <form className='mt-5' onSubmit={saveIt}> 
       
           {props.name.map(el=>(
            <div className='content-form'> 
           <div className='label-section'>
            <label for={el.name}>{el.label}</label></div>
            <div className='input-section'>
             <input type={el.type}  name={el.name} onChange={(e) =>addIt(e)}  />
             </div>
             <br/>  
            </div>
           ))}
  
            <input type="submit" id='button' value={props.value} />  
            <br/>
            <br/>
            <br/>
           </form>
            
     
     
     )
}

export default Form
