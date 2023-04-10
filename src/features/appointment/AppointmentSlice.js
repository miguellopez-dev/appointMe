import { APPOINTMENTS } from "../../app/shared/APPOINTMENTS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointmentsArray: APPOINTMENTS
};

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        deleteAppointment: (state, action) => {
            state.appointmentsArray.splice(state.appointmentsArray.map(e => e.id).indexOf(action.payload), 1);
        }
    }
});

export const appointmentReducer = appointmentsSlice.reducer;

export const { deleteAppointment } = appointmentsSlice.actions;

export const selectAllApointments = (state) => {
    return state.appointments.appointmentsArray;
};

export const removeSelectedAppointment = (id) => (state) => {
    console.log(id)
    state.appointments.appointmentsArray.splice(APPOINTMENTS.map(e => e.id).indexOf(id), 1);
    return console.log(state, APPOINTMENTS);
}