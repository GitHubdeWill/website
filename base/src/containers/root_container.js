import React, { Component, useState } from 'react';

import Home from '../components/home'
import BlogPosts from '../components/blogposts'
import Projects from '../components/projects'

import GlobalNavbar from '../shared_components/navbar'

// The root container should include the Navigation Bar and Footer for the Website
// It should also handle the change of different pages when the user clicks the NavBar
// It should also maintain the shared states among all pages
class RootContainer extends Component{
   constructor (props) {
      super(props);
      this.handlePageChange = this.handlePageChange.bind(this);
      this.state = {
         currentPage: 'Home'
      };
   }

   // handle Page change event
   handlePageChange (pageName) {
      this.setState({currentPage: pageName});
   }

   // Switch page to be rendered
   renderSwitch(param) {
      switch(param) {
         case 'Home':
            return <Home/>;
         case 'BlogPosts':
            return <BlogPosts/>;
         case 'Projects':
            return <Projects/>;
         default:
            return <Home/>;
      }
    }

   render () {
      const page2Render = this.state.currentPage;
      return (
         <div>
            <GlobalNavbar currentPage={page2Render} onPageChange={this.handlePageChange}/>
            {this.renderSwitch(page2Render)};
         </div>
      );
   };
}
export default RootContainer;