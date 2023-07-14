import logo from "/airbnb-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav className="container">
                <img src={logo} alt="airbnb-logo" className="nav-logo" />
            </nav>
        </header>
    );
}