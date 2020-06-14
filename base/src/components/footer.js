import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

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
            <div>
                Powered by React
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  }
}

export default Footer;