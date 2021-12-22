import React from 'react'
 
  
const Partenaires = () => {
 
    return (
        <div  className='container-fluid'>
        <h1>OUR CUSTOMERS</h1>
        <div className='row mt-3'>
            <div className='col-lg-3 col-md-6 col-sm-12  mt-5 text-center'>
            <img clasName='img-fluid ' id='first-img'   src='01.png' alt='Davidson-company' />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12  mt-5 text-center'>
            <img clasName='img-fluid mt-5' id='partenaire-img' src='02.png' alt='Orange' />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12  mt-5 text-center'>
            <img clasName='img-fluid  mt-5' id='partenaire-img' src='03.png' alt='Carrefour' />
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12  mt-5 text-center'>
            <img clasName='img-fluid  mt-5' id='partenaire-img' src='04.png' alt='abertis-compant' />
            </div>
        </div>
 
  
        </div>
    )
}

export default Partenaires
