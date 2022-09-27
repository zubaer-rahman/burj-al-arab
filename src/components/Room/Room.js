import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Button} from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import LocalHotelIcon from '@mui/icons-material/LocalHotel'
import WcIcon from '@mui/icons-material/Wc';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const StyledCard = styled(Card)({
  maxWidth: 345
});

const StyledAvatar = styled(Avatar)({
  backgroundColor: red[500]
});

const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%'
});
// const useStyles = styled(theme => ({
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//   }));

const Room = ({room}) => {
    // const classes = useStyles();
    const navigate = useNavigate();

    const handleBook = (bed_type) => {
        navigate(`/book/${bed_type}`);
    }
    return (
        <StyledCard>
            <CardHeader
                avatar={
                    <StyledAvatar aria-label="recipe">
                        {room.avatar}
                    </StyledAvatar>
                }
                title={room.title}
            />
            
            <StyledCardMedia image={room.imgUrl} title="Paella dish" />

            {/* <img src={`../../images/${room.bed_type}.png`} alt="not found"/> */}

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {room.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <LocalHotelIcon />: {room.bed} 
                </IconButton>
                <IconButton aria-label="share">
                    <WcIcon />: {room.capacity} 
                </IconButton>
                <IconButton aria-label="price">
                    <AttachMoneyIcon />: {room.price} 
                </IconButton>
                <Button onClick={() => handleBook(room.bed_type)} variant="contained" color="primary">  Book  </Button>
            </CardActions>
         </StyledCard>
        
    );
};

export default Room;