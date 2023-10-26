import{s as e,j as t,S as r,C as s}from"./index-98864d9d.js";const c=e.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    & li:first-child {
        margin-right: 24px;
      }
      @media (max-width: 1250px) {
        display: none; 
      }
`,o=e.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0 24px;
    height: 48px;
    border-radius: 0px;
    border: 1px solid #000000
`,p=()=>t.jsxs(c,{children:[t.jsx(r,{fontWeight:"500",fontSize:"14px",lineHeight:"24px",letterSpacing:"0.06em",children:t.jsx("a",{children:"+48 58 506 65 65"})}),t.jsx(r,{children:t.jsx(o,{children:"Zapytaj o ofertę"})}),t.jsx(r,{children:t.jsx(o,{children:"Umów jazdę próbną"})})]}),l=e.ul`
  color: #242221;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 697px) {
    display: none;
  }
`,g=()=>t.jsxs(l,{children:[t.jsx(r,{lineHeight:"26px",fontWeight:"300",children:t.jsx("span",{children:"Samochody"})}),t.jsx(r,{lineHeight:"26px",fontWeight:"300",children:t.jsx("span",{children:"Jazda próbna"})}),t.jsx(r,{lineHeight:"26px",fontWeight:"300",children:t.jsx("span",{children:"Oferta"})}),t.jsx(r,{lineHeight:"26px",fontWeight:"300",children:t.jsx("span",{children:"Salony Cupra"})})]}),h=e.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,x=()=>t.jsxs(h,{children:[t.jsx(g,{}),t.jsx(p,{})]}),m=e.header`
  background-color: #f5f5f5;
  height: 84px;
  display: flex;
  align-items: center;
`,u=e(s)`
  display: flex;
  gap: 96px;
`,j="/Zadanie-LD/logo.svg",f=()=>t.jsx(m,{children:t.jsxs(u,{children:[t.jsx("img",{src:j,alt:"Cupra logo"}),t.jsx(x,{})]})}),w="/Zadanie-LD/image/cupra_bg.png",y="/Zadanie-LD/image/cupra_bg@2x.png",S=e.section`
  min-height: 884px;
  background-image: url(${w});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${y});
  }
`,b=()=>t.jsx(S,{}),z=e.img`
width: 100%;
@media (min-width: 1200px) {
    width: ${n=>n.width||"100%"};
}
`,k=({image:n})=>t.jsx(z,{src:n.imageSource,width:n.width}),C=e.section`
  padding: 104px 0;
`,H=e(s)`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
  margin: 0;

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
    grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );
    grid-column-gap: 32px;
    margin: 0 auto;
    > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    > :nth-child(2) {
      grid-area: 2 / 1 / 5 / 2; 

    }
    > :nth-child(3) {
      grid-area: 5/1/6/2;
      margin-top: 213px;
    }
    > :nth-child(4) {
      grid-area: 2 / 2 / 7 / 3; 
      margin-top: 128px;
      justify-self: end;
    }

    > :nth-child(2) {
      margin-top: 68px;
    }
  }
`,W=e.span`
  font-size: ${n=>n.fontSize||"60px"};
  font-weight: 300;
  margin-left: 20px;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`,R=e.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff80;
  margin-left: 20px;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`,L=e.button`
padding: ${n=>n.padding||""};
height: ${n=>n.height||""};
margin-left: 20px;
@media (min-width: 1430px) {
  margin-left: 0
}
`,v=({data:n})=>t.jsx(C,{children:t.jsx(H,{children:n.map((i,a)=>{const d=i.button.shouldRenderButton;return t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:i.style,children:[t.jsx(W,{fontSize:i.span.fontSize||"",children:i.span.sectionSpan}),t.jsx(R,{children:i.text.sectionText}),d?t.jsx(L,{padding:i.button.padding,height:i.button.height,children:"Umów jazdę próbnąa"}):t.jsx(t.Fragment,{})]},a),t.jsx(k,{image:i.image,alt:a})]})})})}),U=[{style:{color:"white",maxWidth:"553px"},span:{sectionSpan:"WYPRÓBUJ"},text:{sectionText:"Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu."},image:{imageSource:"/image/section/cupra_formentor.png",width:"787px"},button:{shouldRenderButton:!1}},{style:{color:"white",maxWidth:"553px"},span:{sectionSpan:"TYLKO DLA ODWAŻNYCH",fontSize:"40px"},text:{sectionText:"Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA."},image:{imageSource:"/image/section/cupra_formentor_1.png",width:"553px"},button:{shouldRenderButton:!0,padding:"0 24px",height:"48px"}}],D=()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{}),t.jsx(b,{}),t.jsx(v,{data:U})]});export{D as default};
