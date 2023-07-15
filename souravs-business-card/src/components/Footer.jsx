import twitter from "/images/twitter.png"
import insta from "/images/instagram.png"
import facebook from "/images/facebook.png"
import github from "/images/github.png"
export default function Footer() {
    return (
        <footer>
            <div className="container-socials">
                <a href="https://twitter.com/souravstwt" target="_blank"><img src={twitter} alt="" className="social-img"/></a>
                <a href="https://google.com" target="_blank"><img src={facebook} alt="" className="social-img"/></a>
                <a href="https://www.instagram.com/the.souravkumar/" target="_blank"><img src={insta} alt="" className="social-img"/></a>
                <a href="https://github.com/souravsgithub" target="_blank"><img src={github} alt="" className="social-img"/></a>
            </div>
        </footer>
    );
}