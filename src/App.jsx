import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Domains from "./components/domains/Domains";
import Resources from "./components/resources/Resources";
import Testimonial from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Domains />
      <Resources />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
