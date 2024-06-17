import { useState } from "react";
import "./DivEchoSelect.css"


const DivEchoSelect = () => {

  const echos = [
    {
      name: "Aero Predator",
      image: "/calculadora-ww/echos/aero-predator-icon.webp",
      cost: 1,
    },
    {
      name: "Altered Clang Bang",
      image: "/calculadora-ww/echos/altered-clang-bang-icon.webp",
      cost: 1,
    },
    {
      name: "Altered Lightcrusher",
      image: "/calculadora-ww/echos/altered-lightcrusher-icon.webp",
      cost: 3,
    },
    {
      name: "Autopuppet Scout",
      image: "/calculadora-ww/echos/autopuppet-scout-icon.webp",
      cost: 3,
    },
    {
      name: "Bell-Borne Geochelone",
      image: "/calculadora-ww/echos/bell-borne-geochelone-icon.webp",
      cost: 4,
    },
    {
      name: "Chaserazor",
      image: "/calculadora-ww/echos/chaserazor-icon.webp",
      cost: 3,
    },
    {
      name: "Chasm Guardian",
      image: "/calculadora-ww/echos/chasm-guardian-icon.webp",
      cost: 3,
    },
    {
      name: "Chirpuff",
      image: "/calculadora-ww/echos/chirpuff-icon.webp",
      cost: 1,
    },
    {
      name: "Clang Bang",
      image: "/calculadora-ww/echos/clang-bang-icon.webp",
      cost: 1,
    },
    {
      name: "Crownless",
      image: "/calculadora-ww/echos/crownless-icon.webp",
      cost: 4,
    },
    {
      name: "Cruisewing",
      image: "/calculadora-ww/echos/cruisewing-icon.webp",
      cost: 1,
    },
    {
      name: "Cyan-Feathered Heron",
      image: "/calculadora-ww/echos/cyan-feathered-heron-icon.webp",
      cost: 3,
    },
    {
      name: "Diamondclaw",
      image: "/calculadora-ww/echos/diamondclaw-icon.webp",
      cost: 1,
    },
    {
      name: "Dreamless",
      image: "/calculadora-ww/echos/dreamless-icon.webp",
      cost: 4,
    },
    {
      name: "Dreamless",
      image: "/calculadora-ww/echos/dwarf-cassowary-icon.webp",
      cost: 1,
    },
    {
      name: "Electro Predator",
      image: "/calculadora-ww/echos/electro-predator-icon.webp",
      cost: 1,
    },
    {
      name: "Excarat",
      image: "/calculadora-ww/echos/excarat-icon.webp",
      cost: 1,
    },
    {
      name: "Feilian Beringal",
      image: "/calculadora-ww/echos/feilian-beringal-icon.webp",
      cost: 4,
    },
    {
      name: "Firebug",
      image: "/calculadora-ww/echos/firebug-icon.webp",
      cost: 1,
    },
    {
      name: "Fission Junrock",
      image: "/calculadora-ww/echos/fission-junrock-icon.webp",
      cost: 1,
    },
    {
      name: "Flautist",
      image: "/calculadora-ww/echos/flautist-icon.webp",
      cost: 3,
    },
    {
      name: "Fusion Dreadmane",
      image: "/calculadora-ww/echos/fusion-dreadmane-icon.webp",
      cost: 1,
    },
    {
      name: "Fusion Prism",
      image: "/calculadora-ww/echos/fusion-prism-icon.webp",
      cost: 1,
    },
    {
      name: "Fusion Warrior",
      image: "/calculadora-ww/echos/fusion-warrior-icon.webp",
      cost: 1,
    },
    {
      name: "Geohide Saurian",
      image: "/calculadora-ww/echos/geohide-saurian-icon.webp",
      cost: 3,
    },
    {
      name: "Glacio Dreadmane",
      image: "/calculadora-ww/echos/glacio-dreadmane-icon.webp",
      cost: 3,
    },
    {
      name: "Glacio Predator",
      image: "/calculadora-ww/echos/glacio-predator-icon.webp",
      cost: 1,
    },
    {
      name: "Glacio Prism",
      image: "/calculadora-ww/echos/glacio-prism-icon.webp",
      cost: 1,
    },
    {
      name: "Gulpuff",
      image: "/calculadora-ww/echos/gulpuff-icon.webp",
      cost: 1,
    },
    {
      name: "Havoc Dreadmane",
      image: "/calculadora-ww/echos/havoc-dreadmane-icon.webp",
      cost: 3,
    },
    {
      name: "Havoc Prism",
      image: "/calculadora-ww/echos/havoc-prism-icon.webp",
      cost: 1,
    },
    {
      name: "Havoc Warrior",
      image: "/calculadora-ww/echos/havoc-warrior-icon.webp",
      cost: 1,
    },
    {
      name: "Hoartoise",
      image: "/calculadora-ww/echos/hoartoise-icon.webp",
      cost: 1,
    },
    {
      name: "Hoochief",
      image: "/calculadora-ww/echos/hoochief-icon.webp",
      cost: 3,
    },
    {
      name: "Hooscamp",
      image: "/calculadora-ww/echos/hooscamp-icon.webp",
      cost: 1,
    },
    {
      name: "Impermanence Heron",
      image: "/calculadora-ww/echos/impermanence-heron-icon.webp",
      cost: 4,
    },
    {
      name: "Inferno Rider",
      image: "/calculadora-ww/echos/inferno-rider-icon.webp",
      cost: 4,
    },
    {
      name: "Jué",
      image: "/calculadora-ww/echos/jue-icon.webp",
      cost: 4,
    },
    {
      name: "Lampylumen Myriad",
      image: "/calculadora-ww/echos/lampylumen-myriad-icon.webp",
      cost: 4,
    },
    {
      name: "Lightcrusher",
      image: "/calculadora-ww/echos/lightcrusher-icon.webp",
      cost: 3,
    },
    {
      name: "Lumiscale Construct",
      image: "/calculadora-ww/echos/lumiscale-construct-icon.webp",
      cost: 3,
    },
    {
      name: "Mech Abomination",
      image: "/calculadora-ww/echos/mech-abomination-icon.webp",
      cost: 4,
    },
    {
      name: "Mourning Aix",
      image: "/calculadora-ww/echos/mourning-aix-icon.webp",
      cost: 4,
    },
    {
      name: "Phantom: Feilian Beringal",
      image: "/calculadora-ww/echos/phantom-feilian-beringal-icon.webp",
      cost: 4,
    },
    {
      name: "Phantom: Hoartoise",
      image: "/calculadora-ww/echos/phantom-hoartoise-icon.webp",
      cost: 1,
    },
    {
      name: "Phantom: Impermanence Heron",
      image: "/calculadora-ww/echos/phantom-impermanence-heron-icon.webp",
      cost: 4,
    },
    {
      name: "Phantom: Mourning Aix",
      image: "/calculadora-ww/echos/phantom-mourning-aix-icon.webp",
      cost: 4,
    },
    {
      name: "Phantom: Rocksteady Guardian",
      image: "/calculadora-ww/echos/phantom-rocksteady-guardian-icon.webp",
      cost: 3,
    },
    {
      name: "Phantom: Thundering Mephis",
      image: "/calculadora-ww/echos/phantom-thundering-mephis-icon.webp",
      cost: 4,
    },
    {
      name: "Rocksteady Guardian",
      image: "/calculadora-ww/echos/rocksteady-guardian-icon.webp",
      cost: 3,
    },
    {
      name: "Roseshroom",
      image: "/calculadora-ww/echos/roseshroom-icon.webp",
      cost: 3,
    },
    {
      name: "Sabyr Boar",
      image: "/calculadora-ww/echos/sabyr-boar-icon.webp",
      cost: 1,
    },
    {
      name: "Snip Snap",
      image: "/calculadora-ww/echos/snip-snap-icon.webp",
      cost: 1,
    },
    {
      name: "Spearback",
      image: "/calculadora-ww/echos/spearback-icon.webp",
      cost: 3,
    },
    {
      name: "Spectro Prism",
      image: "/calculadora-ww/echos/spectro-prism-icon.webp",
      cost: 1,
    },
    {
      name: "Stonewall Bracer",
      image: "/calculadora-ww/echos/stonewall-bracer-icon.webp",
      cost: 3,
    },
    {
      name: "Tambourinist",
      image: "/calculadora-ww/echos/tambourinist-icon.webp",
      cost: 3,
    },
    {
      name: "Tempest Mephis",
      image: "/calculadora-ww/echos/tempest-mephis-icon.webp",
      cost: 4,
    },
    {
      name: "Thundering Mephis",
      image: "/calculadora-ww/echos/thundering-mephis-icon.webp",
      cost: 4,
    },
    {
      name: "Tick Tack",
      image: "/calculadora-ww/echos/tick-tack-icon.webp",
      cost: 1,
    },
    {
      name: "Traffic Illuminator",
      image: "/calculadora-ww/echos/traffic-illuminator-icon.webp",
      cost: 1,
    },
    {
      name: "Vanguard Junrock",
      image: "/calculadora-ww/echos/vanguard-junrock-icon.webp",
      cost: 1,
    },
    {
      name: "Violet-Feathered Heron",
      image: "/calculadora-ww/echos/violet-feathered-heron-icon.webp",
      cost: 3,
    },
    {
      name: "Whiff Whaff",
      image: "/calculadora-ww/echos/whiff-whaff-icon.webp",
      cost: 1,
    },
    {
      name: "Young Geohide Saurian",
      image: "/calculadora-ww/echos/young-geohide-saurian-icon.webp",
      cost: 1,
    },
    {
      name: "Young Roseshroom",
      image: "/calculadora-ww/echos/young-roseshroom-icon.webp",
      cost: 1,
    },
    {
      name: "Zig Zag",
      image: "/calculadora-ww/echos/zig-zag-icon.webp",
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