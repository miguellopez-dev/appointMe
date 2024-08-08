import { APPOINTMENTS } from "../../app/shared/APPOINTMENTS";
import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
    appointmentsArray: APPOINTMENTS
};

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        deleteAppointment: (state, action) => {
            state.appointmentsArray.splice(state.appointmentsArray.map(e => e.id).indexOf(action.payload), 1);
        },
        addAppointment: (state, action) => {
            const newAppointment = {
                id: state.appointmentsArray.length + 1,
                ...action.payload
            };
            state.appointmentsArray.push(newAppointment);
            console.log(state.appointmentsArray.length);
        }
    }
});

export const appointmentReducer = appointmentsSlice.reducer;

export const { deleteAppointment } = appointmentsSlice.actions;

export const { addAppointment } = appointmentsSlice.actions;

export const selectAllApointments = (state) => {
    return state.appointments.appointmentsArray;
};

export const removeSelectedAppointment = (id) => (state) => {
    console.log(id)
    state.appointments.appointmentsArray.splice(APPOINTMENTS.map(e => e.id).indexOf(id), 1);
    return console.log(state, APPOINTMENTS);
}