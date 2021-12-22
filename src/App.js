import './App.css';
import {Navbar ,Home,Footer,Apropo,Partenaires,Platforme,Contact ,Carriers,SignIn,DashHome,PrivetRoute,Partenaire} from './import file/import';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {isUserLoggedIn} from './authentification/Sign in/Actions'
import Services from './Dashboard/Pages/Services';
function App() {
 
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.signInStore);

   
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

 
  return (
    <div>
    <BrowserRouter>
    <div >
    <Navbar />
    <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/Apropo' component={Apropo} />
     <Route exact path='/Partenaires' component={Partenaires} />
     <Route exact path='/Platforme' component={Platforme} />
     <Route exact path='/contact' component={Contact} />
     <Route exact path='/carriers' component={Carriers} />
     <Route exact path='/signIn' component={SignIn} />
     <PrivetRoute exact path='/dashboard' component={DashHome} />
     <PrivetRoute exact path='/dashboard/Partenaire' component={Partenaire} />
     <PrivetRoute exact path='/dashboard/Services' component={Services} />

      
     
     </Switch>
     <Footer />  
     </div>
     </BrowserRouter>
   
     </div>
  );
}

export default App;
