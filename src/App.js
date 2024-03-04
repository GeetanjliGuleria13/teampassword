import './App.css';
import {Routes, Route, Navigate } from "react-router-dom";
import Home from '../src/pages/Home';
import PlansPricing from '../src/pages/PlansPricing';
import ProductTour from '../src/pages/Producttour';
import PasswordGenerator from '../src/pages/Passwordgenerator';
import Blog from '../src/pages/Blog';
import Security from '../src/pages/Security';
import Customers from '../src/pages/Customers';
import Help from '../src/pages/Help';
import SignIn from '../src/pages/Login';
import SignUp from '../src/pages/Signup';
import Navbar from './Components/Header/Navbar';
import Footernavbar from './Components/Footer/Footernavbar';
import Privacypolicy from '../src/pages/Privacypolicy' ;
import Status from '../src/pages/Status';
import Support from '../src/pages/Support';
import Termsofuse from '../src/pages/Termsofuse';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/planspricing' Component={PlansPricing}></Route>
        <Route exact path='/producttour' Component={ProductTour}></Route>
        <Route exact path='/blog' Component={Blog}></Route>
        <Route exact path='/security' Component={Security}></Route>
        <Route exact path='/passwordgenerator' Component={PasswordGenerator}></Route>
        <Route exact path='/customers' Component={Customers}></Route>
        <Route exact path='/help' Component={Help}></Route>
        <Route exact path='/login' Component={SignIn}></Route>
        <Route exact path='/signup' Component={SignUp}></Route>
        <Route exact path='/privacypolicy' Component={Privacypolicy}></Route>
        <Route exact path='/status' Component={Status}></Route>
        <Route exact path='/support' Component={Support}></Route>
        <Route exact path='/termsofuse' Component={Termsofuse}></Route>
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
      </Routes>
      <Footernavbar/>
    </>
  );
}

export default App;
