import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col } from 'reactstrap';

import Jumbotro from "../components/intro";
import PostDrawer from "../components/drawer";
import Markdown from "../components/advmarkdown";

class BlogPostsPage extends Component {

   constructor(props) {
      super(props);
      this.handlePostChange = this.handlePostChange.bind(this);
      this.state = {
         title: '',
         date: '',
         currentPostText: '',
         filename: ''
      };
   }

   componentDidMount() {
      var req_url = window.location.pathname;
      if (req_url.startsWith("/post/_")) {
         // console.log("redirecting to specific post");
         var post_filename = decodeURI(req_url).split("/post/_")[1];
         console.log(post_filename);
         var file_properties = post_filename.split("-_-");
         this.setState({
            title: file_properties[1].replace('_', ' '),
            date: file_properties[0],
            filename: post_filename
         });

         fetch('/public/posts/' + post_filename)
                  .then(response => response.text())
                  .then(data => this.setState({ currentPostText: data }));
      } else {
         fetch('/api/list_posts')
            .then(response => response.json())
            .then(data => {
               this.setState({
                  title: data[0].title.replace('_', ' '),
                  date: data[0].date,
                  filename: data[0].filename
               });
               fetch('/public/posts/' + data[0].filename)
                  .then(response => response.text())
                  .then(data => this.setState({ currentPostText: data }));

            });
      }
   }

   // handle Page change event
   handlePostChange(item) {
      this.setState({
         title: item.title.replace('_', ' '),
         date: item.date,
         filename: item.filename
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
                        <Col sm="8" className=" mx-auto">{this.state.title.replace('.md', '')}</Col>
                        <Col sm="4" className="text-center mx-auto">{this.state.date}</Col>
                     </Row>
                     <br/><br/>
                     <Markdown>{this.state.currentPostText}</Markdown>

                     <br/>
                     <p>Link to this post: <a href={location.protocol + '//' + location.host + '/post/_' + this.state.filename}>{location.protocol + '//' + location.host + '/post/_' + this.state.filename}</a></p>
                  </Col>
                  <Col md="2"></Col>
               </Row>
            </Container>
         </div>
      );
   }
}
export default BlogPostsPage;