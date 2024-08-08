import { useForm, Controller } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';
import { TextField, Fab, styled, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment } from './AppointmentSlice';

const NewAppointmentForm = () => {
    const dispatch = useDispatch();

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

    const [data, setData] = useState(null);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            type: '',
            name: '',
            title: '',
            description: '',
            date: ''
        }
    });
    const onSubmit = (values) => {
        const appointment = {
            type: values.type,
            name: values.name,
            title: values.title,
            description: values.description,
            date: values.date.toJSON()
        };
        console.log(appointment);
        dispatch(addAppointment(appointment));
        handleClose();
    }




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
                            name='title'
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => <TextField {...field} label='Appointment Name' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='type'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Type of Appointment' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='name'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Appointment With' fullWidth margin='normal' />}
                        />
                        <Controller
                            name='date'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { ref, ...rest } }) => <DateTimePicker {...rest} label='Date and Time' sx={{ width: '100%', marginTop: 2, marginBottom: 1 }} />}

                        />
                        <Controller
                            name='description'
                            control={control}
                            render={({ field }) => <TextField {...field} label='Description' fullWidth margin='normal' multiline rows={4} />}
                        />


                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default NewAppointmentForm;