import React from 'react';
import {
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext, CarouselProvider, Slide, Slider,
} from 'pure-react-carousel';

import '~/styles/app.css';

export default function MultiCarousel (){

    return(
   <   CarouselProvider
   visibleSlides={2}
   totalSlides={4}
   step={1}
   naturalSlideWidth={400}
   naturalSlideHeight={500}
   isIntrinsicHeight>
   
        <h2>With intrinsic axis dimension</h2>
    <p />
    <Slider>
      <Slide index={0}>
        <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </Slide>
      <Slide index={1}>
        <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
          accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata
          sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita
          kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.
        </p>
      </Slide>
      <Slide index={2}>
        <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
          accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata
          sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita
          kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.
        </p>
      </Slide>
      <Slide index={2}>
        <h1>This is a test slide to demonstrate, how this affects height</h1>
        <p>
          lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et
          accusam et justo duo dolores et ea rebum. stet clita kasd gubergren, no sea takimata
          sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. at vero eos et accusam et justo duo dolores et ea rebum. stet clita
          kasd gubergren, no sea takimata sanctus est lorem ipsum dolor sit amet.
        </p>
      </Slide>
    </Slider>
    <ButtonFirst className="button-wrapper">First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
  </CarouselProvider>
    );
  }