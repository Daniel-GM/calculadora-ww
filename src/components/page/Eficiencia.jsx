import { useState } from "react";
import DivEficiencia from "../DivEficiencia";

const Eficiencia = () => {
  const [divEficiencia, setDivEficiencia] = useState([])

  const handleDivEficiencia = () => {
    setDivEficiencia([ ...divEficiencia, <DivEficiencia key={divEficiencia.length}/> ])
  }

  return (
    <div  className="w-100" id="eficiencia">
      <button className="w-25" onClick={handleDivEficiencia}>+ Adicionar personagem</button>
      <div>
        {divEficiencia}
      </div>
    </div>
  );
};

export default Eficiencia;
