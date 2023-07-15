import me from "/images/me.png";
export default function Info() {
    return (
        <>
            <img src={me} alt="" />
            <h1>Sourav Kumar</h1>
            <h2>Fullstack Developer</h2>
            <p><a href="#">sourav's portfolio</a></p>
            <div className="info-btns">
                <a href="#">
                    <img src="" alt="" />
                    <span>Email</span>
                </a>
                <a href="#">
                    <img src="" alt="" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </>
    );
}