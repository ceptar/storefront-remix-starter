import * as React from 'react';
import { SVGProps } from 'react';
const Cart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64" // Set the viewBox attribute for responsive scaling
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M2.892 4C2.399 4 2 4.4 2 4.892v2.124c0 .492.4.892.892.892h7.636l9.996 41.256c-2.152.964-3.667 3.107-3.667 5.634a6.2 6.2 0 1 0 12.399 0c0-.816-.163-1.588-.45-2.293h11.851a6.058 6.058 0 0 0-.45 2.293A6.2 6.2 0 0 0 46.404 61c3.423 0 6.2-2.778 6.2-6.202a6.2 6.2 0 0 0-6.2-6.203H24.406l-.597-2.463h28.664a.892.892 0 0 0 .845-.606l8.609-25.41a.893.893 0 0 0-.02-.756l-.002-.004a.892.892 0 0 0-.882-.49h-43.82L13.766 4.682A.892.892 0 0 0 12.9 4H2.893Zm19.97 38.228-4.714-19.452h38.756l-6.592 19.452h-27.45Zm-2.097 12.574a2.295 2.295 0 0 1 2.291-2.293 2.296 2.296 0 0 1 2.292 2.293 2.295 2.295 0 0 1-2.292 2.292 2.295 2.295 0 0 1-2.29-2.292Zm23.348 0a2.295 2.295 0 0 1 2.291-2.293 2.298 2.298 0 0 1 2.294 2.293 2.296 2.296 0 0 1-2.294 2.292 2.295 2.295 0 0 1-2.291-2.292Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={32}
        x2={32}
        y1={4}
        y2={61}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00F5" />
        <stop offset={1} stopColor="#00F0FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default Cart;
