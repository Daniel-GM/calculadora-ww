import React, { useState, useEffect } from "react";
import CardEcho from "./CardEcho";
import "./DivEficiencia.css";
import "./CardEcho.css";

const characters = [
  {
    name: "Encore",
    url:
      "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Encore-Build-Guide-300x221.png",
    gradient:
      "90deg, rgba(255,255,255,0) 0%, rgba(213,186,188,0.25) 20%, rgba(220,131,106,1) 100%",
  },
  {
    name: "Jiyan",
    url:
      "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Jiyan-Build-Guide-300x169.png",
    gradient:
      "90deg, rgba(255,255,255,0) 0%, rgba(19,76,76,0.25) 20%, rgba(65,178,168,1) 100%",
  },
];

const DivEficiencia = ({ indexPai }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  useEffect(() => {
    const savedSelectedCharacter = JSON.parse(localStorage.getItem(`selectedCharacter-${indexPai}`));
    if (savedSelectedCharacter) {
      setSelectedCharacter(savedSelectedCharacter);
    }
  }, [indexPai]);

  const handleCharacterChange = (event) => {
    const selected = characters.find((character) => character.url === event.target.value);
    setSelectedCharacter(selected);
    localStorage.setItem(`selectedCharacter-${indexPai}`, JSON.stringify(selected));
  };

  const bgImage = {
    backgroundImage: `url(${selectedCharacter.url})`,
  };

  const bgColor = {
    background: `linear-gradient(${selectedCharacter.gradient})`,
  };

  return (
    <div>
      <select onChange={handleCharacterChange}>
        {characters.map((character, index) => (
          <option key={index} value={character.url}>
            {character.name}
          </option>
        ))}
      </select>
      <div id="testeDiv">
        <div style={bgImage}></div>
        <div style={bgColor}></div>
      </div>

      <div id="div-cards-echo">
        {Array.from({ length: 5 }, (_, index) => (
          <CardEcho key={index} id={`card-echo-${index}`} indexPai={indexPai} />
        ))}
      </div>
    </div>
  );
};

export default DivEficiencia;
