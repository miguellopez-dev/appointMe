import { configureStore } from '@reduxjs/toolkit';
import { appointmentReducer } from '../features/appointment/AppointmentSlice';
import { userReducer } from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
    user: userReducer
  },
});
