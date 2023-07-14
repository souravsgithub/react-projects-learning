import bigLogo from "../assets/reactjs-icon-big.png";

export default function MainContent() {
    return(
        <main>
        <div className="container">
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={bigLogo} alt="Big-React-Logo" className="big-react"/>
        </div>
        </main>
    );
}