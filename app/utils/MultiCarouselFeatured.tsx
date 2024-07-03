import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { ProductCard } from '~/components/products/ProductCard';
import '~/styles/app.css';

export default function MultiCarousel({ featuredProducts }) {
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
        {featuredProducts.map((product) => (
          <div key={product.id} className="flicking-panel">
            <ProductCard {...product} />
          </div>
        ))}
      </Flicking>
    </div>
  );
}