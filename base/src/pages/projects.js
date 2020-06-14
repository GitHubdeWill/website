import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ProjectCarousel from '../components/carousel'

class ProjectsPage extends Component{
   constructor (props) {
      super(props);
      this.state = {
          items: []
      };
   }

   componentDidMount () {
      fetch('/public/proj_list.json')
        .then(response => response.json())
        .then(data => this.setState({ items: data }));
   }

   render(){
    let projlist = this.state.items.map((item) => {
      return (
        <Row key={item.id}>
          <Col lg="10" className="mx-auto">
            <h3>{item.project_name}</h3>
            <h6 className="text-muted">{item.time}</h6>
            <h5 className="text-muted">Abstract</h5>
            <div dangerouslySetInnerHTML={{__html: item.abstract}}></div>
            <div dangerouslySetInnerHTML={{__html: item.moreinfo}}></div>
            <br/><br/>
          </Col>
        </Row>
      );
    });
      return(
         <div>
            <ProjectCarousel />
            <br/>
            <section className="bg-light" id="works">
              <Container>
                <Row>
                  <Col lg="12" className="text-center">
                    <h2 className="section-heading text-uppercase">Recent Works</h2>
                    <h3 className="section-subheading text-muted">Here is a list of projects I have been involved in lately.</h3>
                  </Col>
                </Row>
                {projlist}
              </Container>
            </section>
         </div>
      );
   }
}
export default ProjectsPage;