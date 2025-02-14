import { IconButton, Card, CardContent, CardActions, Typography, Paper, Stack } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { formatDate } from "../../utils/formatDate";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "./AppointmentSlice";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const AppointmentCard = ({ appointment }) => {
    const { id, type, name, title, description, date } = appointment;
    const dispatch = useDispatch();

    return (
        <Paper elevation={5}>
            <Card>
                <CardContent>
                    <Typography variant='h5'>
                        {title} - {type}
                    </Typography>
                    <Typography xs={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                        {formatDate(date)} - {name}
                    </Typography>
                    <Typography variant='body2'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions alignItems='center'>
                    <Stack spacing={1} direction='row' alignItems='center'>
                        <IconButton aria-label='delete' color='error' size='small' onClick={() => dispatch(deleteAppointment(id))}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label='edit' color='success'>
                            <EditOutlinedIcon />
                        </IconButton>
                    </Stack>
                </CardActions>
            </Card>
        </Paper>
    );
}

export default AppointmentCard;