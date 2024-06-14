import { useState } from "react";
import DivEficiencia from "../DivEficiencia";

const Eficiencia = () => {
  const [divEficiencia, setDivEficiencia] = useState([])

  const handleDivEficiencia = () => {
    setDivEficiencia([...divEficiencia, <DivEficiencia key={divEficiencia.length}/> ])
  }

  return (
    <div  className="w-75" id="eficiencia">
      <button onClick={handleDivEficiencia}>+ Adicionar personagem</button>
      <div>
        {divEficiencia}
      </div>
    </div>
  );
};

export default Eficiencia;
