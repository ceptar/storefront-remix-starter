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
      if (window.innerWidth < 500) {
        setVisibleSlides(2); 
        
      } else if (window.innerWidth < 768) {
        setVisibleSlides(3);
        
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(4);
        
      } else {
        setVisibleSlides(5);
       
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [collections]);

  return (
    <CarouselProvider
      visibleSlides={visibleSlides}
      totalSlides={collections.length}
      step={1}
      naturalSlideWidth={100}
      naturalSlideHeight={400}
      isIntrinsicHeight={true}
    >
      <div className="w-full flex justify-center px-8 overflow-hidden ">
        <Slider className="overflow-hidden mx-auto">   
          {collections.map(collection => (
            <Slide index={collection.id} key={collection.id} className="max-w-full flex">
              <CollectionCard collection={collection} className=""/>
            </Slide>
          ))}
        </Slider>
      
       
      </div>

      <div className="mt-12 font-bold flex flex-row justify-center items-center">
        <ButtonFirst className="buttoneins rounded-full w-12 h-12 mr-4 p-2">{'<<'}</ButtonFirst>
        <ButtonBack className="buttoneins rounded-full w-12 h-12 mx-4 p-2">{'<'}</ButtonBack>
        <ButtonNext className="buttoneins rounded-full w-12 h-12 mx-4 p-2">{'>'}</ButtonNext>
        <ButtonLast className="buttoneins rounded-full w-12 h-12 ml-4 p-2">{'>>'}</ButtonLast>
      </div>

    </CarouselProvider>
  );
}