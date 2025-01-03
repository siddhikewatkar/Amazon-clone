import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {auth} from "./firebase";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
           e.preventDefault();
           //some fancy firebase login shitt..
           auth
              .signInWithEmailAndPassword(email, password)
              .then(auth => {
                navigate('/')
              })
              .catch(error => alert(error.message))
    }

    const register = e => {
           e.preventDefault();

           auth
               .createUserWithEmailAndPassword(email, password)
               .then((auth) => {
                //it successfully created new user with email and password
                  if(auth) {
                    navigate('/')
                  }
               })
               .catch(error => alert(error.message))
               
           //do some fancy firebase register shitttt...
    }
    
  return (
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src = "https://cdn2.downdetector.com/static/uploads/logo/amazon.png" alt='sunill'/>
        </Link>

        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} 
                onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value ={password} onChange={e =>setPassword(e.target.value)} />

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
            </p>
            
            <button onClick={register} className='login__registerButton'>
                Create your amazon account
            </button>
        </div>
    </div>
)
}

export default Login
