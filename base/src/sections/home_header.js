import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import classNames from 'classnames';

class HomeHeaderSec extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const potraitClasses = classNames('intro-port', 'mx-auto', 'rounded-circle');
        return (
            <header className="masthead">
                <Container>
                    <div className="intro-text">
                        <div className="intro-lead-in">Ziwei (William) He</div>
                        <img className={potraitClasses} src="/public/images/portrait.jpg" alt=""></img>
                        <Row>
                            <Col lg="2"></Col>
                            <Col lg="8" className="center-block">
                                <p>
                                    I'm a Software Engineer at Amazon Robotics. I was a Baystate Fellow M.S. student in <a target="_blank" href="https://www.cics.umass.edu/">Computer Science at UMass Amherst</a>. I was working with <a target="_blank" href="https://people.cs.umass.edu/~elm/">Prof. Erik Learned-Miller</a> in <a target="_blank" href="http://vis-www.cs.umass.edu/">Computer Vision Lab</a> and with <a target="_blank" href="https://www.cics.umass.edu/faculty/directory/richards_tim">Prof. Tim Richards</a> and <a target="_blank" href="https://people.cs.umass.edu/~adrion/">Prof. Richards Adrion</a> in <a target="_blank" href="http://www-ripples.cs.umass.edu/">The RIPPLES Group</a>. I have been working in areas of Computer Vision, Multi-media Software Engineering and Robotics. I obtained my Bachelor's degree from <a target="_blank" href="https://www.cics.umass.edu/">Computer Science Department at UMass Amherst</a>.
                                </p>
                            </Col>
                            <Col lg="2"></Col>
                        </Row>
                    </div>
                </Container>
            </header>
        )
    }
}

export default HomeHeaderSec;