import * as React from "react"
import { SVGProps } from "react"
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M62 17C61.9894 17.0007 61.9788 17.0015 61.9683 17.0024H2V22H62V17Z"
      fill="url(#paint0_linear_604_881)"
    />
    <path
      d="M62 43C61.9894 43.0007 61.9788 43.0015 61.9683 43.0024H2V48H62V43Z"
      fill="url(#paint1_linear_604_881)"
    />
    <path
      d="M62 30C61.9894 30.0007 61.9788 30.0015 61.9683 30.0024H2V35H62V30Z"
      fill="url(#paint2_linear_604_881)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_604_881"
        x1={32}
        y1={17}
        x2={32}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00F5" />
        <stop offset={1} stopColor="#00F0FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_604_881"
        x1={32}
        y1={17}
        x2={32}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00F5" />
        <stop offset={1} stopColor="#00F0FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_604_881"
        x1={32}
        y1={17}
        x2={32}
        y2={48}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF00F5" />
        <stop offset={1} stopColor="#00F0FF" />
      </linearGradient>
    </defs>
  </svg>
)
export default Hamburger
