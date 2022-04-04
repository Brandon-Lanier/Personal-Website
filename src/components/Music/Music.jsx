import { Typography } from '@mui/material';
import Spotify from '../images/spotify.png'
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import qdshow from '../images/qdshow.jpg';
import drums from '../images/drums.jpg';
import qdshow2 from '../images/qdshow2.jpg';

import './Music.css'

function Music() {

    return (
        <div id="music">
            <Typography variant="h3" sx={{ mt: 5 }}>
                quietdrive
            </Typography>
            <Typography variant="b1" id="bio" sx={{ mt: 1}}>
                Quietdrive was formed in 2002 by two high school friends and myself.  In the tenure of our band we have played over 1,500 shows 14 countries, had a top 20 billboard single and received a RIAA certified gold record. 
            </Typography>
            <ImageList sx={{ width: "90vw", height: 200 }} cols={3} rowHeight={164}>
                <ImageListItem>
                    <img
                        src={`${qdshow}?w=164&h=200&fit=crop&auto=format`}
                        srcSet={`${qdshow}?w=164&h=200&fit=crop&auto=format&dpr=2 2x`}
                        alt="quietdrive"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${drums}?w=164&h=200&fit=crop&auto=format`}
                        srcSet={`${drums}?w=164&h=200&fit=crop&auto=format&dpr=2 2x`}
                        alt="drums"
                        loading="lazy"
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                        src={`${qdshow2}?w=164&h=200&fit=crop&auto=format`}
                        srcSet={`${qdshow2}?w=164&h=200&fit=crop&auto=format&dpr=2 2x`}
                        alt="qdshow2"
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            <Typography variant="h6">
            </Typography>
            <a href="https://open.spotify.com/artist/5L1n6wVJMxBw6sZbxD0XAU?si=0fv18ZK4T8OKEFNoSyE7ow"><Typography variant="b1">Listen On Spotify</Typography></a>
            <img src={Spotify} alt="spotify" id="spotify" />
            <div id="qd-link-container">
                <ul id="qd-social-links">
                    <li className="qd-social-li">
                        <Link href="https://www.facebook.com/quietdrive" target="_blank">
                            <FacebookIcon />
                        </Link>
                    </li>
                    <li className="qd-social-li">
                        <Link href="https://www.instagram.com/quietdrive/" target="_blank">
                            <InstagramIcon />
                        </Link>
                    </li>
                    <li className="qd-social-li">
                        <Link href="https://www.youtube.com/user/Quietdriveofficial" target="_blank">
                            <YouTubeIcon />
                        </Link>
                    </li>
                    <li className="qd-social-li">
                        <Link href="https://twitter.com/quietdrivemusic" target="_blank">
                            <TwitterIcon />
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Music;