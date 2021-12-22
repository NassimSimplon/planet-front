import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
    const auth = useSelector((state) => state.signInStore);
    const dispatch = useDispatch();
    const renderLoggedInLinks = () => {
        return(
            <div id='dashboard-footer'><h1 id='dashboard-footer-title'>©copy Right</h1></div>
        )
        
    }
   const renderNonLoggedInLinks =()=>{
       return(
        <div className="container-fluid footer">
        <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 footer-col ">
            <h3>SOLUTIONS</h3><br/>
            <h6><a href='http://' >PAYGATE</a></h6>
            <h6><a href='http://' >INDOOR-POSITION-SYSTEM</a></h6><br/>
            <h5><a href='http://' >CONTACT</a></h5><br/><br/> <br/>
        </div> 
        <div className="col-lg-4 col-md-4 col-sm-12  footer-col">
        <h3>LOCATIONS</h3><br/>
            <h5>France</h5>
            <h6>Tél : (+336) 52 72 42 33</h6><br/>
            <h5>Tunis</h5>
            <h6>Technology Pole Manouba <br/>Tél : (+216) 26 41 09 47</h6><br/><br/> <br/>
        </div> 
        <div className="col-lg-4 col-md-4 col-sm-12  text-center">
        <h3>FOLLOW US</h3>
        <div className='icons-section'>
          <svg  id='icons' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
             </svg>
             <svg id='icons' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
           </svg>
           <svg id='icons' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
       </svg>
        </div>
        </div> 
        </div> </div>  
       )
   }
    return (
        
     
               <div>  {auth.authenticate
              ? renderLoggedInLinks()
              : renderNonLoggedInLinks()} </div>
     
    )
}

export default Footer
