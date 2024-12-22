import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../config/api";

// TODO - move interface to config/types.ts

interface Practice {
  id: number;
  date: string;
  goal: string;
  ballsHit: number;
  club: string;
}

interface PracticeState {
  practices: Practice[];
  status: "idle" | "loading" | "failed";
}

const initialState: PracticeState = {
  practices: [],
  status: "idle",
};

// Async thunk to fetch practices (example)
export const fetchPractices = createAsyncThunk(
  "practices/fetchPractices",
  async () => {
    // Simulate an API call
    console.log('API ENDPOINT', ENDPOINTS.practice.create)
    const response = await new Promise<Practice[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              id: 1,
              date: "2024-12-20",
              goal: "Improve swing accuracy",
              ballsHit: 50,
              club: "7 Iron",
            },
            {
              id: 2,
              date: "2024-12-22",
              goal: "Driving consistency",
              ballsHit: 100,
              club: "Driver",
            },
          ]),
        1000
      )
    );
    return response;
  }
);

const practiceSlice = createSlice({
  name: "practices",
  initialState,
  reducers: {
    addPractice: (state, action: PayloadAction<Practice>) => {
      state.practices.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPractices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPractices.fulfilled, (state, action) => {
        state.status = "idle";
        state.practices = action.payload;
      })
      .addCase(fetchPractices.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addPractice } = practiceSlice.actions;

export default practiceSlice.reducer;
