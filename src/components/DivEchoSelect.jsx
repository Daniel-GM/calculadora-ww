import { useState } from "react";
import "./DivEchoSelect.css"


const DivEchoSelect = () => {

  const echos = [
    {
      name: "Aero Predator",
      image: "/calculadora-ww/public/echos/aero-predator-icon.webp",
      cost: 1,
    },
    {
      name: "Altered Clang Bang",
      image: "https://static.dotgg.gg/wuthering-waves/echoes/altered-clang-bang-icon.webp",
      cost: 1,
    },
    {
      name: "Altered Lightcrusher",
      image: "",
      cost: 3,
    },
    {
      name: "Autopuppet Scout",
      image: "",
      cost: 3,
    },
    {
      name: "Bell-Borne Geochelone",
      image: "",
      cost: 4,
    },
    {
      name: "Chaserazor",
      image: "",
      cost: 3,
    },
    {
      name: "Chasm Guardian",
      image: "",
      cost: 3,
    },
    {
      name: "Chirpuff",
      image: "",
      cost: 1,
    },
    {
      name: "Clang Bang",
      image: "",
      cost: 1,
    },
    {
      name: "Crownless",
      image: "",
      cost: 4,
    },
    {
      name: "Cruisewing",
      image: "",
      cost: 1,
    },
    {
      name: "Cyan-Feathered Heron",
      image: "",
      cost: 3,
    },
    {
      name: "Diamondclaw",
      image: "",
      cost: 1,
    },
    {
      name: "Dreamless",
      image: "",
      cost: 4,
    },
    {
      name: "Dreamless",
      image: "",
      cost: 1,
    },
    {
      name: "Electro Predator",
      image: "",
      cost: 1,
    },
    {
      name: "Excarat",
      image: "",
      cost: 1,
    },
    {
      name: "Feilian Beringal",
      image: "",
      cost: 4,
    },
    {
      name: "Firebug",
      image: "",
      cost: 1,
    },
    {
      name: "Fission Junrock",
      image: "",
      cost: 1,
    },
    {
      name: "Flautist",
      image: "",
      cost: 3,
    },
    {
      name: "Fusion Dreadmane",
      image: "",
      cost: 1,
    },
    {
      name: "Fusion Prism",
      image: "",
      cost: 1,
    },
    {
      name: "Fusion Warrior",
      image: "",
      cost: 1,
    },
    {
      name: "Geohide Saurian",
      image: "",
      cost: 3,
    },
    {
      name: "Glacio Dreadmane",
      image: "",
      cost: 3,
    },
    {
      name: "Glacio Predator",
      image: "",
      cost: 1,
    },
    {
      name: "Glacio Prism",
      image: "",
      cost: 1,
    },
    {
      name: "Gulpuff",
      image: "",
      cost: 1,
    },
    {
      name: "Havoc Dreadmane",
      image: "",
      cost: 3,
    },
    {
      name: "Havoc Prism",
      image: "",
      cost: 1,
    },
    {
      name: "Havoc Warrior",
      image: "",
      cost: 1,
    },
    {
      name: "Hoartoise",
      image: "",
      cost: 1,
    },
    {
      name: "Hoochief",
      image: "",
      cost: 3,
    },
    {
      name: "Hooscamp",
      image: "",
      cost: 1,
    },
    {
      name: "Impermanence Heron",
      image: "",
      cost: 4,
    },
    {
      name: "Inferno Rider",
      image: "",
      cost: 4,
    },
    {
      name: "Jué",
      image: "",
      cost: 4,
    },
    {
      name: "Lampylumen Myriad",
      image: "",
      cost: 4,
    },
    {
      name: "Lightcrusher",
      image: "",
      cost: 3,
    },
    {
      name: "Lumiscale Construct",
      image: "",
      cost: 3,
    },
    {
      name: "Mech Abomination",
      image: "",
      cost: 4,
    },
    {
      name: "Mourning Aix",
      image: "",
      cost: 4,
    },
    {
      name: "Phantom: Feilian Beringal",
      image: "",
      cost: 4,
    },
    {
      name: "Phantom: Hoartoise",
      image: "",
      cost: 1,
    },
    {
      name: "Phantom: Impermanence Heron",
      image: "",
      cost: 4,
    },
    {
      name: "Phantom: Mourning Aix",
      image: "",
      cost: 4,
    },
    {
      name: "Phantom: Rocksteady Guardian",
      image: "",
      cost: 3,
    },
    {
      name: "Phantom: Thundering Mephis",
      image: "",
      cost: 4,
    },
    {
      name: "Rocksteady Guardian",
      image: "",
      cost: 3,
    },
    {
      name: "Roseshroom",
      image: "",
      cost: 3,
    },
    {
      name: "Sabyr Boar",
      image: "",
      cost: 1,
    },
    {
      name: "Snip Snap",
      image: "",
      cost: 1,
    },
    {
      name: "Spearback",
      image: "",
      cost: 3,
    },
    {
      name: "Spectro Prism",
      image: "",
      cost: 1,
    },
    {
      name: "Stonewall Bracer",
      image: "",
      cost: 3,
    },
    {
      name: "Tambourinist",
      image: "",
      cost: 3,
    },
    {
      name: "Tempest Mephis",
      image: "",
      cost: 4,
    },
    {
      name: "Thundering Mephis",
      image: "",
      cost: 4,
    },
    {
      name: "Tick Tack",
      image: "",
      cost: 1,
    },
    {
      name: "Traffic Illuminator",
      image: "",
      cost: 1,
    },
    {
      name: "Vanguard Junrock",
      image: "",
      cost: 1,
    },
    {
      name: "Violet-Feathered Heron",
      image: "",
      cost: 3,
    },
    {
      name: "Whiff Whaff",
      image: "",
      cost: 1,
    },
    {
      name: "Young Geohide Saurian",
      image: "",
      cost: 1,
    },
    {
      name: "Young Roseshroom",
      image: "",
      cost: 1,
    },
    {
      name: "Zig Zag",
      image: "",
      cost: 1,
    },
  ]

  const [selectedEcho, setSelectedEcho] = useState(echos[0]);

  const handleEchoChange = (event) => {
    const selected = echos.find(echo => echo.name === event.target.value)
    setSelectedEcho(selected)
  }

  const bgImage = {
    width: "100px",
    height: "100px",
    backgroundImage: `url(${selectedEcho.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid #fff",
    borderRadius: "50px",
    marginTop: "10px",
  }

  const categorizedEchos = {
    4: echos.filter(echo => echo.cost === 4),
    3: echos.filter(echo => echo.cost === 3),
    1: echos.filter(echo => echo.cost === 1),
  }

  return (
    <div className="component-echo">
      <select onChange={handleEchoChange}>
        <optgroup label="Custo 1">
          {categorizedEchos[1].map((echo, index) => (
            <option key={index} value={echo.name}>
              {echo.name}
            </option>
          ))}
        </optgroup>
        <optgroup label="Custo 3">
          {categorizedEchos[3].map((echo, index) => (
            <option key={index} value={echo.name}>
              {echo.name}
            </option>
          ))}
        </optgroup>
        <optgroup label="Custo 4">
          {categorizedEchos[4].map((echo, index) => (
            <option key={index} value={echo.name}>
              {echo.name}
            </option>
          ))}
        </optgroup>
      </select>

      <div style={bgImage}></div>
    </div>
  )
}

export default DivEchoSelect