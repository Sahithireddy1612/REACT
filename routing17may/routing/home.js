import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate('/about');
  };

  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <button onClick={handleButtonClick}>Go to About</button>
    </div>
  );
};

export default HomeScreen;
