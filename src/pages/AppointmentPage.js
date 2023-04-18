import { Container, Box, Fab, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AppointmentList from "../features/appointment/AppointmentList";
import SideBar from '../components/SideBar'

const AppointmentPage = () => {
    const StyledFab = styled(Fab)({
        position: 'fixed',
        zIndex: 1,
        bottom: 16,
        left: '85%',
        right: 0,
        margin: '0 auto',
    });

    return (
        <Box >
            <SideBar />
            <Container>
                <AppointmentList />
            </Container>
            <StyledFab color='secondary'>
                <AddIcon fontSize='large' />
            </StyledFab>
        </Box>
    );
}

export default AppointmentPage;