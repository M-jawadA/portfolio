import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DynamicTyping from "../../components/DynamicTyping";
import About from "../../components/About";
import Timeline from "../../components/Timeline/Timeline";
import homeConfig from "../../assets/configs/homeConfig";

import "./Home.css";
import ImageSlider from "../../components/ImageSlider";

const Home = () => {
  return (
    <section>
      <Container fluid className="home-content" id="home">
        <Row>
          <Col className="home-header">
            <div className="name-text">{homeConfig.greeting}</div>

            <div>
              <ImageSlider />
              <About about={homeConfig.about} />
            </div>
            <div style={{ textAlign: "center" }}>
              <DynamicTyping titles={homeConfig.titles} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="resume-content" id="resume">
        <div className="col-md-8 mx-auto">
          <Timeline items={homeConfig.workTimeline} />
        </div>
      </Container>
    </section>
  );
};

export default Home;
