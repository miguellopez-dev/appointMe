import { configureStore } from '@reduxjs/toolkit';
import { appointmentReducer } from '../features/appointment/AppointmentSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer
  },
});
