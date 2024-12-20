import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';

const Layout = () => {

  // TODO - implement Auth logic here
  const isAuthenticated = true // hardcorded for test 

  return (
    <Routes>
      {!isAuthenticated ? (
        <Route path="/*" element={<AuthLayout />} />
      ) : (
        <Route path="/*" element={<MainLayout />} />
      )}
    </Routes>
  );
};

export default Layout;
