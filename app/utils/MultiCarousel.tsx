import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useLoaderData } from '@remix-run/react';
import { CollectionCard } from '~/components/collections/CollectionCard';
import '~/styles/app.css';

export default function MultiCarousel() {
  const { collections } = useLoaderData<typeof loader>();


  return (
    <div className="carousel-container">
      <Flicking
        tag="div"
        moveType="freeScroll"
        bound={true}
        hanger="0%"
        anchor="0%"
        horizontal={true}
      >
        {collections.map((collection) => (
          <div key={collection.id} className="flicking-panel">
            <CollectionCard collection={collection} />
          </div>
        ))}
      </Flicking>
    </div>
  );
}