import { Button, Card, CardContent, CardActions, Typography } from "@mui/material";
import { formatDate } from "../../utils/formatDate";

const AppointmentCard = ({ appointment }) => {
    const { type, name, title, description, date } = appointment;

    return (
        
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
        </Card>
    );
}

export default AppointmentCard;