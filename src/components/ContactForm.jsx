import React from "react";
import { useAppContext } from "../appContext";
// Data
import { formspreeUrl } from "../data";
// Components
import { Alert, Button, Col, Container, Form, Spinner } from "react-bootstrap";

export default function ContactForm() {


  return (
    <>
      <Col className="d-flex flex-column" style={{ "marginLeft": "20%" }}>
        <Container>
          <br />
          <br />
          <br />
          <b>e-mail:   &nbsp;  </b>   <i>    jongwon.han.1@stonybrook.edu </i>
        </Container>
      </Col >
    </>
  );
}
