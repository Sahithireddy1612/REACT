import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../routing/home'
import AboutScreen from '../routing/about'
import SettingScreen from '../routing/settings'
import BlogScreen from '../routing/blog'
import InvalidScreen from '../routing/invalidscreen'
//import CustomNavbar from '../../stylingcomponents/navbar/navbar'

const routeConfig = [
  { path: '/', Component: HomeScreen },
  { path: '/about', Component: AboutScreen },
  { path: '/settings', Component: SettingScreen },
  { path: '/blog', Component: BlogScreen }
];

function NavigationStack() {
  return (
  <>
  <BrowserRouter>
      
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={<route.Component />} />
        ))}
        <Route path="*" element={<InvalidScreen />} />
      </Routes>
    </BrowserRouter>
  
  </>
  )
}

export default NavigationStack