import React from "react";

interface Practice {
  id: number;
  date: string;
  goal: string;
  ballsHit: number;
  club: string;
}

interface PracticeItemProps {
  practice: Practice;
  onClick: () => void;
}

const PracticeItem: React.FC<PracticeItemProps> = ({ practice, onClick }) => {
  return (
    <div
      className="card card-bordered shadow hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="card-body">
        <h3 className="card-title">{practice.date}</h3>
        <p>Goal: {practice.goal}</p>
        <p>Balls Hit: {practice.ballsHit}</p>
        <p>Club: {practice.club}</p>
      </div>
    </div>
  );
};

export default PracticeItem;
