import React from 'react';
import {ImageSection ,TextSection} from '../import file/import';
import {Aporo_title,Apropos_Paragraphe} from '../Constent/JsxConstent';
import '../App.css'

const Apropo = () => {
    return (
        <div className="container-fluid ">
                 <ImageSection className='img-fluid' image={'about-us.jpg'}/>
                 <TextSection title={Aporo_title} paragraphe={Apropos_Paragraphe} />

            
        </div>
    )
}

export default Apropo
