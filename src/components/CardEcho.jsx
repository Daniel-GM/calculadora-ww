import { useState, useEffect, useId } from "react";
import "./CardEcho.css";
import DivEchoSelect from "./DivEchoSelect";
import DivSubStatus from "./DivSubStatus";

const CardEcho = ({ indexPai, id }) => {
  const idCard = useId();
  const localStorageKey = `CardEcho_${id}_${indexPai}`;

  const [eficiencias, setEficiencias] = useState(() => {
    const storedValues = localStorage.getItem(localStorageKey);
    if (storedValues) {
      try {
        return JSON.parse(storedValues);
      } catch (error) {
        console.error("Error parsing localStorage values:", error);
      }
    }
    return Array(5).fill(0);
  });

  const updateEficiencia = (index, value) => {
    const newEficiencias = [...eficiencias];
    newEficiencias[index] = value;
    setEficiencias(newEficiencias);
    localStorage.setItem(localStorageKey, JSON.stringify(newEficiencias));
  };

  const calculateScore = () => {
    const total = eficiencias.reduce((acc, val) => acc + val, 0);
    const average = total / eficiencias.length;
    const clampedAverage = Math.max(0, Math.min(average, 100));
    return clampedAverage.toFixed(1);
  };

  const valorTotal = () => {
    const totalScore = document.getElementById(indexPai)
    let totalScoreCalc = 0
    
    for (let x = 0; x < 5; x++) {
      const score = document.querySelector(`.score-card-echo-${x}-${indexPai}`)
      const scoreValue = parseFloat(score.textContent);
      if(!isNaN(scoreValue))
        totalScoreCalc += scoreValue
    }
    totalScoreCalc /= 5

    if (totalScore != null) totalScore.textContent = totalScoreCalc.toFixed(2)
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(eficiencias));
  }, [eficiencias, localStorageKey]);

  useEffect(() => {
    valorTotal();
  }, [eficiencias]);

  return (
    <div className="cards-echo">
      <h4 className={`score-${id}-${indexPai}`}>{calculateScore()}</h4>
      <DivEchoSelect indexPai={indexPai} id={id} />
      {eficiencias.map((_, index) => (
        <DivSubStatus
          key={index}
          index={index}
          updateEficiencia={updateEficiencia}
          indexPai={indexPai}
          idCard={idCard}
          id={id}
        />
      ))}
    </div>
  );
};

export default CardEcho;
