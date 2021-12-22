import { createStore, applyMiddleware, combineReducers } from "redux";//Redux Thunk
import thunk from 'redux-thunk';
//import All Reducers
import {productReducer,partenaireReducer,serviceReducer,contactReducer,carrierReducer,adminReducer,signInReducer} from '../../import file/import';
//Reducers
const reducers = combineReducers({

   productStore:productReducer,
   partenaireStore:partenaireReducer,
   serviceStore:serviceReducer,
   contactStore:contactReducer,
   carrierStore:carrierReducer,
   adminStore:adminReducer,
   //Sign In
   signInStore:signInReducer
   

});

//Store 
const store = createStore(reducers,applyMiddleware(thunk));
//Export Store
export default store;
 


