import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';

import HomeHeaderSec from '../sections/home_header';
import HomeFociSec from '../sections/home_foci';


class HomePage extends Component {
   constructor (props) {
      super(props);
      this.numSecs = 2;
      this.myRefs = [];
      for (let i = 0; i < this.numSecs; i++) {
         this.myRefs.push(React.createRef());
      }

      this.state = {
         currentSec: 0
      };

      this.scrollToNextMyRef = this.scrollToNextMyRef.bind(this);
   }

   scrollToNextMyRef () {
      window.scrollTo(0, this.myRefs[this.state.currentSec].current.offsetTop);
      this.setState({currentSec: (this.state.currentSec+1)%this.numSecs});
   } 

   render(){
      const fab_style = {
         margin: 0,
         top: 'auto',
         right: 20,
         bottom: 20,
         left: 'auto',
         position: 'fixed',
         zIndex: 999
     };
      return(
         <div>
            <Fab style={fab_style} variant="extended" onClick={this.scrollToNextMyRef}>
               Next Section
            </Fab>
            <div ref={this.myRefs[0]}>
               <HomeHeaderSec />
            </div>
            <div ref={this.myRefs[1]}>
               <HomeFociSec />
            </div>
         </div>
      );
   }
}
export default HomePage;