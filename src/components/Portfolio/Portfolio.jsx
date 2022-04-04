import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Paper, Button } from '@mui/material'
import AverageOut from '../images/averageout.png';
import Movies from '../images/movies.png'
import truth from '../images/truthorigins.png';
import './Portfolio.css';
import { MovieSharp } from '@mui/icons-material';


function Portfolio() {


    const handleClick = (index) => {
        console.log(index);
        if (index === 0) {
            window.open('https://youtu.be/a-fRA8aNMMo');
        }
        if (index === 1) {
            window.open('https://github.com/Brandon-Lanier/Movie-Sagas');
        }    
        if (index === 2) {
            window.open('https://truthorigins.co.uk/');
        }
    }

    return (
        <div id="portfolio">
            <Typography variant="h4" sx={{mt: 1}}>
                Portfolio
            </Typography>
            <div id="portfolio-container">
            <Carousel 
           
            interval="5000"
            onClickItem={handleClick}
            >
                  <div>
                    <img src={AverageOut} />
                  </div>
            
                    <div>
                    <img src={Movies} />
                    </div>
                    <div>
                    <img src={truth} />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Portfolio;