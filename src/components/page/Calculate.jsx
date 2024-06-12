import React, { useState } from "react";
import "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import CalcularXpEcho from "../CalcularXpEcho";
import CalcularXpPersonagem from "../CalcularXpPersonagem";
import CalcularWaveplate from "../CalcularWaveplate";

import Nav from "react-bootstrap/Nav";

const Calculate = () => {
  const [activeTab, setActiveTab] = useState("personagem");

  return (
    <Container className="w-75" id="calculadoras">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#personagem"
            className={`nav-link ${activeTab === "personagem" ? "active" : ""}`}
            role="tab"
            onClick={() => setActiveTab("personagem")}
          >
            Personagem
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#echo"
            className={`nav-link ${activeTab === "echo" ? "active" : ""}`}
            role="tab"
            onClick={() => setActiveTab("echo")}
          >
            Echo
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#waveplate"
            className={`nav-link ${activeTab === "waveplate" ? "active" : ""}`}
            role="tab"
            onClick={() => setActiveTab("waveplate")}
          >
            Waveplate (Resina)
          </a>
        </li>
      </ul>
      <div className="tab-content mb-5">
        <div
          id="personagem"
          className={`tab-pane ${
            activeTab === "personagem" ? "show active" : ""
          } text-center`}
          role="tabpanel"
        >
          <Col xl={6} md={8} xs={12}>
            <h2>Xp de personagem</h2>
            <CalcularXpPersonagem />
          </Col>
        </div>

        <div
          id="echo"
          className={`tab-pane ${activeTab === "echo" ? "show active" : ""}`}
          role="tabpanel"
        >
          <Col xl={6} md={8} xs={12}>
            <h2>Xp de Echo</h2>
            <CalcularXpEcho />
          </Col>
        </div>

        <div
          id="waveplate"
          className={`tab-pane ${
            activeTab === "waveplate" ? "show active" : ""
          }`}
          role="tabpanel"
        >
          <Col xl={6} md={8} xs={12}>
            <h2>Waveplate (Resina)</h2>
            <CalcularWaveplate />
          </Col>
        </div>
      </div>
    </Container>
  );
};

export default Calculate;
