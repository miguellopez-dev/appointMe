import { APPOINTMENTS } from "../../app/shared/APPOINTMENTS";

export const selectAllApointments = () => {
    return APPOINTMENTS;
};

export const removeSelectedAppointment = (appointment) => {
    APPOINTMENTS.splice(APPOINTMENTS.map(e => e.id).indexOf(appointment), 1);
    return console.log(appointment, APPOINTMENTS);
}