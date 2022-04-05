import { Typography } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact">
      <Typography variant="h4">Let's get in touch!</Typography>
      <div id="contact-links">
        <Link href="mailto:brandonjlanier@gmail.com" target="_blank">
          <MailOutlineIcon
            className="contact-icon"
            sx={{ color: "black", fontSize: "50px" }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/brandon-lanier/"
          target="_blank"
        >
          <LinkedInIcon
            className="contact-icon"
            sx={{ color: "black", fontSize: "50px" }}
          />
        </Link>
        <Link href="https://github.com/Brandon-Lanier" target="_blank">
          <GitHubIcon
            className="contact-icon"
            sx={{ color: "black", fontSize: "50px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
