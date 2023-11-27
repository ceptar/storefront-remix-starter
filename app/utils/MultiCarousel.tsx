import React, { useState, useEffect } from 'react';
import { useLoaderData } from '@remix-run/react';
import { CollectionCard } from '~/components/collections/CollectionCard';
import Right from '~/components/svgs/Right';
import RightRight from '~/components/svgs/RightRight';
import Left from '~/components/svgs/Left';
import LeftLeft from '~/components/svgs/LeftLeft';

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
// Use this flag to conditionally render the CarouselProvider
  const shouldRenderCarousel = typeof window !== 'undefined';

export default function MultiCarousel() {
  const { collections } = useLoaderData<LoaderData>();
  const [visibleSlides, setVisibleSlides] = useState(2);
  const [slideWidth, setSlideWidth] = useState(100);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
  
      if (windowWidth < 500) {
        setVisibleSlides(1);
        setSlideWidth(90); // Full width for small screens
      } else if (windowWidth < 768) {
        setVisibleSlides(2);
        setSlideWidth(45); // 50% width for medium screens
      } else if (windowWidth < 1024) {
        setVisibleSlides(3);
        setSlideWidth(30); // 33.33% width for larger screens
      } else if (windowWidth < 1300) {
        setVisibleSlides(4);
        setSlideWidth(22); // 25% width for even larger screens
      } else {
        setVisibleSlides(5);
        setSlideWidth(18); // 20% width for extra-large screens
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
    naturalSlideWidth={slideWidth}
    naturalSlideHeight={200}
    isIntrinsicHeight={true}
    >
      <div>
        <Slider>   
          {collections.map(collection => (
            <Slide index={collection.id} key={collection.id} >
              <CollectionCard collection={collection}/>
            </Slide>
          ))}
        </Slider>
      
       
      </div>

      <div className="my-12 font-bold flex flex-row justify-center h-fit items-center">
        <ButtonFirst className="w-12 h-12 items-center justify-center flex flex-col p-3 mx-4 rounded-full bg-white shadow-md hover:shadow-none transition-all duration-300 ease-in-out"><Left className="w-full h-full"/></ButtonFirst>
        <ButtonBack className="w-12 h-12 items-center justify-center flex flex-col p-3 mx-4 rounded-full bg-white shadow-md hover:shadow-none transition-all duration-300 ease-in-out"><Left className="w-full h-full"/></ButtonBack>
        <ButtonNext  className="w-12 h-12 items-center justify-center flex flex-col p-3 mx-4 rounded-full bg-white shadow-md hover:shadow-none transition-all duration-300 ease-in-out"><Right className="w-full h-full"/></ButtonNext>
        <ButtonLast  className="w-12 h-12 items-center justify-center flex flex-col p-3 mx-4 rounded-full bg-white shadow-md hover:shadow-none transition-all duration-300 ease-in-out"><RightRight className="w-full h-full"/></ButtonLast>
      </div>

    </CarouselProvider>
  );
}