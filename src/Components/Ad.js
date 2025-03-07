import React from 'react';

const Ad = ({ data }) => {
  if (!data) return null;

  return (
    <div className="professional-ad">
      <div className="ad-badge">Sponsored</div>
      <img src={data.imageUrl} alt="Ad" className="ad-image" />
      <div className="ad-content">
        <h3>{data.headline}</h3>
        <p>{data.description}</p>
        <button 
          className="ad-button"
          onClick={() => window.open(data.targetUrl)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
