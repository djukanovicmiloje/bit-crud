import React from "react";
import Container from "../../SharedComponents/Container/Container";
import Header from "../../Components/Header/Header";
import AboutPageContent from "./AboutPageContent";
import Footer from "../../Components/Footer/Footer";

const AboutPage = props => (
  <Container>
    <Header />
    <AboutPageContent />
    <Footer />
  </Container>
);

export default AboutPage;