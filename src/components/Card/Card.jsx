
import { Button, Card as MaterialUICard, CardContent, Typography, CardActionArea, CardActions, CardMedia } from '@mui/material';

const Card = () => {
    return (
        <MaterialUICard sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                Add to cart
                </Button>
            </CardActions>
        </MaterialUICard>
    )
  };
export default Card;