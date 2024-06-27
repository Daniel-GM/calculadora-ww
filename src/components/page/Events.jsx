import Accordion from "react-bootstrap/Accordion";
import DivEventos from "../DivEventos";

const Events = () => {
  return (
    <Accordion className="w-75">
      <DivEventos
        eventKey="0"
        title="Update 1.1"
        dataInicio="27/06"
        dataFim="28/06"
        horaInicio="19:00"
        horaFim="02:00"
        text="<br/>Compensação de Manutenção: Astrite x300, Solvente de Cristal x2
              <br/><br/>Elegibilidade para Compensação: Crie um personagem e desbloqueie o recurso de Correio antes de 28 de junho de 2024 às 06:00 (UTC+8). 
              A compensação pode ser reivindicada antes da atualização da Versão 1.2. ※ Caso a manutenção seja estendida, a equipe de desenvolvimento 
              emitirá um aviso de acompanhamento e ajustará a compensação conforme necessário."
        rotativo={true}
      />

      <DivEventos
        eventKey="1"
        title="Resonator em Destaque: Jinhsi"
        dataInicio="28/06"
        dataFim="22/07"
        horaInicio="02:00"
        horaFim="5:59"
        text={`<br/>5★ Jinhsi (Spectro / Broadblade)
              <br/><br/>4★ Danjin: (Havoc / Sword)
              <br/>4★ Yangyang: (Aero / Sword)
              <br/>4★ Sanhua: (Glacio / Sword)`}
        rotativo={true}
      />

      <DivEventos
        eventKey="2"
        title="Armas em Destaque: Ages of Harvest"
        dataInicio="28/06"
        dataFim="22/07"
        horaInicio="02:00"
        horaFim="5:59"
        text={`<br/>5★ Ages of Harvest
              <br/><br/>4★ Discord
              <br/>4★ Commando of Conviction
              <br/>4★ Amity Accord`}
        rotativo={true}
      />

      <DivEventos
        eventKey="3"
        title="Leveling material double drop event"
        dataInicio="11/07"
        dataFim="18/07"
        horaInicio="06:00"
        horaFim="5:59"
        text={`Reach Union Level 14`}
        rotativo={false}
      />

      <DivEventos
        eventKey="4"
        title="Echo double drop event"
        dataInicio="06/08"
        dataFim="13/08"
        horaInicio="06:00"
        horaFim="5:59"
        text={`Reach Union Level 19`}
        rotativo={false}
      />

      <DivEventos
        eventKey="5"
        title="Area Exploration event"
        dataInicio="28/06"
        dataFim="13/08"
        horaInicio="02:00"
        horaFim="5:59"
        text={`Reach Union Level 14`}
        rotativo={false}
      />

      <DivEventos
        eventKey="6"
        title="Photo collection event"
        dataInicio="28/06"
        dataFim="13/08"
        horaInicio="02:00"
        horaFim="5:59"
        text={`Complete side quest "Scale of Past"`}
        rotativo={false}
      />

      <DivEventos
        eventKey="7"
        title="Check-in event"
        dataInicio="04/07"
        dataFim="13/08"
        horaInicio="06:00"
        horaFim="5:59"
        text={`Reach Union Level 8`}
        rotativo={false}
      />

      <DivEventos
        eventKey="8"
        title="7-day login event"
        dataInicio="28/06"
        dataFim="13/08"
        horaInicio="02:00"
        horaFim="5:59"
        text={`Reach Union Level 8`}
        rotativo={false}
      />

      <DivEventos
        eventKey="9"
        title="Dreams ablaze in darkness (Illusive realm)"
        dataInicio="04/07"
        dataFim="05/08"
        horaInicio="12:00"
        horaFim="5:59"
        text={`Reach Union Level 17`}
        rotativo={true}
      />

      <DivEventos
        eventKey="10"
        title="Battle challenge"
        dataInicio="20/07"
        dataFim="08/08"
        horaInicio="12:00"
        horaFim="5:59"
        text={`Reach Union Level 14`}
        rotativo={false}
      />

      <DivEventos
        eventKey="11"
        title="Commission Event"
        dataInicio="25/07"
        dataFim="08/08"
        horaInicio="12:00"
        horaFim="5:59"
        text={`Reach Union Level 14`}
        rotativo={false}
      />
    </Accordion>
  );
};

export default Events;
