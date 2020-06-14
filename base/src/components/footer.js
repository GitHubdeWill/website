import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
    <footer>
      <Container>
        <Row>
          <Col md="4">
            <div>
              &copy;
              <span id="year">
                {" " + (new Date().getFullYear()) + " "}
              </span>
              WILLH.ML
            </div>
          </Col>
          <Col md="4"></Col>
          <Col md="4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                Powered by React
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  }
}

export default Footer;