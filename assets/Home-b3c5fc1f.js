import{s as n,j as e,r as c,S as r,C as d}from"./index-2f1dd7f6.js";const g=n.img`
width: 100%;
@media (min-width: 1200px) {
    width: ${t=>t.width||"100%"};
}

&.carousel {
    position: absolute;
}
`,l=({image:t,style:a})=>e.jsx(g,{src:t.imageSource,width:t.width,alt:t.alt,className:t.class,style:a}),u=n.section`
    background-color: #F5F5F5;
    padding: 104px 0;
`,x=n.div`
width: 100%;
max-width: 1364px;
height: 600px;
max-height: 767px;
margin: 100px auto auto;
display: flex;
position: relative;
}
`,h="/Zadanie-LD/image/carousel/cupra_ateca.png",m="/Zadanie-LD/image/carousel/cupra_born.png",f="/Zadanie-LD/image/carousel/cupra_formentor.png",j="/Zadanie-LD/image/carousel/cupra_formentorVZ.png",w="/Zadanie-LD/image/carousel/cupra_leon_sportstourer.png",S="/Zadanie-LD/image/carousel/cupra_leon.png",o={cupra_ateca:h,cupra_born:m,cupra_formentor:f,cupra_formentorVZ:j,cupra_leon_sportstourer:w,cupra_leon:S},y=[{alt:"Cupra Ateca",imageSource:o.cupra_ateca,class:"carousel"},{alt:"Cupra Born",imageSource:o.cupra_born,class:"carousel"},{alt:"Cupra Formentor",imageSource:o.cupra_formentor,class:"carousel"},{alt:"Cupra FormentorVZ",imageSource:o.cupra_formentorVZ,class:"carousel"},{alt:"Cupra Leon Sportstourer",imageSource:o.cupra_leon_sportstourer,class:"carousel"},{alt:"Cupra Leon",imageSource:o.cupra_leon,class:"carousel"}],b=()=>{const[t,a]=c.useState(0);return c.useEffect(()=>{},[t]),e.jsx(u,{children:e.jsx(x,{children:y.map((i,s)=>(console.log(i),e.jsx(l,{image:i,style:{left:`${s*100}%`,opacity:s===t?1:.2}})))})})},_=n.ul`
    display: flex;
    align-items: center;
    gap: 24px;

    & li:first-child {
        margin-right: 24px;
      }
      @media (max-width: 1250px) {
        display: none; 
      }
`,p=n.button`
    cursor: pointer;
    background-color: transparent;
    padding: 0 24px;
    height: 48px;
    border-radius: 0px;
    border: 1px solid #000000
`,C=()=>e.jsxs(_,{children:[e.jsx(r,{fontWeight:"500",fontSize:"14px",lineHeight:"24px",letterSpacing:"0.06em",children:e.jsx("a",{children:"+48 58 506 65 65"})}),e.jsx(r,{children:e.jsx(p,{children:"Zapytaj o ofertę"})}),e.jsx(r,{children:e.jsx(p,{children:"Umów jazdę próbną"})})]}),z=n.ul`
  color: #242221;
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 697px) {
    display: none;
  }
`,k=()=>e.jsxs(z,{children:[e.jsx(r,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Samochody"})}),e.jsx(r,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Jazda próbna"})}),e.jsx(r,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Oferta"})}),e.jsx(r,{lineHeight:"26px",fontWeight:"300",children:e.jsx("span",{children:"Salony Cupra"})})]}),L=n.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`,Z=()=>e.jsxs(L,{children:[e.jsx(k,{}),e.jsx(C,{})]}),D=n.header`
  background-color: #f5f5f5;
  height: 84px;
  display: flex;
  align-items: center;
`,H=n(d)`
  display: flex;
  gap: 96px;
`,W="/Zadanie-LD/logo.svg",v=()=>e.jsx(D,{children:e.jsxs(H,{children:[e.jsx("img",{src:W,alt:"Cupra logo"}),e.jsx(Z,{})]})}),R="/Zadanie-LD/image/cupra_bg.png",A="/Zadanie-LD/image/cupra_bg@2x.png",B=n.section`
  min-height: 884px;
  background-image: url(${R});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${A});
  }
`,F=()=>e.jsx(B,{}),U=n.section`
  padding: 104px 0;
`,$=n(d)`
  display: grid;
  grid-template-rows: 200px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
  margin: 0;

  > :nth-child(1) {
    grid-row-start: 1;
    margin: 0 30px;
  }
  > :nth-child(2) {
    grid-row-start: 2;
    margin: 30px 0;
  }
  > :nth-child(3) {
    grid-row-start: 3;
    margin: 0 30px;
  }
  > :nth-child(4) {
    grid-row-start: 4;
    margin: 30px 0;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat( auto-fit, minmax(250px, 1fr) );
    grid-column-gap: 32px;
    margin: 0 auto;
    > :nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
      margin: 0;
    }
    > :nth-child(2) {
      grid-area: 2 / 1 / 5 / 2; 
      margin: 0;
    }
    > :nth-child(3) {
      grid-area: 5/1/6/2;
      margin: 0;
      margin-top: 213px;
    }
    > :nth-child(4) {
      grid-area: 2 / 2 / 7 / 3; 
      margin-top: 60px;
      justify-self: end;
      margin: 0;
    }
  }
`,N=n.span`
  font-size: ${t=>t.fontSize||"60px"};
  font-weight: 300;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`,P=n.p`
  font-weight: 400;
  font-size: 20px;
  color: #ffffff80;
  @media (min-width: 1430px) {
    margin-left: 0
  }
`,T=n.button`
padding: ${t=>t.padding||""};
height: ${t=>t.height||""};
margin-left: 20px;
@media (min-width: 1430px) {
  margin-left: 0
}
`,V=({data:t})=>e.jsx(U,{children:e.jsx($,{children:t.map((a,i)=>{const s=a.button.shouldRenderButton;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:a.style,children:[e.jsx(N,{fontSize:a.span.fontSize||"",children:a.span.sectionSpan}),e.jsx(P,{children:a.text.sectionText}),s?e.jsx(T,{padding:a.button.padding,height:a.button.height,children:a.button.text}):e.jsx(e.Fragment,{})]},i),e.jsx(l,{image:a.image,alt:i})]})})})}),E=[{style:{color:"white",maxWidth:"553px"},span:{sectionSpan:"WYPRÓBUJ"},text:{sectionText:"Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu."},image:{imageSource:"/image/section/cupra_formentor.png",width:"787px"},button:{shouldRenderButton:!1}},{style:{color:"white",maxWidth:"553px"},span:{sectionSpan:"TYLKO DLA ODWAŻNYCH",fontSize:"40px"},text:{sectionText:"Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA."},image:{imageSource:"/image/section/cupra_formentor_1.png",width:"553px"},button:{shouldRenderButton:!0,padding:"0 24px",height:"48px",text:"Umów jazdę próbną"}}],O=()=>e.jsxs(e.Fragment,{children:[e.jsx(v,{}),e.jsx(F,{}),e.jsx(V,{data:E}),e.jsx(b,{})]});export{O as default};
