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
      if (window.innerWidth < 768) {
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
      <div className="h-80 flex items-center justify-center mt-0 mr-auto mb-0 ml-auto flex-wrap container">
        <div className="p-4 h-full flex flex-col items-center justify-center overflow-hidden w-1/12">
          <ButtonBack className="buttoneins rounded-full">{'<'}</ButtonBack>
          <ButtonFirst className="buttoneins rounded-full">{'<<'}</ButtonFirst>
        </div>

        <div className="p-4 h-full flex items-center justify-center overflow-hidden w-10/12">
          <Slider className="py-2 flex flex-row">
            
            {collections.map(collection => (
              
              <Slide className="flex flex-col  p-2 pb-4"  index={collection.id} key={collection.id}>
                <CollectionCard collection={collection} />
                <div className="flex flex-col w-4 p-4"></div>
              </Slide>
              
           
            ))}
          </Slider>
        </div>

        <div className="p-4 h-full flex flex-col items-center justify-center overflow-hidden w-1/12">
          <ButtonNext className="buttoneins rounded-full">{'>'}</ButtonNext>
          <ButtonLast className="buttoneins rounded-full">{'>>'}</ButtonLast>
        </div>
      </div>
    </CarouselProvider>
  );
}
