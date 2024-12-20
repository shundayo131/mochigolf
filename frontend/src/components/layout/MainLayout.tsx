import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from '../common/Header';
import SideNav from '../common/SideNav';
import Practice from '../../pages/Practice';
import Trend from '../../pages/Trend';
import Clubs from '../../pages/Clubs';
import Settings from '../../pages/Settings';

const MainLayout = () => {
  console.log('MainLayout')

  return (
    <div className="flex flex-col h-screen">
    {/* Header */}
    <Header />

    {/* Body */}
    <div className="flex flex-1">
      {/* SideNav (hidden on small screens, shown on larger screens) */}
      <aside className="hidden md:block md:w-60 bg-base-200">
        <SideNav />
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-base-100">
        <Routes>
          <Route path="/practice" element={<Practice />} />
          <Route path="/trend" element={<Trend />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div>Welcome to Mochigolf!</div>} />
        </Routes>
      </div>
    </div>
  </div>
  );
};

export default MainLayout;
