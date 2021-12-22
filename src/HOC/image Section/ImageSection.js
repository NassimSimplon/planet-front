import React from 'react'

const ImageSection = (props) => {
    return (
        <div className="container-fluid">
         <img className={props.className} id ='imageSection-img' src={props.image} alt='logo' />     
        </div>
    )
}

export default ImageSection
