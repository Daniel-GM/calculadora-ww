import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { parse, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import './DivEventos.css';

const calculaDiferencaTempo = (inicio, fim) => {
  const agora = new Date()


  const verificaDias = differenceInDays(inicio, agora)
  const verificaHoras = differenceInHours(inicio, agora) % 24
  const verificaMinutos = differenceInMinutes(inicio, agora) % 60

  if(verificaDias > 0 || verificaHoras > 0 || verificaMinutos > 0)
    return "Em breve"

  const dias = differenceInDays(fim, agora);
  const horas = differenceInHours(fim, agora) % 24;
  const minutos = differenceInMinutes(fim, agora) % 60;

  if(dias <= 0 && horas <= 0 && minutos <= 0)
    return "Evento finalizado"
  return `${dias}d ${horas}h ${minutos}m`;
}

const DivEventos = ({ eventKey, title, text, dataInicio, horaInicio, dataFim, horaFim }) => {
  const inicio = parse(`${dataInicio} ${horaInicio}`, 'dd/MM HH:mm', new Date())
  const fim = parse(`${dataFim} ${horaFim}`, 'dd/MM HH:mm', new Date())
  const [diferencaTempo, setDiferencaTempo] = useState(calculaDiferencaTempo(inicio, fim))

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDiferencaTempo(calculaDiferencaTempo(inicio, fim));
    }, 60000);

    return () => clearInterval(intervalo);
  }, [fim]);

  const bodyStyle = {
    background: "#3C3C3C",
    color: "#fff",
    textAlign: "left"
  }

  return (
    <Accordion.Item eventKey={eventKey} className='mb-4 position-relative' >
      <Accordion.Header className={"header"}>{title}</Accordion.Header>
      <span className='data-evento'>{diferencaTempo}</span>
      <Accordion.Body style={bodyStyle}>
        <p>{dataInicio} {horaInicio} ~ {dataFim} {horaFim}</p> Descrição: {text}
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default DivEventos;