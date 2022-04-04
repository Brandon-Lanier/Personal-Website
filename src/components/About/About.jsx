import { Divider, TextField, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import engagment from "../images/engagement.png";
import quinn from "../images/quinn.png";
import flying from "../images/flying.png";
import { useState } from "react";
import "./About.css";

function About() {
  const [bio, setBio] = useState(
    "Writing a biography is hard.  Can you do it for me?"
  );

  const images = [[engagment], [quinn], [flying]];

  return (
    <section id="about">
      <div id="about-left">
        <Typography variant="h4">A Little Bit About Me</Typography>
        <br></br>
        <div id="bio-text">
          <Typography variant="b1" gutterBottom>
            For as long as I can remember I have been interested in development.
            I built my first website at the age of 9, and created a whole
            virtual airline app to integrate with Microsoft Flight Simulator by
            age 13. What was then a mere hobby has blossomed into a career with
            my recent completion from Prime Digital Academy’s Full Stack
            Software Development course.
          </Typography>
          <Divider sx={{m: 3}} />
          <Typography variant="b1">
            I have been a professional touring musician, pilot and heavily
            involved in the restaurant scene all my life. I am so excited to be
            pivoting back into development and would love to mix my passion for
            aviation with my new career in tech.
          </Typography>
        </div>
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
  );
}

export default About;
