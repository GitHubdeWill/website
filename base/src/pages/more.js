import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'


class MorePage extends Component {
   render() {
      return (
         <section className="bg-light" id="team">
            <Container>
               <Row>
                  <Col lg="12" className="text-center">
                     <h2 className="section-heading text-uppercase">More About Me</h2>
                  </Col>
               </Row>
               <Row>
                  <Col sm="3"></Col>
                  <Col sm="6">
                     <div className="team-member">
                        <img className="mx-auto rounded-circle" src="/public/images/avatar.jpg" alt=""/>
                           <br/><br/>
                           <ul className="list-inline social-buttons">
                              <li className="list-inline-item">
                                 <a target='_blank' href="https://github.com/githubdewill">
                                    <FontAwesomeIcon icon={faGithub} />
                                 </a>
                              </li>
                              <li className="list-inline-item">
                                 <a target='_blank' href="https://music.163.com/#/artist?id=12143072">
                                    <FontAwesomeIcon icon={faGuitar}/>
                                 </a>
                              </li>
                              <li className="list-inline-item">
                                 <a target='_blank' href="https://www.linkedin.com/in/ziwei-he-674098a1">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                 </a>
                              </li>
                           </ul>
                     </div>
                  </Col>
                  <Col sm="3"></Col>
               </Row>
            </Container>
         </section>
      );
   }
}
export default MorePage;