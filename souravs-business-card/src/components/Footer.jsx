import twitter from "/images/twitter.png"
import insta from "/images/instagram.png"
import facebook from "/images/facebook.png"
import github from "/images/github.png"
export default function Footer() {
    return (
        <footer>
            <div className="container-socials">
                <a href="#"><img src={twitter} alt="" className="social-img"/></a>
                <a href="#"><img src={facebook} alt="" className="social-img"/></a>
                <a href="#"><img src={insta} alt="" className="social-img"/></a>
                <a href="#"><img src={github} alt="" className="social-img"/></a>
            </div>
        </footer>
    );
}