import { Grid, Item } from "@mui/material";
import { selectAllApointments } from "./AppointmentSlice";
import AppointmentCard from "./AppointmentCard";

const AppointmentList = () => {
    const appointments = selectAllApointments();

    return (
        <Grid container spacing={4}>
            {appointments.map((appointment) => {
                return (
                    <Grid item xs={12} md={6} key={appointment.id}>
                        <AppointmentCard appointment={appointment} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default AppointmentList;