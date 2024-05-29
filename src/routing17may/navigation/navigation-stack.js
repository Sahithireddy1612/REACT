import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from '../routing/home';
import AboutScreen from '../routing/about';
import SettingScreen from '../routing/settings';
import BlogScreen from '../routing/blog';
import InvalidScreen from '../routing/invalidscreen';
import CartScreen from '../routing/cart';
import CustomNavbar from '../../stylingcomponents/navbar/navbar';

const routeConfig = [
  { path: '/', Component: HomeScreen },
  { path: '/about', Component: AboutScreen },
  { path: '/settings', Component: SettingScreen },
  { path: '/blog', Component: BlogScreen },
  { path: '/cart', Component: CartScreen }
];

function NavigationStack() {
  return (
    <BrowserRouter>
    
      <nav>
       
         <Link to="/">{HomeScreen}</Link>
          <Link to="/about">{AboutScreen}</Link>
          <Link to="/settings">{SettingScreen}</Link>
          <Link to="/blog">{BlogScreen}</Link>
          <Link to="/cart">{CartScreen}</Link>
    
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
    </BrowserRouter>
  );
}

export default NavigationStack;
