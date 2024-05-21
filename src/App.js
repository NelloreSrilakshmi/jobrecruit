import logo from "./logo.png";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
    <Container>
      <Row>
        <div className="iQuizUAnswerlogo">
          <img src={logo} alt="" className="logo"></img>
        </div> 
      </Row>
      <h1 className="heading">Are you a</h1>
      <Row>
      <div className="d-flex flex">
          <Col lg={6}>
            <div className="main">
              <div className="sub-main">
                <h2 className="jobseeker">JOBSEEKER</h2>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="main">
              <div className="sub-mainrecruiter">
                <h2 className="recruiter">RECRUITER</h2>
              </div>
            </div>
          </Col>
          </div>
      </Row>
    </Container>
    </>
  );
}

export default App;
