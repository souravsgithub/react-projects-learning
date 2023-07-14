import logo from "../assets/reactjs-icon.png";

export default function Navbar() {
    return(
        <header>
            <nav className="container container-flex">
                <div className="nav-brand">
                    <img src={logo} alt="react-icon" />
                    <h3>ReactFacts</h3>
                </div>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    );
}