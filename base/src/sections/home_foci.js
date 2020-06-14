import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                            <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-adjust fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading"><a href="#works">Data Science and Machine Learning</a></h4>
                            <p className="text-muted">I am interested in researches related to Information Retrieval, Statistical Learning on Big Data and Computer Vision using various machine learning methodologies.</p>
                        </Col>

                        <Col md='4'>
                            <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading"><a href="https://github.com/ripples">Cloud Software Engineering and Server Administration</a></h4>
                            <p className="text-muted">I am interested in Software Development on Multiple Servers or Hybrid Cloud Environment related to Information Retrieval, Video/Image processing, streaming and management. I am also interested in solutions for Analytical workloads in cloud environment.</p>
                        </Col>

                        <Col md='4'>
                            <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-robot fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading"><a href="https://interactive-algos.github.io">Robotics Navigation</a></h4>
                            <p className="text-muted">I am interested in researches related to robot localization and navigation algorithms.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default HomeFociSec;