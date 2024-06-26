import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { parse, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import './DivEventos.css';

const calculaTempo = (dia, horas, minutos, situacao) => {
  if (situacao < 0) return `Acabou há: ${dia * -1}d ${horas * -1}h ${minutos * -1}m`;
  else if (situacao === 0) return `Duração: ${dia}d ${horas}h ${minutos}m`;
  else if (situacao > 0) return `Começará em: ${dia}d ${horas}h ${minutos}m`;
};

const calculaDiferencaTempo = (inicio, fim, origem) => {
  const agora = new Date();

  const verificaDias = differenceInDays(inicio, agora);
  const verificaHoras = differenceInHours(inicio, agora) % 24;
  const verificaMinutos = differenceInMinutes(inicio, agora) % 60;

  if (verificaDias > 0 || verificaHoras > 0 || verificaMinutos > 0) {
    if (origem === 1) return calculaTempo(verificaDias, verificaHoras, verificaMinutos, 1);
    return "Em breve";
  }

  const dias = differenceInDays(fim, agora);
  const horas = differenceInHours(fim, agora) % 24;
  const minutos = differenceInMinutes(fim, agora) % 60;

  if (dias <= 0 && horas <= 0 && minutos <= 0) {
    if (origem === 1) return calculaTempo(dias, horas, minutos, -1);
    return "Evento finalizado";
  }

  if (origem === 1) return calculaTempo(dias, horas, minutos, 0);
  return `${dias}d ${horas}h ${minutos}m`;
};

const determinarClasse = (diferencaTempo, rotativo) => {
  let classe = '';
  if (rotativo) {
    classe = 'rotativo';
  } else {
    if (diferencaTempo === "Em breve") {
      classe = 'em-breve';
    } else if (diferencaTempo === "Evento finalizado") {
      classe = 'finalizado';
    } else {
      classe = 'em-andamento';
    }
  }
  return classe;
};

const DivEventos = ({ eventKey, title, text, dataInicio, horaInicio, dataFim, horaFim, rotativo }) => {
  const inicio = parse(`${dataInicio} ${horaInicio}`, 'dd/MM HH:mm', new Date());
  const fim = parse(`${dataFim} ${horaFim}`, 'dd/MM HH:mm', new Date());
  const [diferencaTempo, setDiferencaTempo] = useState(calculaDiferencaTempo(inicio, fim, 0));
  const [tempoBody, setTempoBody] = useState(calculaDiferencaTempo(inicio, fim, 1));

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDiferencaTempo(calculaDiferencaTempo(inicio, fim, 0));
      setTempoBody(calculaDiferencaTempo(inicio, fim, 1));
    }, 60000);

    return () => clearInterval(intervalo);
  }, [fim]);

  const bodyStyle = {
    background: "#3C3C3C",
    color: "#fff",
    textAlign: "left"
  };

  const classeDinamica = determinarClasse(diferencaTempo, rotativo);

  return (
    <Accordion.Item eventKey={eventKey} className={`mb-4 position-relative ${classeDinamica}`}>
      <Accordion.Header className="header">{title}</Accordion.Header>
      <span className='data-evento'>{diferencaTempo}</span>
      <Accordion.Body style={bodyStyle}>
        <p>{tempoBody}</p>
        <p>{dataInicio} {horaInicio} ~ {dataFim} {horaFim}</p>
        Descrição: {text}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default DivEventos;