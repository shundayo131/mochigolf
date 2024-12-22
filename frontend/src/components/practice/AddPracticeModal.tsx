import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addPractice } from "../../features/practice/practiceSlice";

interface AddPracticeModalProps {
  onClose: () => void;
}

const AddPracticeModal: React.FC<AddPracticeModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const [date, setDate] = useState("");
  const [goal, setGoal] = useState("");
  const [ballsHit, setBallsHit] = useState(0);
  const [club, setClub] = useState("");

  const handleSubmit = () => {
    if (date && goal && ballsHit && club) {
      const newPractice = {
        id: Date.now(),
        date,
        goal,
        ballsHit,
        club,
      };
      dispatch(addPractice(newPractice));
      onClose();
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold text-lg mb-4">Add Practice</h2>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              className="input input-bordered"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Goal</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Balls Hit</span>
            </label>
            <input
              type="number"
              className="input input-bordered"
              value={ballsHit}
              onChange={(e) => setBallsHit(Number(e.target.value))}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Club</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={club}
              onChange={(e) => setClub(e.target.value)}
            />
          </div>

          <div className="modal-action">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPracticeModal;
