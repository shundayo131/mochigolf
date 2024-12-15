// src/pages/HomePage.tsx
import React from 'react';

const HomePage: React.FC = () => {

  // TODO: Write a component code 

  // Sample code 
  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Golf Practice Tracker</h2>
          
          {/* Practice Form Section */}
          <div className="mt-4">
            <button className="btn btn-primary">Add New Practice</button>
          </div>

          {/* Practice List Section */}
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Recent Practices</h3>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Goal</th>
                    <th>Clubs Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-12-14</td>
                    <td>Improve putting</td>
                    <td>Putter, 7-Iron</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;