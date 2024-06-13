import Accordion from "react-bootstrap/Accordion";
import DivEventos from "../DivEventos";

const Events = () => {
  return (
    <Accordion className="w-75">
      <DivEventos
        eventKey="0"
        title="Overdash Club"
        dataInicio="30/05"
        dataFim="17/06"
        horaInicio="23:00"
        horaFim="06:00"
        text="-"
      />

      <DivEventos
        eventKey="1"
        title="Intensive Training"
        dataInicio="06/06"
        dataFim="13/06"
        horaInicio="06:00"
        horaFim="06:00"
        text="-"
      />

      <DivEventos
        eventKey="2"
        title="Alloy Smelt"
        dataInicio="05/06"
        dataFim="27/06"
        horaInicio="20:00"
        horaFim="06:00"
        text="-"
      />

      <DivEventos
        eventKey="3"
        title="Wuthering Exploration"
        dataInicio="13/06"
        dataFim="27/06"
        horaInicio="12:00"
        horaFim="05:59"
        text="Complete Missões de Exploração diariamente para obter Pontos de Exploração e reivindique recompensas após alcançar marcos de Pontos de Exploração."
      />

    </Accordion>
  );
};

export default Events;
