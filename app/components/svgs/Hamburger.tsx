import * as React from "react"
import { SVGProps } from "react"
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="svg1"
    width={64}
    height={64}
    viewBox="0 0 16.933 16.933"
    {...props}
  >
    <defs id="defs1">
      <linearGradient id="linearGradient1">
        <stop
          id="stop3"
          offset={0}
          style={{
            stopColor: "#000",
            stopOpacity: 1,
          }}
        />
        <stop
          id="stop4"
          offset={1}
          style={{
            stopColor: "#000",
            stopOpacity: 0,
          }}
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient1"
        id="linearGradient2"
        x1={0.77}
        x2={229.23}
        y1={108.971}
        y2={108.971}
        gradientUnits="userSpaceOnUse"
      />
      <linearGradient
        xlinkHref="#paint0_linear_547_855"
        id="paint0_linear_547_855"
        x1={124.82}
        x2={120.865}
        y1={67.33}
        y2={217.26}
        gradientTransform="translate(12.083)"
        gradientUnits="userSpaceOnUse"
      >
        <stop id="stop2" stopColor="#FF00F5" />
        <stop id="stop5" offset={1} stopColor="#00F0FF" />
      </linearGradient>
      <linearGradient
        xlinkHref="#paint0_linear_547_855"
        id="linearGradient577"
        x1={118.997}
        x2={119.499}
        y1={62.724}
        y2={148.925}
        gradientTransform="translate(12.083)"
        gradientUnits="userSpaceOnUse"
      />
      <clipPath id="clip0_544_10092">
        <path id="rect1" fill="#fff" d="M0 0h230v218H0z" />
      </clipPath>
      <filter
        id="filter569"
        width={1.031}
        height={1.075}
        x={-0.013}
        y={-0.033}
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feFlood
          id="feFlood568"
          floodColor="#000"
          floodOpacity={0.467}
          result="flood"
        />
        <feGaussianBlur
          id="feGaussianBlur568"
          in="SourceGraphic"
          result="blur"
          stdDeviation="0.993 1.5"
        />
        <feOffset id="feOffset568" dx={1} dy={1} in="blur" result="offset" />
        <feComposite
          id="feComposite568"
          in="flood"
          in2="offset"
          operator="in"
          result="comp1"
        />
        <feComposite
          id="feComposite569"
          in="SourceGraphic"
          in2="comp1"
          operator="over"
          result="comp2"
        />
      </filter>
    </defs>
    <g id="layer1">
      <g
        id="g2"
        clipPath="url(#clip0_544_10092)"
        style={{
          fill: "url(#linearGradient2)",
        }}
        transform="matrix(.06949 0 0 .06949 .476 .895)"
      >
        <path
          id="path1"
          d="M37.59 47.142v15.582h186.979V47.142H37.589zm0 46.745v15.582h186.979V93.887H37.589zm0 46.745v15.581h186.979v-15.581H37.589z"
          style={{
            fontVariationSettings: "normal",
            opacity: 1,
            vectorEffect: "none",
            fill: "url(#linearGradient577)",
            fillOpacity: 1,
            stroke: "url(#meshgradient7)",
            strokeWidth: 0,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            strokeMiterlimit: 4,
            strokeDasharray: "none",
            strokeDashoffset: 0,
            strokeOpacity: 1,
            filter: "url(#filter569)",
            stopColor: "#000",
            stopOpacity: 1,
          }}
          transform="translate(-13.619 9.092) scale(.97748)"
        />
      </g>
    </g>
    <script id="mesh_polyfill" type="text/javascript">
      {
        '!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();'
      }
    </script>
  </svg>
)
export default Hamburger
