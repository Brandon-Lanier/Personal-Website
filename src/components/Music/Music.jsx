import { Typography } from "@mui/material";
import Spotify from "../images/spotify.png";
import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import qdshow from "../images/qdshow.jpg";
import drums from "../images/drums.jpg";
import qdshow2 from "../images/qdshow2.jpg";
import qd from "../images/qd.jpg";
import qdjapan from "../images/qdjapan.jpeg";
import qdvarsity from "../images/qdvarsity.jpeg";
import qdpromo from '../images/qdpromo.jpeg';
import qdpromo2 from '../images/qdpromo2.jpeg';
import qdiraq from '../images/qdiraq.jpeg';
import drum2 from '../images/drum2.jpeg';
import qdsummer from '../images/qdsummer.jpeg';
import drums3 from '../images/drums3.jpeg'
import "./Music.css";


function Music() {
  return (
    <div id="music">
      <Typography variant="h3" sx={{ mt: 6 }}>
        quietdrive
      </Typography>
      <Typography variant="b1" id="bio" sx={{ mt: .5 }}>
        Quietdrive was formed in 2002 when I was a junior in high school. As a
        band we have played over 1,500 shows 14 countries, had a top 20
        billboard single and received a RIAA certified gold record.
      </Typography>
      <ImageList
        sx={{ width: "90vw", height: 250, mb: 1 }}
        cols={4}
        rowHeight={164}
      >
        <ImageListItem>
          <img
            src={`${qdjapan}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdjapan}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdshow5"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdshow}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdshow}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="quietdrive"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${drums}?w=164&h=250&fit=crop&auto=format`}
            // srcSet={`${drums}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="drums"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdshow2}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdshow2}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdshow10"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qd}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qd}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdshow2"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdvarsity}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdvarsity}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity7"
          />
        </ImageListItem>
      
        <ImageListItem>
          <img
            src={`${drums3}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${drums3}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity6"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdiraq}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdiraq}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity5"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${drum2}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${drum2}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity4"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdsummer}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdsummer}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity3"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdpromo2}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdpromo2}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity2"
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src={`${qdpromo}?w=164&h=250&fit=crop&auto=format`}
            srcSet={`${qdpromo}?w=164&h=250&fit=crop&auto=format&dpr=2 2x`}
            alt="qdvarsity1"
          />
        </ImageListItem>
      </ImageList>
      <a href="https://open.spotify.com/artist/5L1n6wVJMxBw6sZbxD0XAU?si=0fv18ZK4T8OKEFNoSyE7ow">
        <Typography variant="b1">Listen On Spotify</Typography>
      </a>
      <a href="https://open.spotify.com/artist/5L1n6wVJMxBw6sZbxD0XAU?si=0fv18ZK4T8OKEFNoSyE7ow">
        <img src={Spotify} alt="spotify" id="spotify" />
      </a>
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
            <Link
              href="https://www.youtube.com/user/Quietdriveofficial"
              target="_blank"
            >
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
  );
}

export default Music;
