//---------------- Pages Start ---------------------------------------------

export {default as Home }from '../pages/Home';
export {default as Apropo }from '../pages/Apropo';
export {default as Partenaires }from '../pages/Partenaires';
export {default as Platforme }from '../pages/Platforme';
export {default as Contact }from '../pages/Contact';
export {default as Carriers }from '../pages/Carriers';
export {default as SignIn }from '../pages/SignIn';
export {default as DashHome }from '../Dashboard/Components/dashHome';


//---------------- Pages End -----------------------------------------------

//---------------- Components Start ----------------------------------------

export {default as Navbar }from '../Shared/Navbar';
export {default as Description }from '../components/Description';
export {default as Product }from '../components/Product';
export {default as Footer }from '../Shared/Footer.js';

//---------------- Components End ------------------------------------------

//---------------- HOC Start -----------------------------------------------  

export {default as ImageSection }from '../HOC/image Section/ImageSection';
export {default as TextSection }from '../HOC/Text Section/TextSection';
export {default as Form }from '../HOC/Form/Form';
export {default as PrivetRoute }from '../HOC/PrivetRoute.js/PrivetRoute.js';



//---------------- HOC Rnd ------------------------------------------------- 

//---------------- Reducers Start ------------------------------------------ 

//Product Reducer
export {default as productReducer }from '../Redux/Product/Reducer';

//Partenaires Reducer
export {default as partenaireReducer }from '../Redux/Partenaires/Reducer';

//Services Reducer
export {default as serviceReducer }from '../Redux/Services/Reducer';

//Contacts Reducer
export {default as contactReducer }from '../Redux/Contact/Reducer';

//Cariiers Reducer
export {default as carrierReducer }from '../Redux/Carrier/Reducer';

//Admin Reducer
export {default as adminReducer }from '../Redux/Admin/Reducer';

//Sign In Reducer
export {default as signInReducer }from '../authentification/Sign in/Reducer';

//---------------- Reducers Start ------------------------------------------ 

//---------------- Dashboard HOC Start ------------------------------------- 

export {default as GetComponent }from '../Dashboard/HOC/GET Component/GetComponent';

//---------------- Dashboard HOC End ------------------------------------- 

//---------------- Dashboard Pages Start ------------------------------------- 

export {default as Partenaire }from '../Dashboard/Pages/Partenaires';

















