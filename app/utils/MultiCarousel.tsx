import React, { useState, useEffect } from 'react';
import { useLoaderData } from '@remix-run/react';
import { CollectionCard } from '~/components/collections/CollectionCard';

import {
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';

import '~/styles/app.css';

interface Collection {
  id: string;
  name: string; 
}

interface LoaderData {
  collections: Collection[];
}

export default function MultiCarousel() {
  const { collections } = useLoaderData<LoaderData>();
  const [visibleSlides, setVisibleSlides] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 400) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 768) {
        setVisibleSlides(2);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(4);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <CarouselProvider
      visibleSlides={visibleSlides}
      totalSlides={collections.length}
      step={1}
      naturalSlideWidth={0.5}
      naturalSlideHeight={500}
      isIntrinsicHeight
    >
      <div className="h-auto flex items-center justify-center mt-0 mb-0 container">
      

        <div className="p-4 h-full flex items-center justify-center overflow-hidden ">
          <Slider
            transitionMode={scroll}
            transitionDuration={2000}
            className="py-2 flex flex-row"
          >
            
            {collections.map(collection => (
              
              <Slide className="flex flex-col  p-2 pb-4"  index={collection.id} key={collection.id}>
                <CollectionCard collection={collection} />

              </Slide>
              
           
            ))}
          </Slider>
        </div>

       
      </div>
      <div className="flex flex-row justify-center items-center">
        <ButtonFirst className="buttoneins rounded-full mx-2 px-2">{'<<'}</ButtonFirst>
        <ButtonBack className="buttoneins rounded-full  mx-2 px-2">{'<'}</ButtonBack>
        <ButtonNext className="buttoneins rounded-full mx-2 px-2">{'>'}</ButtonNext>
        <ButtonLast className="buttoneins rounded-full mx-2 px-2">{'>>'}</ButtonLast>
      </div>
    </CarouselProvider>
  );
}
