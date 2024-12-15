import { configureStore } from '@reduxjs/toolkit';

const placeholderReducer = (state = {}, action: any) => state;

export const store = configureStore({
  reducer: {
    // Reducer will be added here 
    placeholder: placeholderReducer, // Add a placeholder reducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;