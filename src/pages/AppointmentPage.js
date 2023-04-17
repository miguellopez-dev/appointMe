import { Container, Box } from "@mui/material";
import AppointmentList from "../features/appointment/AppointmentList";
import SideBar from '../components/SideBar'

const AppointmentPage = () => {

    return (
        <Box >
            <SideBar />
            <Container>
                <AppointmentList />
            </Container>
        </Box>
    );
}

export default AppointmentPage;