import Accordion from 'react-bootstrap/Accordion';
import './DivEventos.css';

const DivEventos = ({ eventKey, title, text, inicio, fim }) => {

  const bodyStyle = {
    background: "#fff",
    color: "#2C2D33",
    textAlign: "left"
  }

  return (
    <Accordion.Item eventKey={eventKey} className='mb-4 position-relative' >
      <Accordion.Header className={"header"}>{title}</Accordion.Header>
      <span className='data-evento'>{inicio} ~ {fim}</span>
      <Accordion.Body style={bodyStyle}>
        Descrição: {text}
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default DivEventos;
