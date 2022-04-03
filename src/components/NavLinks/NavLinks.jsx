import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavLinks.css'
import Brandon from '../images/frandy.jpg'
import resume from '../images/Brandon_Lanier_Resume_2022.pdf'
import { Link } from '@mui/material';

function NavLinks() {

    return (
        <div id="nav-bar">
            <nav id="navLinks">
                <AnchorLink
                    href="#about"
                >
                    <p className="anchor-link">About</p>
                </AnchorLink>
                <AnchorLink href="#portfolio" >
                    <p className="anchor-link">Portfolio</p>
                </AnchorLink>
                <AnchorLink href="#music">
                    <p className="anchor-link">Music</p>
                </AnchorLink>
                <AnchorLink href="#contact">
                <p className="anchor-link">Contact</p>
                </AnchorLink>
                <Link
                    href={resume}
                    target="_blank"
                >
                    <p className="anchor-link">Resume</p>
                </Link>
            </nav>
        </div>
    )
}

export default NavLinks;


{/* <span><span></span></span>
            < div class="wrap">
            <AnchorLink href="#about"><a href="#"><div>About</div>About</a></AnchorLink>
            <AnchorLink href="#about"><a href="#"><div>About</div>About</a></AnchorLink>
            <AnchorLink href="#about"><a href="#"><div>About</div>About</a></AnchorLink>
            <AnchorLink href="#about"><a href="#"><div>About</div>About</a></AnchorLink>
            <AnchorLink href="#about"> <a href="#"><div></div></a></AnchorLink>
            </div>  */}