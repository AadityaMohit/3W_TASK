import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram, FaLinkedin, FaYoutube } from 'react-icons/fa';  
import { GiWallet } from 'react-icons/gi';  
import { RiMoneyDollarCircleLine } from 'react-icons/ri';  
import { FiUsers } from 'react-icons/fi';  
// Importing an icon for points
import './App.css';

import Header from './components/Headerss';
import BottomHeader from './components/BottomHeader';
import SocialMedial from './components/SocialMedial';

const App = () => {
  return (
    <div className="app-container">
      <Header/>

<BottomHeader/>
<SocialMedial/>

    </div>
  );
};

export default App;
