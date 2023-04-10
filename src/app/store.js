import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { appointmentReducer } from '../features/appointment/AppointmentSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer
  },
});
