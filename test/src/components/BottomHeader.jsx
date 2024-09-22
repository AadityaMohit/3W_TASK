import React from 'react';
import { BsHouse, BsPlusCircle, BsGear } from 'react-icons/bs';

function BottomHeader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#007bff',
      padding: '15px',
      borderRadius: '10px',
    }}>
      <div
        className="nav-item"
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '14px',
          backgroundColor: '#0056b3',
          padding: '8px 12px',
          borderRadius: '8px',
          transition: 'transform 0.2s', // for hover effect smoothness
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#003885';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <BsHouse size={24} style={{ color: '#000' }} />
        <p>Home</p>
      </div>
      <div
        className="nav-item"
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '14px',
          backgroundColor: '#0056b3',
          padding: '8px 12px',
          borderRadius: '8px',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#003885';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <BsPlusCircle size={24} style={{ color: '#000' }} />
        <p>Add</p>
      </div>
      <div
        className="nav-item"
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '14px',
          backgroundColor: '#0056b3',
          padding: '8px 12px',
          borderRadius: '8px',
          transition: 'transform 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#003885';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0056b3';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <BsGear size={24} style={{ color: '#000' }} />
     
        <p>Settings</p>
      </div>
    </div>
  );
}

export default BottomHeader;
