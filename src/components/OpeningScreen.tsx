import React from 'react';
import './OpeningScreen.css';

interface OpeningScreenProps {
  onOpen: () => void;
}

const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen }) => {
  return (
    <section className="opening-screen" aria-label="Open Ganpati invitation">
      <div className="opening-stage">
        <video
          className="opening-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="Ganpati Bappa temple video"
        >
          <source src="/vidssave.com%20Video%20background%20God's%20Full%20HD%20001Ganesh%20Temple%201%20720p.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
        <div className="opening-overlay" aria-hidden="true" />
        <button className="image-button" onClick={onOpen} type="button" aria-label="Tap to open invitation">
          <span>🪔 Tap to Open Invitation 🪔</span>
        </button>
      </div>
    </section>
  );
};

export default OpeningScreen;
