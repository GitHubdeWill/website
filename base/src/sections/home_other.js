import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class HomeOtherSec extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <section className="bg-light" id="homeother">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section-heading text-uppercase">Other Positions</h2>
                            <h3 className="section-subheading text-muted">Here is a list of other positions I held in the past.</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="10" className="mx-auto">
                            <p>
                                2017-2020<br/>
                                <b>Teaching Assistant</b> for Computer System Principles, Data Structures, and Web Programming in UMass Amherst
                                <br/><br/>
                                2017<br/>
                                <b>Research Mentor</b> in Office of Undergraduate Research and Studies in Learning Resource Center in UMass Amherst
                                <br/><br/>
                                2016-2017<br/>
                                Lead of Department of Composition and Arranging of Chinese Music Association in UMass Amherst
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default HomeOtherSec;