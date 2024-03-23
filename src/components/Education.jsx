import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Card } from "react-bootstrap";
import schoollogo1 from '../images/stony brook university.png'
import schoollogo2 from '../images/konkuk university.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
// Data
import { filteredProjects } from "../data";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
import styled from "styled-components";
let projects = [["FHSOIAFHSAHFAF", "ffff"]];
const RS = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
export default function Education() {
  const { theme } = useAppContext();
  // return (
  //   <Element name={"About"} id="about">
  //     <RS className="section">
  //       <Container>
  //         <Container className="d-flex">
  //           <Title>
  //             <h2>About Me</h2>
  //             <div className="underline"></div>
  //           </Title>
  //         </Container>
  //         <Row className="align-items-center mt-5">
  //           <Col className="d-flex flex-column text-center">
  //             <Container>
  //               <p>No</p>

  //             </Container>
  //           </Col>
  //           <Col className="d-none d-md-block text-center">
  //             {/* <img
  //               src={avatar_url}
  //               alt="GitHub Avatar"
  //               loading="lazy"
  //               className="mx-auto rounded-circle"
  //               style={{ width: "15rem", height: "15rem" }}
  //             /> */}
  //           </Col>
  //         </Row>
  //       </Container>
  //     </RS>
  //   </Element>
  // );
  return (
    <Element name={"Education"} id="Education" style={{ marginTop: '40px', height: '100%' }}>
      <RS>
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Education</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Col className="" style={{ textAlign: "left", marginLeft: "10%", marginRight: "15%" }}>
            <Container style={{ textAlign: "left" }}>
              <Row className="align-items-center mt-5" style={{ textAlign: "left" }}>
                <Col className="flex-column text-left" style={{ textAlign: "left", flex: 10 }} >
                  <Container>
                    <b>Stony Brook University</b><br />
                    New York, USA <br />
                    Bachelors of Science in Biology<br />
                    2023 - 2025
                  </Container>
                </Col>
                <Col className="d-flex d-md-block text-center" >
                  <img
                    src={schoollogo1}
                    loading="lazy"
                    className="mx-auto rounded-circle"
                    style={{ width: "10rem", height: "10rem" }}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="align-items-center mt-5">
                <Col className="d-flex flex-column text-left" style={{ flex: 10 }}>
                  <Container>
                    <b>Konkuk University</b> <br />
                    Seoul, Korea <br />
                    Bachelors of Science in Stem Cell and Regenerative Biotechnology<br />
                    2018 - 2025
                  </Container>
                </Col>
                <Col className="d-none d-md-block text-center">
                  <img
                    src={schoollogo2}
                    loading="lazy"
                    className="mx-auto rounded-circle"
                    style={{ width: "10rem", height: "10rem" }}
                  />
                </Col>

              </Row>
            </Container>
          </Col>
        </Container>

      </RS>
    </Element >
  );
}
