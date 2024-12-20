import { configureStore } from '@reduxjs/toolkit';

// Import reducers 
import counterReducer from '../features/test/counterSlice';

export const store = configureStore({
  reducer: {
    // All reducers will be added here 
    counter: counterReducer,  // Add counterReducer for testign redux
  },  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;