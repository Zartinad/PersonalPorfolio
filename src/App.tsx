import React from 'react';
import logo from './logo.svg';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container style={{width:"40%", paddingTop:"10px"}}>
          <Row style={{justifyContent:"space-around"}}>
            <Col sm={2}>
              <a
                className="App-link"
                href="https://drive.google.com/file/d/1F9leUufzlfSPpQWXNavEZGv9VtiN0ltM/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFilePdf size={50} />
              </a>
            </Col>
            <Col sm={2}>  <a
              className="App-link"
              href="https://github.com/Zartinad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={50} />
            </a>
            </Col>
            <Col sm={2}> <a
              className="App-link"
              href="https://www.linkedin.com/in/adam-zartin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={50} />
            </a>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
