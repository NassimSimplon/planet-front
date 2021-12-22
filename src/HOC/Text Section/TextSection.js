import React from 'react'

const TextSection = (props) => {
    return (
        <div className="conatiner-fluid">
        <h1>{props.title}</h1>
        <div className="row mt-5">
        <div className="col-lg-2 col-md-2 col-sm-2 mt-5" ></div>
        <div className="col-lg-8 col-md-8 col-sm-8 text-center mt-5" ><p>{props.paragraphe}</p></div>
        <div className="col-lg-2 col-md-2 col-sm-2 mt-5" ></div>
        </div>
        </div>
    )
}

export default TextSection
