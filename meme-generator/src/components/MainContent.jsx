import memeImg from "/images/memeimg.png";
import memesData from "../memesData.js";
import { useState } from "react";

export default function MainContent() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memeImg,
  });

  const memesArr = memesData.data.memes;

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * memesArr.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: memesArr[randomNumber].url,
    }));
  }

  return (
    <div className="container">
      <form>
        <input
          placeholder="Top Text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
        />
        <input
          placeholder="Bottom Text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
        />
      </form>
      <button onClick={handleClick}>Get a new meme image 🖼</button>
      <div className="container-image">
        <img src={meme.randomImage} alt="meme-image" />
        <h4 className="top-text">{meme.topText}</h4>
        <h4 className="bottom-text">{meme.bottomText}</h4>
      </div>
    </div>
  );
}
