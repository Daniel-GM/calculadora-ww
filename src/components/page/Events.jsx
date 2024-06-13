import Accordion from 'react-bootstrap/Accordion';
import DivEventos from '../DivEventos';

const Events = () => {
  return (
    <Accordion className='w-75'>
      <DivEventos 
        eventKey="0" 
        title="Overdash Club" 
        inicio="30/05" 
        fim="17/06" 
        text="Texto aqui" 
      />

      <DivEventos 
        eventKey="1" 
        title="Intensive Training" 
        inicio="06/06" 
        fim="13/06" 
        text="Texto aqui 2" 
      />

      <DivEventos 
        eventKey="2" 
        title="Alloy Smelt" 
        inicio="05/06" 
        fim="27/06" 
        text="Texto aqui 3" 
      />

    </Accordion>
  )
}

export default Events;
