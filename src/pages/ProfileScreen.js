
import React from 'react';
import Nav from '../components/Nav';
import './ProfileScreen.css';
import avatar from '../images/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { motion } from 'framer-motion';
import {
  animationOne,
  transitionOne,
  animationAvatar,
  transitionAvatar,
  animationEmail,
  transitionEmail,

} from '../animations/profileScreen';
import Stripe from './Stripe';


const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <motion.h1
          initial='out'
          animate='in'
          variants={animationOne}
          transition={transitionOne}
        >
          Edit Profile
        </motion.h1>
        <div className='profileScreen_info'>
          <motion.img
            initial='out'
            animate='in'
            variants={animationAvatar}
            transition={transitionAvatar}
            src={avatar}
            alt='avatar'
          />
          <div className='profileScreen_details'>
            <motion.h2
              initial='out'
              animate='in'
              variants={animationEmail}
              transition={transitionEmail}
            >
              {user.email}
            </motion.h2>
            <div className='profileScreen_plans'>
            <div className="profileScreen__plans">
                            <h3>Plans</h3>
                       <p>
                    Current date: {" "} 
                    {new Date().toLocaleDateString()}
                </p> 
                                  <div className="profileScreen__plan">
                                <h3>Mobile (480P)</h3>
                                
                                <Stripe price='199' />
                            </div>
                                     <div className="profileScreen__plan">
                                <h3>Basic (720P)</h3>
                                
                                <Stripe price='399' />
                            </div>
                            <div className="profileScreen__plan">
                                <h3>Standard (1080P)</h3>
                                
                                <Stripe price='599' />
                            </div>
                            <div className="profileScreen__plan">
                                <h3>Premium (4k + HDR)</h3>
                                
                                <Stripe price='999' />
                            </div>
                            <button 
                            onClick={() => auth.signOut()}
                            className='profileScreen__signOut'>Sign Out</button>
                        </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
