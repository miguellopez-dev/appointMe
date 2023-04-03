import { Button, Card, CardContent, CardActions, Typography } from "@mui/material";
import { formatDate } from "../../utils/formatDate";

const AppointmentCard = ({ appointment }) => {
    const { type, name, title, description, date } = appointment;

    return (
        <Card>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    {title} - {type}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color='text.secondary'>
                    {formatDate(date)} - {name}
                </Typography>
                <Typography variant='body2'>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}