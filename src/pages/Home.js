import React from 'react'
import Partenaires from '../components/Partenaires';
import {Description ,ImageSection ,Product} from '../import file/import';

const Home = () => {
    return (
        <div className="container-fluid">
        <div className="container-fluid text-center">
         <ImageSection className='img-fluid' image={'home.jpg'}/>
            <Description/>
             <ImageSection className='img-fluid mt-5' image={'produc-img-bg.jpg'} />
             <Product />
             <ImageSection className='img-fluid mt-5 text-center' image={'third-img-section.jpg'} />
               </div>
               <Partenaires />
               </div>
    )
}

export default Home
