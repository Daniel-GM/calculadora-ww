import React, { useState, useEffect } from "react";
import DivEficiencia from "../DivEficiencia";

const Eficiencia = () => {
  const [divEficiencia, setDivEficiencia] = useState([]);

  useEffect(() => {
    const savedDivEficiencia = JSON.parse(localStorage.getItem("divEficiencia"));
    if (savedDivEficiencia) {
      setDivEficiencia(savedDivEficiencia);
    }
  }, []);

  const handleDivEficiencia = () => {
    const newIndex = divEficiencia.length;
    const newDivEficiencia = [
      ...divEficiencia,
      { indexPai: newIndex },
    ];
    setDivEficiencia(newDivEficiencia);
    localStorage.setItem("divEficiencia", JSON.stringify(newDivEficiencia));
  };

  return (
    <div className="w-100" id="eficiencia">
      <button className="w-25" onClick={handleDivEficiencia}>
        + Adicionar personagem
      </button>
      <div>
        {divEficiencia.map((item, i) => (
          <DivEficiencia key={i} indexPai={item.indexPai} />
        ))}
      </div>
    </div>
  );
};

export default Eficiencia;
