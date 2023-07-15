import me from "/images/me.png";
import emailLogo from "/images/email.png"
import linkedinLogo from "/images/linkedin.png"
export default function Info() {
    return (
        <section className="info">
            <img src={me} alt="A-photo-of-mine" className="my-photo" />
            <h1>Sourav Kumar</h1>
            <h2>Fullstack Developer</h2>
            <p><a href="#">sourav's portfolio</a></p>
            <div className="info-btns">
                <a href="#">
                    <img src={emailLogo} alt="" className="small"/>
                    <span>Email</span>
                </a>
                <a href="#" className="less">
                    <img src={linkedinLogo} alt="" className="small"/>
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    );
}