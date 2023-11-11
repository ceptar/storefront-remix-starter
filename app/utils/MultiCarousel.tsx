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
  const [slideWidth, setSlideWidth] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setVisibleSlides(1), setSlideWidth(1);
      } else if (window.innerWidth < 768) {
        setVisibleSlides(2), setSlideWidth(0.5);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(3), setSlideWidth(0.33);
      } else {
        setVisibleSlides(4), setSlideWidth(0.25);
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
      naturalSlideWidth={setSlideWidth}
      naturalSlideHeight={800}
      isIntrinsicHeight
    >
      <div className="h-auto flex items-center justify-center mt-0 mb-0 container">
      

        <div className="h-full flex items-center justify-center overflow-hidden ">
          <Slider

          >
            
            {collections.map(collection => (
              
              <Slide className="flex flex-col pb-4"  index={collection.id} key={collection.id}>
                <CollectionCard collection={collection} />

              </Slide>
              
           
            ))}
          </Slider>
        </div>

       
      </div>
      <div className="mt-4 font-bold flex flex-row justify-center items-center">
        <ButtonFirst className="buttoneins rounded-full w-9 h-9 mx-2 px-4">{'<<'}</ButtonFirst>
        <ButtonBack className="buttoneins rounded-full w-9 h-9 mx-2 px-4">{'<'}</ButtonBack>
        <ButtonNext className="buttoneins rounded-full w-9 h-9 mx-2 px-4">{'>'}</ButtonNext>
        <ButtonLast className="buttoneins rounded-full w-9 h-9 mx-2 px-4">{'>>'}</ButtonLast>
      </div>
    </CarouselProvider>
  );
}
