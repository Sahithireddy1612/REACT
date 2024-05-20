import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

export default function CorouselComponent() {
  return (
    <>
    <h1>COROUSEL</h1>
    <MDBCarousel showControls showIndicators touch={false}>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' height={500} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' height={500}/>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' height={500} />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={4}>
        <img src='https://mdbootstrap.com/img/new/slides/044.jpg' className='d-block w-100' alt='...' height={500}  />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={5}>
        <img src='https://mdbootstrap.com/img/new/slides/045.jpg' className='d-block w-100' alt='...' height={500}  />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={6}>
        <img src='https://mdbootstrap.com/img/new/slides/046.jpg' className='d-block w-100' alt='...' height={500}  />
      </MDBCarouselItem>
    </MDBCarousel>
    </>
  );
}