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
import drums from '../images/drums.jpg'

import './Music.css'

function Music() {

    return (
        <div id="music">
            <Typography variant="h3" sx={{ mt: 10 }}>
                Quietdrive
            </Typography>
            <ImageList sx={{ width: "90vw", height: 450 }} cols={3} rowHeight={164}>
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
                        src={`${drums}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${drums}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt="drums"
                        loading="lazy"
                    />
                </ImageListItem>
            </ImageList>
            <Typography variant="h6">
            </Typography>
            <a href="https://open.spotify.com/artist/5L1n6wVJMxBw6sZbxD0XAU?si=0fv18ZK4T8OKEFNoSyE7ow">Listen On Spotify</a>
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