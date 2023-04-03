import { Container, Box } from "@mui/material";
import AppointmentList from "../features/appointment/AppointmentList";

const AppointmentPage = () => {

    const theme = {
        spacing: 2,
    }
    return (
        <Box sx={{ mt: 5}}>
            <Container>
                <AppointmentList />
            </Container>
        </Box>
    );
}

export default AppointmentPage;