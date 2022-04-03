import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Paper, Button } from '@mui/material'
import AverageOut from '../images/averageout.png';
import Movies from '../images/movies.png'
import './Portfolio.css';
import { MovieSharp } from '@mui/icons-material';


function Portfolio() {


    return (
        <div id="portfolio">
            <Typography variant="h4" sx={{mt: 10}}>
                Portfolio
            </Typography>
            <div id="portfolio-container">
          
          
                <Card sx={{ maxWidth: 250 }} className="port-card" raised="true">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image={AverageOut}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Average Out
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A cryptocurrency portfolio tracker and strategic exit application.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            
                <Card sx={{ maxWidth: 250 }} className="port-card" raised="true">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image="https://static.wixstatic.com/media/70d6d7_59f532e0ce594a3194f7ed2f310af685~mv2.png/v1/fill/w_165,h_94,al_c,lg_1,enc_auto/GRM%20Logo.png"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Growth Resiliency Measure
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               Prime Digital Academy group project for Growth Resiliency Measure.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
           
                <Card sx={{ maxWidth: 250 }} className="port-card" raised="true">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="150"
                            image={Movies}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Movies Saga
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                A movie collection app that lets users sort by genre.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}

export default Portfolio;