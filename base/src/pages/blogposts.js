import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'reactstrap';

import Jumbotro from "../components/intro";
import PostDrawer from "../components/drawer";

class BlogPostsPage extends Component {

   constructor(props) {
      super(props);
      this.handlePostChange = this.handlePostChange.bind(this);
      this.state = {
         title: '',
         date: '',
         currentPostText: ''
      };
   }

   componentDidMount() {
      fetch('/api/list_posts')
         .then(response => response.json())
         .then(data => {
            this.setState({
               title: data[0].title,
               date: data[0].date
            });
            fetch('/public/posts/' + data[0].filename)
               .then(response => response.text())
               .then(data => this.setState({ currentPostText: data }));

         });
   }

   // handle Page change event
   handlePostChange(item) {
      this.setState({
         title: item.title,
         date: item.date
      });
      fetch('/public/posts/' + item.filename)
         .then(response => response.text())
         .then(data => this.setState({ currentPostText: data }));
   }

   render() {
      return (
         <div>
            <PostDrawer onPostChange={this.handlePostChange} />
            <Jumbotro />
            <Container>
               <Row>
                  <Col md="2"></Col>
                  <Col md="8">
                     <Row>
                        <Col sm="8" className=" mx-auto">{this.state.title}</Col>
                        <Col sm="4" className="text-center mx-auto">{this.state.date}</Col>
                     </Row>
                     <br/><br/>
                     <ReactMarkdown source={this.state.currentPostText} />
                  </Col>
                  <Col md="2"></Col>
               </Row>
            </Container>
         </div>
      );
   }
}
export default BlogPostsPage;