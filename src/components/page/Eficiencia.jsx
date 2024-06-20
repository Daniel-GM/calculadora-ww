import React, { useState, useEffect } from "react";
import DivEficiencia from "../DivEficiencia";
import { v4 as uuidv4 } from "uuid";

const Eficiencia = () => {
  const [divEficiencia, setDivEficiencia] = useState([]);

  useEffect(() => {
    const savedDivEficiencia = JSON.parse(
      localStorage.getItem("divEficiencia")
    );
    if (savedDivEficiencia) {
      setDivEficiencia(savedDivEficiencia);
    }
  }, []);

  const handleDivEficiencia = () => {
    const newIndex = uuidv4();
    const newDivEficiencia = [...divEficiencia, { indexPai: newIndex }];
    setDivEficiencia(newDivEficiencia);
    localStorage.setItem("divEficiencia", JSON.stringify(newDivEficiencia));
  };

  const handleDeleteDivEficiencia = (indexPai) => {
    const newDivEficiencia = divEficiencia.filter(
      (item) => item.indexPai !== indexPai
    );
    setDivEficiencia(newDivEficiencia);
    localStorage.setItem("divEficiencia", JSON.stringify(newDivEficiencia));
    localStorage.removeItem(`selectedCharacter-${indexPai}`);
    for (let i = 0; i < 5; i++) {
      localStorage.removeItem(`CardEcho_card-echo-${i}_${indexPai}`);
      for (let j = 0; j < 5; j++) {
        localStorage.removeItem(`DivSubStatus_card-echo-${i}_${indexPai}_${j}`);
      }
    }
  };

  const handleExcluirTodos = () => {
    if (
      window.confirm(
        "Você tem certeza que deseja excluir todos os itens? Esta ação não pode ser desfeita."
      )
    ) {
      setDivEficiencia([]);
      localStorage.clear();
    }
  };

  return (
    <div className="w-100" id="eficiencia">
      <button className="w-25" onClick={handleDivEficiencia}>
        + Adicionar personagem
      </button>
      <div>
        {divEficiencia.map((item) => (
          <div key={item.indexPai} className="div-eficiencia-item">
            <DivEficiencia indexPai={item.indexPai} />
            <button onClick={() => handleDeleteDivEficiencia(item.indexPai)}>
              Excluir
            </button>
          </div>
        ))}
      </div>
      <button
        style={{ marginTop: "100px" }}
        className="w-25"
        onClick={handleExcluirTodos}
      >
        Excluir todos
      </button>
    </div>
  );
};

export default Eficiencia;
