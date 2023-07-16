import brand from "/images/brand.png";

export default function Header() {
    return(
        <header>
            <nav>
                <img src={brand} alt="earth-logo"/>
                <h1>my travel journal.</h1>
            </nav>
        </header>
    );
}