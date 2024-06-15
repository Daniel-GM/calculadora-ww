import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardEcho from "./CardEcho";
import "./DivEficiencia.css";
import "./CardEcho.css";

const DivEficiencia = () => {
  const characters = [
    {
      name: "Encore",
      url: "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Encore-Build-Guide-300x221.png",
      gradient: "90deg, rgba(255,255,255,0) 0%, rgba(213,186,188,0.25) 20%, rgba(220,131,106,1) 100%",
    },
    {
      name: "Jiyan",
      url: "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Jiyan-Build-Guide-300x169.png",
      gradient: "90deg, rgba(255,255,255,0) 0%, rgba(19,76,76,0.25) 20%, rgba(65,178,168,1) 100%",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

  const handleCharacterChange = (event) => {
    const selected = characters.find(character => character.url === event.target.value);
    setSelectedCharacter(selected);
  };

  const bgImage = {
    backgroundImage: `url(${selectedCharacter.url})`,
  };

  const bgColor = {
    background: `linear-gradient(${selectedCharacter.gradient})`
  }

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
        <CardEcho />
        <CardEcho />
        <CardEcho />
        <CardEcho />
        <CardEcho />
      </div>
    </div>
  );
};

export default DivEficiencia;
