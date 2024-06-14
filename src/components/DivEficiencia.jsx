import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DivEficiencia.css";

const DivEficiencia = () => {
  const characters = [
    {
      name: "Jiyan",
      url: "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Jiyan-Build-Guide-300x169.png",
    },
    {
      name: "Encore",
      url: "https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/05/Wuthering-Waves-Encore-Build-Guide-300x221.png",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(characters[0].url);

  const handleCharacterChange = (event) => {
    setSelectedCharacter(event.target.value);
  };

  const bgImage = {
    backgroundImage: `url(${selectedCharacter})`,
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
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default DivEficiencia;
