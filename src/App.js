import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppointmentPage from './pages/AppointmentPage';
import { ThemeProvider, Box } from '@mui/material';
import theme from './customTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <Box>
            <AppointmentPage />
          </Box>
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
