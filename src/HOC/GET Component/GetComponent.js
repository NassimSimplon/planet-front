import React from 'react'
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'

const GetComponent = (props) => {

    const dispatch =useDispatch();
    //State
    const item = useSelector(props.reducer);
 
    useEffect(()=>{
    //Action
       dispatch(props.action);
       },[]);

    return (
        <div className={props.className[0]} >
        <div className={props.className[1]}>
          {item.map(({ image,title ,_id ,nom,description})=>(
              <div className={props.className[2]}>
              <div className={props.className[3]}  key={_id}>
                 <img className={props.className[4]} src={image} alt='' /> 
                 <h2>{title}</h2>
                 <p className={props.className[5]}>{description}</p>
              </div>
              </div>
          ))}  
        </div>
        </div>
    )
}

export default GetComponent
