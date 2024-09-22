import React from 'react';
import { BsHouse, BsFillStarFill } from 'react-icons/bs';
import { FaInstagram, FaFacebook, FaTelegram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import BottomHeader from './BottomHeader';

function Header() {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      padding: '10px 20px',
      borderBottom: '2px solid #007bff',
      flexWrap: 'wrap',
      transition: 'background-color 0.3s ease',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    headerRight: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
    },
    badgeIcon: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      transition: 'transform 0.2s ease',
    },
    badgeText: {
      fontWeight: 'bold',
      fontSize: '16px',
      color: '#333',
    },
    referralBanner: {
      textAlign: 'center',
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      margin: '15px 0',
      fontSize: '14px',
      fontWeight: 'bold',
      transition: 'transform 0.3s ease',
    },
    walletSection: {
      display: 'flex',
      justifyContent: 'space-around',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      flexWrap: 'wrap',
    },
    walletCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '15px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '120px',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      margin: '10px',
    },
    walletCardHover: {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'scale(1.05)',
    },
    leaderboardSection: {
      textAlign: 'center',
      padding: '10px',
      backgroundColor: '#ffeb3b',
      borderRadius: '8px',
      fontWeight: 'bold',
      margin: '20px 0',
    },
    socialMediaTask: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '10px 0',
    },
    socialMediaIcon: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontWeight: 'bold',
      color: '#333',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, color 0.3s ease', // Animation for icons
      margin: '10px',
    },
    socialMediaText: {
      marginTop: '5px',
      fontSize: '12px',
    },
  };

  return (
    <>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <BsHouse size={28} style={{ color: '#007bff' }} />
        </div>
        <div style={styles.headerRight}>
          <div style={styles.badgeIcon}>
            <BsFillStarFill size={24} style={{ color: '#FFD700' }} />
            <span style={styles.badgeText}>3982</span>
          </div>
          <div style={styles.badgeIcon}>
            <GiWallet size={24} style={{ color: 'green' }} />
            <span style={styles.badgeText}>₹2875.00</span>
          </div>
          <div style={styles.badgeIcon}>
            <RiMoneyDollarCircleLine size={24} style={{ color: 'blue' }} />
            <span style={styles.badgeText}>₹1000</span>
          </div>
          <div style={styles.badgeIcon}>
            <FiUsers size={24} style={{ color: 'orange' }} />
            <span style={styles.badgeText}>V</span>
          </div>
        </div>
      </div>

      <div style={styles.referralBanner}>
        <p>Taskplanet. Get 10 Points on every referral.</p>
      </div>

      <div style={styles.walletSection}>
        {['Wallet: ₹2875', 'Earnings: ₹2875', 'Referrals: 2417'].map((text, index) => (
          <div
            key={index}
            style={{ ...styles.walletCard, ...(index === 0 ? styles.walletCardHover : {}) }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {index === 0 ? <GiWallet size={32} style={{ marginBottom: '10px', color: 'green' }} /> : 
            index === 1 ? <RiMoneyDollarCircleLine size={32} style={{ marginBottom: '10px', color: 'blue' }} /> : 
            <FiUsers size={32} style={{ marginBottom: '10px', color: 'orange' }} />}
            <p>{text}</p>
          </div>
        ))}
      </div>

      <div style={styles.leaderboardSection}>
        <p>Weekly Leaderboard - Win ₹150</p>
      </div>

      <div style={styles.socialMediaTask}>
        {[{icon: FaInstagram, color: '#E4405F'}, {icon: FaFacebook, color: '#4267B2'},
          {icon: FaTelegram, color: '#0088cc'}, {icon: FaLinkedin, color: '#0077B5'},
          {icon: FaYoutube, color: '#FF0000'}].map(({icon: Icon, color}, index) => (
          <div
            style={styles.socialMediaIcon}
            key={index}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
          >
            <Icon size={36} style={{ color }} />
            <p style={styles.socialMediaText}>{Icon.displayName || 'Social'}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
