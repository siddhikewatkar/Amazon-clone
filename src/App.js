import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {auth} from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51QQECfGGyHymmqTlGzFUURxNVacdgon3HXIJMCHJZzKogSGirCKdBewKM8X69xRqrOG3ofT7QHi1icbXBdDTIkJL00TbkqZrWC');
function App() {

  useEffect(() => {
     //will only run once when the app component loads
     auth.onAuthStateChanged(authUser => { 
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        //the user just logged in/ the user was

        
      }
     })
  }, [])

  return (
    // BEM
  <Router>
   <div className="app">  
    <Routes>
    <Route path="/login" element={[<Login/>]}/>
    <Route path="/checkout" element={[<Checkout/>]}/>
    <Route path="/payment" element ={[
     <Elements stripe={promise}>
      <Payment/>
     </Elements>
  ]}/>
    <Route path="/" element={[<Header/>, <Home/>]}/>
    </Routes>
    </div>
    </Router>
    );
 
}
export default App;
