import { Component } from "react";
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
//import Carousel from "mdb-react-ui-kit";

class Carousell extends Component {
  state = {
    imgs: [
        'https://mdbootstrap.com/img/new/slides/041.jpg',
      'https://mdbootstrap.com/img/new/slides/042.jpg',
      'https://mdbootstrap.com/img/new/slides/043.jpg',


    ],
  };

  add = () => {
    const newimg = prompt("Enter image address");
    if (newimg) { 
      this.setState(prevState => ({
        imgs: [
          ...prevState.imgs,
          newimg,
        ],
      }));
    }


  };
  render() {
    const { imgs } = this.state;
    return (
      <>
        <div>
        <MDBCarousel showControls showIndicators touch={true}>
          {imgs.map((img, index) => (
            <MDBCarouselItem key={index} itemId={index + 1}>
              <img src={img} className='d-block w-100' alt='...' height={500} />
            </MDBCarouselItem>
          ))}
        </MDBCarousel>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button onClick={this.add}>Add image</button>
        </div>
      </div>
      </>
    );
  }
}

export default Carousell;