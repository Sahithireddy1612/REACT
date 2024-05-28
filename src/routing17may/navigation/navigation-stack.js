import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from '../routing/home'
import AboutScreen from '../routing/about'
import SettingScreen from '../routing/settings'
import BlogScreen from '../routing/blog'
import InvalidScreen from '../routing/invalidscreen'

function NavigationStack() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route   path='/'  Component={HomeScreen}  />
    <Route   path='/about'  Component={AboutScreen}  />
    <Route   path='/settings'  Component={SettingScreen}  />
    <Route   path='/blog'  Component={BlogScreen}  />

    <Route   path='*'  Component={InvalidScreen}  />
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default NavigationStack