// Loader.js
import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import your CSS file

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000); // Adjust the delay as needed

    // Clear the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${loading ? "loading" : ""}`}>
      {loading ? (
        <div className='name-animation'>
          <div className='letter'>T</div>
          <div className='letter'>H</div>
          <div className='letter'>A</div>
          <div className='letter'>P</div>
          <div className='letter'>A</div>
          <div className='letter'>R</div>
          <div className='letter'>S</div>
          <div className='letter'>H</div>
          <div className='letter'>A</div>
          <div className='letter'>R</div>
          <div className='letter'>E</div>
        </div>
      ) : (
        <div>
          {children} {/* Render the components passed as children */}
        </div>
      )}
      {loading && <div className='loader'></div>}
    </div>
  );
};

export default Loader;
