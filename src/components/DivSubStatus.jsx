import { useState } from "react";
import "./DivSubStatus.css"


const DivSubStatus = ({ index, updateEficiencia }) => {
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
      max: "11.6",
    },
    {
      name: "ATK%",
      min: "6.4%",
      max: "11.6%",
    },
    {
      name: "DEF%",
      min: "6,4%",
      max: "11.6%",
    },
    {
      name: "CRIT Rate",
      min: "6.3%",
      max: "10.5%",
    },
    {
      name: "CRIT DMG",
      min: "12.6%",
      max: "21%",
    },
    {
      name: "Energy Regen",
      min: "5.6%",
      max: "14.9%",
    },
    {
      name: "Basic Attack DMG Bonus",
      min: "6.4%",
      max: "12.4",
    },
    {
      name: "Heavy Attack DMG Bonus",
      min: "6.4%",
      max: "11.6",
    },
    {
      name: "Resonance Skill DMG Bonus",
      min: "6.4%",
      max: "11.6",
    },
    {
      name: "Resonance Liberation DMG Bonus",
      min: "6.4%",
      max: "11.6",
    },
  ];

  const [selectedSubStatus, setSelectedSubStatus] = useState(subStatus[0]);
  const [eficiencia, setEficiencia] = useState(0);

  const getBarEficiencia = () => {
    if (eficiencia < 40) return 'rgba(255,0,0,1)'
    else if (eficiencia < 70) return 'rgba(255,255,0,1)'
    else if (eficiencia <= 100) return 'rgba(0,255,0,1)'
    else return 'rgba(255,255,255,1)'
  }

  const styleEficiencia = {
    marginTop: `5px`,
    width: `90%`,
    height: `5px`,
    background: `linear-gradient(to right, ${getBarEficiencia()} 0%, ${getBarEficiencia()} ${eficiencia}%, rgba(255, 255, 255, 1) ${eficiencia}%   )`,
  }

  const handleEficiencia = (event) => {
    const value = parseFloat(event.target.value.replace('%', '')) || 0;
    const min = parseFloat(selectedSubStatus.min);
    const max = parseFloat(selectedSubStatus.max);

    const dividendo = value - min
    const divisor = max - min
    const eficienciaCalc = (dividendo / divisor) * 100

    updateEficiencia(index, eficienciaCalc)
    setEficiencia(eficienciaCalc)
  }

  const handleSubStatusChange = (event) => {
    const selected = subStatus.find(substatus => substatus.name === event.target.value)
    setSelectedSubStatus(selected)
    setEficiencia(0)
    updateEficiencia(index, 0)
  }

  return (
    <div className="div-substatus">
      {/* {substatus.name} */}
      <div className="dados-echo">
        <select onChange={handleSubStatusChange}>
          {subStatus.map((substatus, index) => (
            <option key={index} value={substatus.name}>
              {substatus.name}
            </option>
          ))}
        </select>
        <input type="number" onChange={handleEficiencia}></input>
      </div>
      <div style={styleEficiencia}></div>

    </div>
  )
}

export default DivSubStatus