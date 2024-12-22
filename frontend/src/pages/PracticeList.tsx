import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPractices } from "../features/practice/practiceSlice";
import PracticeItem from "../components/practice/PracticeItem";
import AddPracticeModal from "../components/practice/AddPracticeModal";
import { useNavigate } from "react-router-dom";

const PracticeList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { practices, status } = useAppSelector((state) => state.practices);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    dispatch(fetchPractices());
  }, [dispatch]);

  const handlePracticeClick = (id: number) => {
    navigate(`/practice/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Practice List</h1>
      <button
        className="btn btn-primary mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Add Practice
      </button>

      {status === "loading" && <p>Loading practices...</p>}
      {status === "failed" && <p>Failed to load practices.</p>}

      <div className="space-y-4">
        {practices.map((practice) => (
          <PracticeItem
            key={practice.id}
            practice={practice}
            onClick={() => handlePracticeClick(practice.id)}
          />
        ))}
      </div>

      {isModalOpen && <AddPracticeModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default PracticeList;
