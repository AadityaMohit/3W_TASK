import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './SocialMedial.css';

function SocialMedial() {
  const tasks = [
    'Monthly leaderboard winner 🏆',
    'Share With 5 friends!',
    'Earn daily win Big Reward!',
    'Claim 10 Points Every Hour',
    'Weekly Leaderboard Prize',
    'Like the Instagram Post',
  ];

  return (
    <div className="social-media-container">
     
      <div className="task-details">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
            <div className="task-info">
              <p>{task}</p>
              <button className="points-button">Claim 10 Points</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialMedial;
