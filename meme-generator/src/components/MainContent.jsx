import memeImg from "/images/memeimg.png";
import memesData from "../memesData.js";
import { useState } from "react";

export default function MainContent() {
  console.log(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memeImg,
  });
  return (
    <div className="container">
      <form>
        <input placeholder="Top Text" />
        <input placeholder="Bottom Text" />
      </form>
      <button>Get a new meme image 🖼</button>
      <div className="container-image">
        <img src={meme.randomImage} alt="meme-image" />
        <h4 className="top-text">{meme.topText}</h4>
        <h4 className="bottom-text">{meme.bottomText}</h4>
      </div>
    </div>
  );
}
