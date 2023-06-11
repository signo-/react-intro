import logo from './logo.svg';
import { Button, Card, CardContent, Typography, CardActionArea, CardActions, CardMedia } from '@mui/material';
import './App.less';

function App() {

  const generateCard = () => {
    return(
      <Card sx={{ maxWidth: 345 }}>
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
      </Card>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="main_body">
        <div>Hello World</div>
        {generateCard()}
      </div>
    </div>
  );
}

export default App;
