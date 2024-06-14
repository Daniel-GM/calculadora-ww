import "./App.css";
import "./components/Responsividade.css";

import { useState } from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Calculate from "./components/page/Calculate";
import Events from "./components/page/Events";
import Eficiencia from "./components/page/Eficiencia";

function App() {
  const [key, setKey] = useState("calculadora");

  return (
    <>
      <Container id="main-container">
        <Tabs
          id="controlled-tab"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="calculadora" title="Calculadora">
            <Calculate />
          </Tab>
          <Tab eventKey="eventos" title="Eventos">
            <Events />
          </Tab>
          <Tab eventKey="eficiencia" title="Eficiência">
            {/* <p>WuWa Eficiência em construção</p> */}
            <Eficiencia />
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default App;
