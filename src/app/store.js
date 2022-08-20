import { configureStore } from '@reduxjs/toolkit';
// import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import carReduce from '../features/car/carSlice';

export const store = configureStore({
  reducer: {
    car: carReduce,
  },
});
