
import Typography from '@mui/material/Typography';
import Randy from '../images/randyweb2.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Landing.css'

function Landing() {


    return (

        <section id="landing-container">
            <div id="landing-box">
                <div id="landing-content">

                    <div id="landing-text">
                        <Typography variant="h4">
                            Hello, I am
                        </Typography>
                        <Typography variant="h3">
                            Brandon Lanier.
                        </Typography>
                        <Typography variant="h4">
                            Full Stack Software Engineer
                        </Typography>
                        <div id="social-links">
                            <a href="https://www.linkedin.com/in/brandon-lanier/" target="_blank"><LinkedInIcon fontSize="large" className="social-icon" sx={{ color: 'black' }} /></a>
                            <a href="https://github.com/Brandon-Lanier" target="_blank"><GitHubIcon fontSize="large" className="social-icon" sx={{ color: 'black' }} /></a>
                        </div>
                    </div>

                    <div id="landing-image">
                        <img src={Randy} alt="brandon" id="profile-pic" />
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Landing;