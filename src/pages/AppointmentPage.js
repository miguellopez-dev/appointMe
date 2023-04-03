import { Container, Box } from "@mui/material";
import AppointmentList from "../features/appointment/AppointmentList";

const AppointmentPage = () => {
    return (
        <Box sx={{ m: 'auto'}}>
            <Container>
                <AppointmentList />
            </Container>
        </Box>
    );
}

export default AppointmentPage;