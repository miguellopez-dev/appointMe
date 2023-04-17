import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(34,47,62,1)' // Deep Blue
        },
        secondary: {
            main: 'rgba(49, 163, 159, 1)' // Teal
        },
        error: {
            main: 'rgba(191, 0, 0, 1)', // Dark Red
        },
        warning: {
            main: 'rgba(255, 144, 0, 1)' //Orange
        },
        info: {
            main: 'rgba(180, 180, 180, 1)' //Soft Gray
        },
        success: {
            main: 'rgba(175, 214, 125, 1)' // Light Green
        }
    }
});

export default theme;