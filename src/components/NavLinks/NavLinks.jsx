import AnchorLink from 'react-anchor-link-smooth-scroll'
import './NavLinks.css'
import Brandon from '../images/frandy.jpg'

function NavLinks() {

    return (
        <div id="nav-bar">
            <nav id="navLinks">
                <AnchorLink 
                    href="#about"
                    className="anchor-link"
                        >
                    About
                </AnchorLink>
                <AnchorLink href="#portfolio" className="anchor-link">
                    Portfolio
                </AnchorLink>
                <AnchorLink href="#music" className="anchor-link">
                    Music
                </AnchorLink>
                <AnchorLink href="#contact" className="anchor-link">
                    Contact
                </AnchorLink>
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