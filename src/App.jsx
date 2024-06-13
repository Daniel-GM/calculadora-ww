import { useState } from "react";
import "./App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Calculate from "./components/page/Calculate";
import { Container } from "react-bootstrap";
import Events from "./components/page/Events";

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
            WuWa Eficiência em construção
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default App;
