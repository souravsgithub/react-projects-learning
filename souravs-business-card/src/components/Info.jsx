import me from "/images/me.png";
import emailLogo from "/images/email.png"
import linkedinLogo from "/images/linkedin.png"
export default function Info() {
    return (
        <section className="info">
            <img src={me} alt="A-photo-of-mine" className="my-photo" />
            <h1>Sourav Kumar</h1>
            <h2>Fullstack Developer</h2>
            <p className="portfolio"><a href="https://sourav-kumar.vercel.app" target="_blank">sourav's portfolio</a></p>
            <div className="info-btns">
                <a href="mailto: souravsemail2001@gmail.com">
                    <img src={emailLogo} alt="email-link" className="small"/>
                    <span>Email</span>
                </a>
                <a href="https://www.linkedin.com/in/sourav-kumar-79715725a/" target="_blank" className="less">
                    <img src={linkedinLogo} alt="linkedin-link" className="small"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
}