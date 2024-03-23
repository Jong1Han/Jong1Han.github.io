import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
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
const RS = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
export default function Publications() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();

  return (
    <Element name={"Publications"} id="Publications" style={{ marginTop: '40px' }}>
      <RS>
        <Container >
          <Container className="d-flex">
            <Title>
              <h2>Publications</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <ul class="list">

            <Col style={{ "marginLeft": "12%", marginRight: "12%" }}>
              <br></br>
              <li><Container><b><u>Han, J. W.</u></b>, & Park, H. J. (2023). Perfluorooctanoic acid induces cell death in TM3 cells via the ER stress-mitochondrial apoptosis pathway. Reproductive toxicology (Elmsford, N.Y.), 118, 108383.</Container>
                <Container><a href="https://doi.org/10.1016/j.reprotox.2023.108383">https://doi.org/10.1016/j.reprotox.2023.108383</a></Container>
              </li></Col>

          </ul>
        </Container>
      </RS>
    </Element>
  );
}
