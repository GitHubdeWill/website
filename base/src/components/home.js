import React, { Component } from 'react';

import HomeCarousel from '../shared_components/carousel'

class Home extends Component{
   render(){
      return(
         <div>
            <HomeCarousel/>
            <h1>Home</h1>
         </div>
      );
   }
}
export default Home;