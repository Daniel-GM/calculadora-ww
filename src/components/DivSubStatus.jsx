import { useState, useEffect } from "react";
import "./DivSubStatus.css";

const DivSubStatus = ({ index, updateEficiencia, indexPai, idCard, id }) => {
  const subStatus = [
    { name: "HP", min: "320", max: "580" },
    { name: "ATK", min: "30", max: "70" },
    { name: "DEF", min: "30", max: "70" },
    { name: "HP%", min: "6,4%", max: "11.6%" },
    { name: "ATK%", min: "6.4%", max: "11.6%" },
    { name: "DEF%", min: "6,4%", max: "11.6%" },
    { name: "CRIT Rate", min: "6.3%", max: "10.5%" },
    { name: "CRIT DMG", min: "12.6%", max: "21%" },
    { name: "Energy Regen", min: "5.6%", max: "14.9%" },
    { name: "Basic Attack DMG Bonus", min: "6.4%", max: "12.4" },
    { name: "Heavy Attack DMG Bonus", min: "6.4%", max: "11.6" },
    { name: "Resonance Skill DMG Bonus", min: "6.4%", max: "11.6" },
    { name: "Resonance Liberation DMG Bonus", min: "6.4%", max: "11.6" },
  ];

  const localStorageKey = `DivSubStatus_${id}_${indexPai}_${index}`;

  const [selectedSubStatus, setSelectedSubStatus] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);
        return parsedValue.selectedSubStatus || subStatus[0];
      } catch (error) {
        console.error("Error parsing localStorage value:", error);
      }
    }
    return subStatus[0];
  });

  const [inputValue, setInputValue] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    if (storedValue) {
      try {
        const parsedValue = JSON.parse(storedValue);
        return parsedValue.inputValue || "";
      } catch (error) {
        console.error("Error parsing localStorage value:", error);
      }
    }
    return "";
  });

  const [eficiencia, setEficiencia] = useState(0);

  const getBarEficiencia = () => {
    if (eficiencia < 40) return "rgba(255,0,0,1)";
    else if (eficiencia < 70) return "rgba(255,255,0,1)";
    else if (eficiencia <= 100) return "rgba(0,255,0,1)";
    else return "rgba(255,255,255,0.5)";
  };

  const styleEficiencia = {
    marginTop: `5px`,
    width: `90%`,
    height: `5px`,
    background: `linear-gradient(to right, ${getBarEficiencia()} 0%, ${getBarEficiencia()} ${eficiencia}%, rgba(255, 255, 255, 0.5) ${eficiencia}%)`,
  };

  const handleEficiencia = (event) => {
    const value = parseFloat(event.target.value.replace("%", "")) || 0;
    const min = parseFloat(selectedSubStatus.min);
    const max = parseFloat(selectedSubStatus.max);

    const dividendo = value - min;
    const divisor = max - min;
    const eficienciaCalc = parseFloat(((dividendo / divisor) * 100).toFixed(2));

    if (eficienciaCalc >= 0 && eficienciaCalc <= 100)
      updateEficiencia(index, eficienciaCalc);
    else updateEficiencia(index, 0);
    setEficiencia(eficienciaCalc);
    setInputValue(event.target.value);
  };

  const handleSubStatusChange = (event) => {
    const selected = subStatus.find(
      (substatus) => substatus.name === event.target.value
    );
    setSelectedSubStatus(selected);
    setEficiencia(0);
    updateEficiencia(index, 0);
    setInputValue("");
  };

  useEffect(() => {
    const storeData = () => {
      try {
        const dataToStore = {
          selectedSubStatus,
          inputValue,
        };
        localStorage.setItem(localStorageKey, JSON.stringify(dataToStore));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    };

    storeData();
  }, [selectedSubStatus, inputValue]);

  useEffect(() => {
    if (inputValue) {
      const event = { target: { value: inputValue } };
      handleEficiencia(event);
    }
  }, [selectedSubStatus]);

  return (
    <div className="div-substatus">
      <div className="dados-echo">
        <select value={selectedSubStatus.name} onChange={handleSubStatusChange}>
          {subStatus.map((substatus, index) => (
            <option key={index} value={substatus.name}>
              {substatus.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={inputValue}
          onChange={handleEficiencia}
        ></input>
      </div>
      <div style={styleEficiencia}></div>
    </div>
  );
};

export default DivSubStatus;
