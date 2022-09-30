import React, { useContext } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const {from} = location.state || {from:{pathname: "/"}};

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const {displayName, email} = result.user;
          const signedInUser = {
            name: displayName,
            email: email
          }
          setLoggedInUser(signedInUser);
          navigate(from);
           
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>This is Login</h1>
            <button id='GsignIn' onClick={handleGoogleSignIn}> <GoogleIcon /> </button>
            <label htmlFor="GsignIn"> Sign In </label>
   
        </div>
    );
};

export default Login;