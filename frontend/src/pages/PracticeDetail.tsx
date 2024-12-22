import React from "react";
import { useParams } from "react-router-dom";

const PracticeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Practice Detail</h1>
      <p>Practice ID: {id}</p>
      {/* Fetch and display additional practice details here */}
    </div>
  );
};

export default PracticeDetail;
