import React, { Component, useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

class HomeTimelineSec extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount () {
        fetch('/public/home_timeline.json')
          .then(response => response.json())
          .then(data => this.setState({ items: data }));
      }


    render () {
        let timelines = this.state.items.map((item) => {
            return (
                <li className={item.id % 2 !== 0?"timeline":"timeline-inverted"} key={item.id}>
                    <div className="timeline-image">
                        <h4>
                            <div dangerouslySetInnerHTML={{__html: item.type}}></div>
                        </h4>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h5>{item.time}</h5>
            <h4 className="subheading">{item.title}</h4>
                      </div>
                      <div className="timeline-body" >
                        <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                      </div>
                      </div>
                </li>
            );
          });
        return (
            <section id="about">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section-heading text-uppercase">Professional Experiences</h2>
                            <h3 className="section-subheading text-muted">Here is a rough timeline of my professional experiences. More info can be found in my <a href="https://github.com/GitHubdeWill/public-resume/raw/master/Ziwei_He_Full_May20.pdf">RESUME</a>.</h3>
                        </Col>
                    </Row>
                    <ul className="timeline">
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>More<br/>Coming<br/>
                                    <div>
                                        in
                                        <span id="year">
                                        {" "+(new Date().getFullYear())}
                                        </span>
                                    </div>
                                </h4>
                            </div>
                        </li>
                        {timelines}
                    </ul>
                </Container>
            </section>
        );
    }
}

export default HomeTimelineSec;