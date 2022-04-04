import { TextField, Typography } from '@mui/material';
import SimpleImageSlider from "react-simple-image-slider";
import engagment from '../images/engagement.png';
import quinn from '../images/quinn.png';
import flying from '../images/flying.png';
import { useState } from 'react';
import './About.css'

function About() {

    const [bio, setBio] = useState("Writing a biography is hard.  Can you do it for me?");


    const images = [
        [engagment],
        [quinn],
        [flying]
    ];

    return (
        <section id="about">
            <div id="about-left">
                <Typography variant="h4">
                    A Little Bit About Me
                </Typography>
                <br></br>
                <TextField
                value={bio}
                multiline
                maxRows={8}
                onChange={(e) => setBio(e.target.value)}
                fullWidth
                variant="standard"
                sx={{border: 0, margin: 5}}
                >
                </TextField>
                {/* <Typography variant="b1">
                    Writing a biography is hard.
                    Can you do it for me?
                </Typography> */}
            </div>
            <div id="about-right">
                <SimpleImageSlider
                    width={450}
                    height={400}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </section>
    )
}

export default About;