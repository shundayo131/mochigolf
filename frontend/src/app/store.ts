import { configureStore } from '@reduxjs/toolkit';

// Import reducers 
import practiceReducer from "../features/practice/practiceSlice";


export const store = configureStore({
  reducer: {
    // All reducers will be added here 
    practices: practiceReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;