import { useForm, Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField, Fab, styled, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const NewAppointmentForm = () => {
    const StyledFab = styled(Fab)({
        position: 'fixed',
        zIndex: 1,
        bottom: 16,
        left: '85%',
        right: 0,
        margin: '0 auto',
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { control, register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch('example'));

    return (
        <>
            <StyledFab color='secondary' onClick={handleOpen}>
                <AddIcon fontSize='large' />
            </StyledFab>
            <Dialog open={open} onClose={handleClose} aria-labelledby='Make new appointment'>
                <DialogTitle>New Appointment</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name='Appointment'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField {...field} label='Appointment Name' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='Type'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Type of Appointment' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='Apoointment With'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Appointment With' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='Date and Time'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <DateTimePicker {...field} label='Date and Time' sx={{width: '100%', marginTop: 2, marginBottom: 1}}  />}

                        />
                        <Controller
                            name='Description'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Description' fullWidth margin='normal' multiline rows={4} />}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type='submit'>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default NewAppointmentForm;