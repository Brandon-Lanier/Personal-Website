import { Typography } from '@mui/material';
import Spotify from '../images/spotify.png'
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Music.css'

function Music() {

    return (
        <div id="music">
            <Typography variant="h3">
                Quietdrive
            </Typography>
            <Typography variant="h6">
                
            </Typography>
            <a href="https://open.spotify.com/artist/5L1n6wVJMxBw6sZbxD0XAU?si=0fv18ZK4T8OKEFNoSyE7ow">Listen On Spotify</a>
            <img src={Spotify} alt="spotify" id="spotify" />
            <ul id="qd-social-links">
                <li className="qd-social-li">
                    <Link href="https://www.facebook.com/quietdrive" target="_blank">
                        <FacebookIcon />
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default Music;