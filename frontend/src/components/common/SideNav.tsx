import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => (
  <aside className="w-60 bg-base-200 p-4">
    <ul className="menu menu-vertical">
      <li>
        <NavLink to="/practice" className="text-lg font-semibold">
          Practices
        </NavLink>
      </li>
      <li>
        <NavLink to="/trend" className="text-lg font-semibold">
          Trend
        </NavLink>
      </li>
      <li>
        <NavLink to="/clubs" className="text-lg font-semibold">
          Your Clubs
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" className="text-lg font-semibold">
          Settings
        </NavLink>
      </li>
    </ul>
  </aside>
);

export default SideNav;
