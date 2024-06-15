import { useState } from "react";


const DivSubStatus = () => {
  const echos = [
    {
      name: "HP",
      min: "320",
      max: "580",
    },
    {
      name: "ATK",
      min: "30",
      max: "70",
    },
    {
      name: "DEF",
      min: "30",
      max: "70",
    },
    {
      name: "HP%",
      min: "6,4%",
      max: "11,6",
    },
    {
      name: "ATK%",
      min: "6,4%",
      max: "11,6%",
    },
    {
      name: "DEF%",
      min: "6,4%",
      max: "11,6%",
    },
    {
      name: "CRIT Rate",
      min: "6,3%",
      max: "10,5%",
    },
    {
      name: "CRIT DMG",
      min: "12,6%",
      max: "21%",
    },
    {
      name: "Energy Regen",
      min: "5,6%",
      max: "14,9%",
    },
    {
      name: "Basic Attack DMG Bonus",
      min: "6,4%",
      max: "12,4",
    },
    {
      name: "Heavy Attack DMG Bonus",
      min: "6,4%",
      max: "11,6",
    },
    {
      name: "Resonance Skill DMG Bonus",
      min: "6,4%",
      max: "11,6",
    },
    {
      name: "Resonance Liberation DMG Bonus",
      min: "6,4%",
      max: "11,6",
    },
  ];

  const handleEchoChange = (event) => {
    const selected = echos.find(echo => echo.cost === event.target.value);
    setSelectedEcho(selected);
  }

  const [selectedEcho, setSelectedEcho] = useState(echos[0]);

  return (
    <div>
      sub 1
      <div className="dados-echo">
        <select onChange={handleEchoChange}>
          {echos.map((echo, index) => (
            <option key={index} value={echo.cost}>
              {echo.name}
            </option>
          ))}
        </select>
        <input></input>
      </div>
    </div>
  )
}

export default DivSubStatus