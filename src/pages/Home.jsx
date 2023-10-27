import { Carousel } from "../components/Carousel/Carousel";
import { sectionImages } from "../components/Carousel/images";
import Header from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Section } from "../components/Section/Section";

const componentData = [
  {
    style: {
      color: "white",
      maxWidth: "553px",
    },
    span: {
      sectionSpan: "WYPRÓBUJ",
    },
    text: {
      sectionText:
        "Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu.",
    },
    image: {
      imageSource: sectionImages.normal.cupra_formentor_front,
      retina: sectionImages.retina.cupra_formentor_front_retina,
      width: "787px",
    },
    button: {
      shouldRenderButton: false,
    },
  },
  {
    style: {
      color: "white",
      maxWidth: "553px",
    },
    span: {
      sectionSpan: "TYLKO DLA ODWAŻNYCH",
      fontSize: "40px",
    },
    text: {
      sectionText:
        "Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA.",
    },
    image: {
      imageSource: sectionImages.normal.cupra_formentor_side,
      retina: sectionImages.retina.cupra_formentor_side_retina,
      width: "553px",
    },
    button: {
      shouldRenderButton: true,
      padding: "0 24px",
      height: "48px",
      text: "Umów jazdę próbną",
    },
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section data={componentData} />
      <Carousel />
    </>
  );
};

export default Home;
