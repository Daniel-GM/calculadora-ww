import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalcularXpEcho from "./components/CalcularXpEcho";
import CalcularXpPersonagem from "./components/CalcularXpPersonagem";

function App() {
  return (
    <>
      <Container className="w-100" id="calculadoras">
        <div className="nav nav-tabs row">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                href="#personagem"
                className="nav-link active"
                role="tab"
                data-toggle="tab"
              >
                Personagem
              </a>
            </li>
            <li className="nav-item">
              <a href="#echo" className="nav-link" role="tab" data-toggle="tab">
                Echo
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#waveplate"
                className="nav-link"
                role="tab"
                data-toggle="tab"
              >
                Waveplate (Resina)
              </a>
            </li>
          </ul>
          <div className="tab-content mb-5">
            <div
              id="personagem"
              className="tab-pane in active text-center"
              role="tabpanel"
            >
              <Col xl={6} md={8} xs={12}>
                <h2>Xp de personagem</h2>
                <CalcularXpPersonagem />
              </Col>
            </div>

            <div id="echo" className="tab-pane" role="tabpanel">
              <Col xl={6} md={8} xs={12}>
                <h2>Xp de Echo</h2>
                <CalcularXpEcho />
              </Col>
            </div>

            <div id="waveplate" className="tab-pane" role="tabpanel">
              <Col xl={6} md={8} xs={12}>
                <h2>Waveplate (Resina)</h2>
                <CalcularXpEcho />
              </Col>
            </div>
          </div>
        </div>
        </Container>

        {/* <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        ></Row> */}
    </>
  );
}

export default App;
