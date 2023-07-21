import memeImg from "/images/memeimg.png";
import { useState, useEffect } from "react";

export default function MainContent() {
  const [allMemes, setAllMemes] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memeImg,
  });

  useEffect(() => {
    async function getMemes() {
      const memesData = await fetch("https://api.imgflip.com/get_memes");
      const data = await memesData.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: allMemes[randomNumber].url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
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
