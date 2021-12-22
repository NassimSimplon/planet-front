import React from 'react';
 import '../App.css';
 import { useSelector, useDispatch } from "react-redux";
 import {signout} from "../authentification/Sign in/Actions";
 import {Redirect} from 'react-router-dom';
 import jwt_decode from "jwt-decode";
import '../Dashboard/Dashboard.css'

 import {Link} from 'react-router-dom'
   const Navbar = () => {
    const auth = useSelector((state) => state.signInStore);
    const dispatch = useDispatch();
    const logout = () => {
      dispatch(signout()) && <Redirect to={`signIn`} />;
    };
    const relogout = () => {
      window.location.reload(logout())  ;
    };
       //Responsive component
       const ShowNavbar = ()=>{
           const navbar = document.getElementById('show').innerHTML = `
           <div className='container-fluid' id='responsive-navbar-section'  >
           <div className='row'>
               <div className='col-md-12  mt-5' id='responsive-logo-section'>
                   <img className='img-fluid' id='responsive-logo' src='/logo.png' alt='logo' />
               </div>   
          </div>
          <div className='row> 
          <div className='col-lg-6' id='responsive-list-section'>
          <ul id='responsive-list'>
          <li id='responsive-li'>SOLUTIONS</li>
          <li id='responsive-li'>APROPOS</li>
          <li id='responsive-li'>PARTENAIRES</li>
          <li id='responsive-li'>PLATFORME</li>
          <li id='responsive-li'>CONTACT</li>
          <li id='responsive-li'>CARRIERS</li>
          </ul>
           </div>
           </div>  
                   
             </div>
           `
           return navbar
       }

       //Dashboard Navbar 
       const renderLoggedInLinks = () => {
        const result = localStorage.getItem("token");
        const token = jwt_decode(result);
        console.log(token)
        return (
            <div  >
               
                 <div class="area"></div><nav class="main-menu">
            <ul id='dashNav'>
            <Link to="/dashboard">      <li className=' fa fa-home fa-2x'>
                    <a href="">
                    <i class="fa fa-laptop fa-2x">D</i>

                       
                        <span class="nav-text">
                            Dashboard
                        </span>
                    </a>
                  
                </li> </Link>
            <Link to="/dashboard/Partenaire">    <li class="has-subnav">
                    <a href="#">
                        <i class="fa fa-laptop fa-2x">P</i>
                        <span class="nav-text">
                        Partenaires
                        </span>
                    </a>
                    
                </li></Link>
                <Link to="/dashboard/Services"><li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-list fa-2x">S</i>
                        <span class="nav-text">
                           Services
                        </span>
                    </a>
                    
                </li></Link>    
                <li class="has-subnav">
                    <a href="#">
                       <i class="fa fa-folder-open fa-2x">P</i>
                        <span class="nav-text">
                          Products
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-bar-chart-o fa-2x">C</i>
                        <span class="nav-text">
                           Contacts
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-font fa-2x">C</i>
                        <span class="nav-text">
                         Carriers
                        </span>
                    </a>
                </li>
              
                
                
                
            </ul>

            <ul class="logout">
                <li onClick={relogout}>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x">
                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
                         </i>
                        <span class="nav-text" >
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
              
            </div>
        )
    }

    const renderNonLoggedInLinks = () => {
        return (
            <div className='row'>
            <div className='col-lg-3  logo-section'>
            <Link to="/">   <img className='img-fluid logo mt-1' src='/logo.png' alt='logo' /> </Link>
            </div>
            <div className='col-lg-6 ' id='navbar-col'>
                <ul>
                <li>SOLUTIONS</li>
                <Link to="/Apropo"><li>APROPOS</li> </Link>
                <Link to="/Partenaires"><li>PARTENAIRES</li> </Link>
                <Link to="/Platforme"><li>PLATFORME</li> </Link>
                <Link to="/contact"><li>CONTACT</li> </Link>
                <Link to="/carriers"><li>CARRIERS</li> </Link>
                </ul>
            </div>
            <div className='col-lg-3  '>
            </div>
           </div>
        )}

     return (
         <div> 
         <div className='container text-center' id='navbar' >
         {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()}
         </div>
         <div className='container-fluid' id='responsive-navbar-btn-section'>              
         <button id='responsive-navbar-btn' onClick={()=>ShowNavbar()}>x</button>
          </div>
         <div id='show'><br/></div>
         
          </div>
     )
 }
 
 export default Navbar
 