import React from "react";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import AboutPageContent from "./AboutPageContent";
import Footer from "../../Components/Footer/Footer";

const AboutPage = props => (
  <Container>
    <Header buttons={[{text: "Posts", link: "/posts"}, {text: "About", link: "/about"} ]}/>
    <AboutPageContent />
    <Footer />
  </Container>
);

export default AboutPage;
