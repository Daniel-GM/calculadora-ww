import React, { useState, useEffect } from "react";
import CardEcho from "./CardEcho";
import "./DivEficiencia.css";
import "./CardEcho.css";

/*
* Glacio    "90deg, #ffffff00 0%, #266FA140 20%, #2AB0C1 100%"
* Fusion    "90deg, #ffffff00 0%, #d5babc40 20%, #dc836a 100%"
* Electro   "90deg, #ffffff00 0%, #7036AB40 20%, #A42EA8 100%"
* Aero      "90deg, #ffffff00 0%, 134c4c40 20%, #41b2a8 100%"
* Spectro   "90deg, #ffffff00 0%, #A4932140 20%, #B3A521 100%"
* Havoc     "90deg, #ffffff00 0%, #97246A40 20%, #831857 100%"
* Physical  
*/

const characters = [
  {
    name: "Aalto",
    url: "/calculadora-ww/characters/aalto-image.webp",
    gradient: "90deg, #ffffff00 0%, #134c4c40 20%, #41b2a8 100%",
  },
  {
    name: "Baizhi",
    url: "/calculadora-ww/characters/baizhi-image.webp",
    gradient: "90deg, #ffffff00 0%, #266FA140 20%, #2AB0C1 100%",
  },
  {
    name: "Calcharo",
    url: "/calculadora-ww/characters/calcharo-image.webp",
    gradient: "90deg, #ffffff00 0%, #7036AB40 20%, #A42EA8 100%",
  },
  {
    name: "Changli",
    url: "/calculadora-ww/characters/changli-image.webp",
    gradient: "90deg, #ffffff00 0%, #d5babc40 20%, #dc836a 100%",
  },
  {
    name: "Chixia",
    url: "/calculadora-ww/characters/chixia-image.webp",
    gradient: "90deg, #ffffff00 0%, #d5babc40 20%, #dc836a 100%",
  },
  {
    name: "Danjin",
    url: "/calculadora-ww/characters/danjin-image.webp",
    gradient: "90deg, #ffffff00 0%, #97246A40 20%, #831857 100%",
  },
  {
    name: "Encore",
    url: "/calculadora-ww/characters/encore-image.webp",
    gradient: "90deg, #ffffff00 0%, #d5babc40 20%, #dc836a 100%",
  },
  {
    name: "Jianxin",
    url: "/calculadora-ww/characters/jianxin-image.webp",
    gradient: "90deg, #ffffff00 0%, #134c4c40 20%, #41b2a8 100%",
  },
  {
    name: "Jinhsi",
    url: "/calculadora-ww/characters/jinhsi-image.webp",
    gradient: "90deg, #ffffff00 0%, #A4932140 20%, #B3A521 100%",
  },
  {
    name: "Jiyan",
    url: "/calculadora-ww/characters/jiyan-image.webp",
    gradient: "90deg, #ffffff00 0%, #134c4c40 20%, #41b2a8 100%",
  },
  {
    name: "Lingyang",
    url: "/calculadora-ww/characters/lingyang-image.webp",
    gradient: "90deg, #ffffff00 0%, #266FA140 20%, #2AB0C1 100%",
  },
  {
    name: "Mortefi",
    url: "/calculadora-ww/characters/mortefi-image.webp",
    gradient: "90deg, #ffffff00 0%, #d5babc40 20%, #dc836a 100%",
  },
  {
    name: "Rover (Female)",
    url: "/calculadora-ww/characters/rover-female-image.webp",
    gradient: "90deg, #ffffff00 0%, #A4932140 20%, #B3A521 100%",
  },
  {
    name: "Rover (Male)",
    url: "/calculadora-ww/characters/rover-male-image.webp",
    gradient: "90deg, #ffffff00 0%, #A4932140 20%, #B3A521 100%",
  },
  {
    name: "Sanhua",
    url: "/calculadora-ww/characters/sanhua-image.webp",
    gradient: "90deg, #ffffff00 0%, #266FA140 20%, #2AB0C1 100%",
  },
  {
    name: "Taoqi",
    url: "/calculadora-ww/characters/taoqi-image.webp",
    gradient: "90deg, #ffffff00 0%, #97246A40 20%, #831857 100%",
  },
  {
    name: "Verina",
    url: "/calculadora-ww/characters/verina-image.webp",
    gradient: "90deg, #ffffff00 0%, #A4932140 20%, #B3A521 100%",
  },
  {
    name: "Yangyang",
    url: "/calculadora-ww/characters/yangyang-image.webp",
    gradient: "90deg, #ffffff00 0%, #134c4c40 20%, #41b2a8 100%",
  },
  {
    name: "Yinlin",
    url: "/calculadora-ww/characters/yinlin-image.webp",
    gradient: "90deg, #ffffff00 0%, #7036AB40 20%, #A42EA8 100%",
  },
  {
    name: "Yuanwu",
    url: "/calculadora-ww/characters/yuanwu-image.webp",
    gradient: "90deg, #ffffff00 0%, #7036AB40 20%, #A42EA8 100%",
  },
];

const DivEficiencia = ({ indexPai }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [visibilidade, setVisibilidade] = useState(true)

  useEffect(() => {
    const savedSelectedCharacter = JSON.parse(localStorage.getItem(`selectedCharacter-${indexPai}`));
    if (savedSelectedCharacter) {
      setSelectedCharacter(savedSelectedCharacter);
    }
  }, [indexPai]);

  const handleTrocaVisibilidade = () => {
    setVisibilidade(!visibilidade)
  }

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
      <select onChange={handleCharacterChange} value={selectedCharacter.url}>
        {characters.map((character, index) => (
          <option key={index} value={character.url}>
            {character.name}
          </option>
        ))}
      </select>
      <div id="testeDiv" onClick={handleTrocaVisibilidade} style={{ cursor: 'pointer' }}>
        <div style={bgImage}></div>
        <div style={bgColor}></div>
      </div>
      {visibilidade &&
        <div id="div-cards-echo">
          {Array.from({ length: 5 }, (_, index) => (
            <CardEcho key={index} id={`card-echo-${index}`} indexPai={indexPai} />
          ))}
        </div>
      }
    </div>
  );
};

export default DivEficiencia;
