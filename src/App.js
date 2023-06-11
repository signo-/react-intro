import logo from './logo.svg';
import { Button, Card, CardContent, Typography, CardActionArea, CardActions, CardMedia } from '@mui/material';
import { default as CustomCard } from './components/Card/Card';
import './App.less';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="main_body">
        <CustomCard></CustomCard>
      </div>
    </div>
  );
}

export default App;
