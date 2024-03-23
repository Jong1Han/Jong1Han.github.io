import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import myPhoto from '../images/jongwonhan_photo.jpg'
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe style={{ marginTop: '40px' }}>
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="">
            <div style={{ width: "10%" }}></div>
            <Col className="d-flex flex-column">
              <Container style={{ left: "100px", textAlign: "left" }}>
                <br />
                <br />
                Hello, This is Jongwon Han.
                <br />
                <br />
                As an senior undergraduate student, I am excited about the possibilities and eager to embark on the next academic chapter ahead.
                I am in the program of double degree in Konkuk University and Stony Brook University.
                Now, I am attending Stony Brook University, working as an undergraduate research assistant in Dr. Wang's Multiplex Biotechnology Laboratory.
                <br />
                <br></br>
                <a href="https://google.com" style={{ 'color': 'Red' }}>Academic Curriculum Vitae</a>
              </Container>
            </Col>

            <Col className="d-none d-md-block text-center">
              <br></br>
              <br />
              <img
                src={myPhoto}
                alt="Avatar"
                loading="lazy"
                className="mx-auto"
                style={{ width: "20rem", height: "15rem", borderRadius: "12%" }}
              />
              <br />
              <i>" With the Perfect Rainbow in the Niagara "</i>
              <br />

            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element >
  );
}
