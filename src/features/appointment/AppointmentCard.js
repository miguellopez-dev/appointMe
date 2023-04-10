import { Button, ButtonGroup, Card, CardContent, CardActions, Typography, Paper } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { formatDate } from "../../utils/formatDate";
import { useDispatch } from "react-redux";
import { deleteAppointment } from "./AppointmentSlice";

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
                <CardActions>
                    <ButtonGroup variant='outlined' size='small' aria-label='small button group'>
                        <Button color='error' onClick={() => dispatch(deleteAppointment(id))}>
                            <DeleteOutlineOutlinedIcon />
                        </Button>
                        <Button color='success'>
                            <CreateOutlinedIcon />
                        </Button>
                    </ButtonGroup>
                </CardActions>
            </Card>
        </Paper>
    );
}

export default AppointmentCard;