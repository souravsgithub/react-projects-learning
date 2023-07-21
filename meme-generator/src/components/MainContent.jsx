import memeImg from "/images/memeimg.png";

export default function MainContent() {
  return (
    <div className="container">
      <form>
        <input placeholder="Top Text" />
        <input placeholder="Bottom Text" />
      </form>
      <button>Get a new meme image 🖼</button>
      <div className="container-image">
        <img src={memeImg} alt="meme-image" />
        <h4 className="top-text">SHUT UP</h4>
        <h4 className="bottom-text">AND TAKE MY MONEY</h4>
      </div>
    </div>
  );
}
