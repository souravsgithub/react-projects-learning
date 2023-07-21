import troll from "/images/troll-face.png";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <img src={troll} alt="meme-icon" className="troll-face" />
        <h2>Meme Generator</h2>
        <h3>React Course - Project 3</h3>
      </nav>
    </header>
  );
}
