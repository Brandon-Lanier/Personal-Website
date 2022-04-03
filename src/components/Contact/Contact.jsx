import { Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './Contact.css'

function Contact() {

    return (
        <div id="contact">
            <Typography variant="h4">
                Let's get in touch! 
            </Typography>
            <MailOutlineIcon />
            <LinkedInIcon />
            <GitHubIcon />

        </div>
    )
}

export default Contact;