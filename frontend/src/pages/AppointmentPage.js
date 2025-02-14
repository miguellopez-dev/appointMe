import { Container, Box, Fab, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AppointmentList from "../features/appointment/AppointmentList";
import SideBar from '../components/SideBar'
import NewAppointmentForm from "../features/appointment/NewAppointmentForm";

const AppointmentPage = () => {


    return (
        <Box >
            <SideBar />
            <Container>
                <AppointmentList />
            </Container>
            <NewAppointmentForm />
        </Box>
    );
}

export default AppointmentPage;