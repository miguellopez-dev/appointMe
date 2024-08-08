import { Grid, Item } from "@mui/material";
import AppointmentCard from "./AppointmentCard";
import { selectAllApointments } from "./AppointmentSlice";
import { useSelector } from "react-redux";

const AppointmentList = () => {
    const appointments = useSelector(selectAllApointments);

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