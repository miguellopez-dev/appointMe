import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import UserLoginForm from '../features/user/UserLoginForm';



const ResponsiveAppBar = () => {

    return (
        <AppBar position='static' sx={{ bgcolor: 'secondary.main', marginBottom: 5 }}>
            <Container maxWidth='x1'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: '700',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1
                        }}
                    >
                        AppointMe
                    </Typography>
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 700,
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none'
                        }}
                    >
                        AppointMe
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        <UserLoginForm />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;