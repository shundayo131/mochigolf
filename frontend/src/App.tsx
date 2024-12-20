import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';

const App: React.FC = () => {
  console.log('app');

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-base-200">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
