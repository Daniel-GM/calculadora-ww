import { useState } from "react";
import "./DivSubStatus.css"


const DivSubStatus = () => {
  const subStatus = [
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

  const handleSubStatusChange = (event) => {
    const selected = subStatus.find(substatus => substatus.cost === event.target.value);
    setSelectedSubStatus(selected);
  }

  const [selectedSubStatus, setSelectedSubStatus] = useState(subStatus[0]);

  return (
    <div className="div-substatus">
      {/* {substatus.name} */}
      <div className="dados-echo">
        <select onChange={handleSubStatusChange}>
          {subStatus.map((substatus, index) => (
            <option key={index} value={substatus.cost}>
              {substatus.name}
            </option>
          ))}
        </select>
        <input></input>
      </div>
      <div className="eficiencia-bar"></div>

    </div>
  )
}

export default DivSubStatus