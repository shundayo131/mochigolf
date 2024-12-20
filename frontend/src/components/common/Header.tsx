import React from 'react';

const Header = () => (
  <header className="navbar bg-base-300 shadow-md">
    <div className="flex-1">
      <h1 className="text-xl font-bold">Mochigolf</h1>
    </div>
    <div className="flex-none">
      <button className="btn btn-primary">Logout</button>
    </div>
  </header>
);

export default Header;
