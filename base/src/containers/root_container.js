import React, { Component, useState } from 'react';

import HomePage from '../pages/home'
import BlogPostsPage from '../pages/blogposts'
import ProjectsPage from '../pages/projects'
import MorePage from '../pages/more'

import GlobalNavbar from '../components/navbar'

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
   renderSwitch(targetPage) {
      switch(targetPage) {
         case 'Home':
            return <HomePage/>;
         case 'BlogPosts':
            return <BlogPostsPage/>;
         case 'Projects':
            return <ProjectsPage/>;
         case 'More':
            return <MorePage/>;
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