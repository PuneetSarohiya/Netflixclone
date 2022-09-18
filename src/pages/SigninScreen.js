import React, { useRef, useState } from 'react';
import SignupScreen from './SignupScreen';
import { auth,provider } from '../firebase';
import './SigninScreen.css';
import googleLogo from "../images/google.png";

import { motion } from 'framer-motion';
import { formAnimation, formTransition } from '../animations/signupScreen';

const SigninScreen = () => {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
  const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
			
			})
			.catch((error) => {
			
			});
	};


  return (
    <>
      {signUp ? (
        <SignupScreen />
      ) : (
        <motion.div
          className='signinScreen'
          initial='out'
          animate='in'
          exit='out'
          variants={formAnimation}
          transition={formTransition}
        >
          <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type='email' placeholder='Email' />
            <input ref={passwordRef} type='password' placeholder='Password' />
            <button type='submit' onClick={signIn}>
              Sign In
            </button>
            <h4>
      
              <span className='signinScreen_gray'>New to Netflix?</span>{' '}
              <span
                className='signinScreen_link'
                onClick={() => setSignUp(true)}
              >
                Sign Up now.
              </span>
            </h4>
          </form>
          <div className='signupScreen_withGoogle'>
					<img
						onClick={signInWithGoogleHandler}
						src={googleLogo}
						alt='Logo'
					/>
					<h5 onClick={signInWithGoogleHandler}>Login With Google</h5>
				</div>
        
        </motion.div>
      )}
    </>
  );
};

export default SigninScreen;

