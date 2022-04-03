import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Link } from '@mui/material';
import NavLinks from '../NavLinks/NavLinks';
import Randy from '../images/frandy.jpg'
import './Landing.css'

function Landing() {


return (
    <section id="landing-container">
        <div id="landing-box">
        <Typography variant="h3">
            Hello I am Brandon Lanier
        </Typography>
        <Typography variant="h4">
            Software Developer
        </Typography>
        <img src={Randy} alt="brandon" width="200px" />
        </div>
    </section>
)

}

export default Landing;