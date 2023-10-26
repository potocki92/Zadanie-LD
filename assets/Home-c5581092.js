import{s as n,j as e,S as i,C as a}from"./index-ee944c90.js";const c=n.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    & li:first-child {
        margin-right: 24px;
      }
      @media (max-width: 1250px) {
        display: none; 
      }
`,t=n.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0 24px;
    height: 48px;
    border-radius: 0px;
    border: 1px solid #000000
`,d=()=>e.jsxs(c,{children:[e.jsx(i,{fontWeight:"500",fontSize:"14px",lineHeight:"24px",letterSpacing:"0.06em",children:e.jsx("a",{children:"+48 58 506 65 65"})}),e.jsx(i,{children:e.jsx(t,{children:"Zapytaj o ofertę"})}),e.jsx(i,{children:e.jsx(t,{children:"Umów jazdę próbną"})})]}),l=n.ul`
  color: #242221;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 697px) {
    display: none;
  }
`,p=()=>e.jsxs(l,{children:[e.jsx(i,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Samochody"})}),e.jsx(i,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Jazda próbna"})}),e.jsx(i,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Oferta"})}),e.jsx(i,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Salony Cupra"})})]}),x=n.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,h=()=>e.jsxs(x,{children:[e.jsx(p,{}),e.jsx(d,{})]}),g=n.header`
  background-color: #f5f5f5;
  height: 84px;
  display: flex;
  align-items: center;
`,j=n(a)`
  display: flex;
  gap: 96px;
`,m="/Zadanie-LD/logo.svg",u=()=>e.jsx(g,{children:e.jsxs(j,{children:[e.jsx("img",{src:m,alt:"Cupra logo"}),e.jsx(h,{})]})}),f="/Zadanie-LD/image/cupra_bg.png",y="/Zadanie-LD/image/cupra_bg@2x.png",w=n.section`
  min-height: 884px;
  background-image: url(${f});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${y});
  }
`,b=()=>e.jsx(w,{}),S=n.section`
  padding: 104px 0;
`,k=n(a)`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  :nth-child(1) {
    grid-row-start: 1;
  }
  :nth-child(2) {
    grid-row-start: 2;
  }
  :nth-child(3) {
    grid-row-start: 3;
  }
  :nth-child(4) {
    grid-row-start: 4;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr);
    :nth-child(1) {
      grid-area: 1/1/4/4;
    }
    :nth-child(2) {
      grid-area: 2/1/6/1;
    }
    :nth-child(3) {
      grid-area: 7/1/7/1;
    }
    :nth-child(4) {
      grid-area: 2/2/8/2;
      margin-top: 128px;
      justify-self: end;
    }

    > :nth-child(2) {
      margin-top: 68px;
    }
  }
`,r=n.span`
  font-size: ${s=>s.fontSize||"60px"};
  font-weight: 300;
`,o=n.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff80;
`,z="/Zadanie-LD/image/section/cupra_formentor.png",C="/Zadanie-LD/image/section/cupra_formentor_1.png",H=()=>e.jsx(S,{children:e.jsxs(k,{children:[e.jsxs("div",{style:{color:"white",maxWidth:"553px"},children:[e.jsx(r,{children:"WYPRÓBUJ"}),e.jsx(o,{children:"Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu."})]}),e.jsx("img",{src:z}),e.jsxs("div",{style:{color:"white"},children:[e.jsx(r,{fontSize:"40px",children:"TYLKO DLA ODWAŻNYCH"}),e.jsx(o,{children:"Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA."})]}),e.jsx("img",{src:C})]})}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(b,{}),e.jsx(H,{})]});export{W as default};
