import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import HomeScreen from '../routing/home';
import AboutScreen from '../routing/about';
import SettingScreen from '../routing/settings';
import BlogScreen from '../routing/blog';
import InvalidScreen from '../routing/invalidscreen';

const routeConfig = [
  { path: '/', Component: HomeScreen },
  { path: '/about', Component: AboutScreen },
  { path: '/settings', Component: SettingScreen },
  { path: '/blog', Component: BlogScreen }
];

function NavigationStack() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<route.Component />} 
          />
        ))}
        <Route 
          path="*" 
          element={<InvalidScreen />} 
        />
      </Routes>
      <button onClick={() => handleNavigation('/about')}>Go to About</button>
    </BrowserRouter>
  );
}

export default NavigationStack;
