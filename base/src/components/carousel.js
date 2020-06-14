import React, { useState, Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

class ProjectCarousel extends Component {

  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      animating: false,
      items: [],
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.setAnimating = this.setAnimating.bind(this);
  }

  // Dynamically Fetch carousel from JSON file
  componentDidMount () {
    fetch('/public/proj_carousel.json')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  setActiveIndex (aI) {
    this.setState({
      activeIndex: aI
    });
  }

  setAnimating (a) {
    this.setState({
      animating: a
    });
  }

  next () {
    if (this.state.animating) return;
    let nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  }

  previous () {
    if (this.state.animating) return;
    let nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setActiveIndex(nextIndex);
  }

  goToIndex (newIndex) {
    if (this.state.animating) return;
    this.setActiveIndex(newIndex);
  }

  render () {
    let styles = this.state.items.map((item) => {
      return (
          <style key={item.classname}>
            {
              `.${item.classname} {
                  max-width: 100%;
                  height: 380px;
                  background-image: url("${item.src}");
                  background-size:     cover;
                  background-repeat:   no-repeat;
                  background-position: center center;
                }`
            }
          </style>
      );
    });
    let slides = this.state.items.map((item) => {
      return (
          <CarouselItem
            className={item.classname}
            tag="div"
            key={item.id}
            onExiting={() => this.setAnimating(true)}
            onExited={() => this.setAnimating(false)}
          >
            <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
      );
    });
    return (
      <div>
        {styles}
        <Carousel
          activeIndex={this.state.activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={this.state.items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default ProjectCarousel;