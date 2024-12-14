export interface Practice {
  userId: string;
  practiceId: string;
  date: string;
  practiceGoal: string;
  clubsUsed: {
    [key: string]: boolean;  // Maps to GOLF_CLUBS structure
  };
  ballsHit: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePracticeRequest {
  date: string;
  practiceGoal: string;
  clubsUsed: {
    [key: string]: boolean;
  };
  ballsHit: number;
  notes?: string;
}