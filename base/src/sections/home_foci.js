import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCircle, faAdjust, faRobot } from '@fortawesome/free-solid-svg-icons'

import classNames from 'classnames';

class HomeFociSec extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <section id="foci">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section-heading text-uppercase">Research Areas</h2>
                            <h3 className="section-subheading text-muted">Here is a list of my primary research/professional foci</h3>
                        </Col>
                    </Row>

                    <Row className="text-center">
                        <Col md='4'>
                            <span className="fa-layers fa-fw fa-4x">
                                <FontAwesomeIcon icon={faCircle} transform="grow-10" />
                                <FontAwesomeIcon icon={faAdjust} inverse />
                            </span>
                            <h4 className="service-heading">Data Science and Machine Learning</h4>
                            <p className="text-muted">I am interested in researches related to Information Retrieval, Statistical Learning on Big Data and Computer Vision using various machine learning methodologies.</p>
                        </Col>

                        <Col md='4'>
                            <span className="fa-layers fa-fw fa-4x">
                                <FontAwesomeIcon icon={faCircle} transform="grow-10" />
                                <FontAwesomeIcon icon={faLaptop} inverse />
                            </span>
                            <h4 className="service-heading">Cloud Software Engineering and Server Administration</h4>
                            <p className="text-muted">I am interested in Software Development on Multiple Servers or Hybrid Cloud Environment related to Information Retrieval, Video/Image processing, streaming and management. I am also interested in solutions for Analytical workloads in cloud environment.</p>
                        </Col>

                        <Col md='4'>
                            <span className="fa-layers fa-fw fa-4x">
                                <FontAwesomeIcon icon={faCircle} transform="grow-10" />
                                <FontAwesomeIcon icon={faRobot} inverse />
                            </span>
                            <h4 className="service-heading">Robotics Navigation and Planning</h4>
                            <p className="text-muted">I am interested in researches related to robot localization and navigation algorithms.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default HomeFociSec;