import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppointmentPage from './pages/AppointmentPage';
import { ThemeProvider, Box } from '@mui/material';
import theme from './customTheme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box>
          <AppointmentPage />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
