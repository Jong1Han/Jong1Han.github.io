import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import { useState } from 'react';
import sbPic from '../images/GH.svg'
import './scrollBar.css'
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Card, Popover, OverlayTrigger } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
import { CustomButtonGroup, CustomLeftArrow, CustomRightArrow } from "./customButton";
import myPhoto from '../images/KakaoTalk_20231020_173010163.png'
let projects = [["FHSOIAFHSAHFAF", "ffff"]];
const ButtonGroupR = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> // remember to give it position:absolute
      <CustomLeftArrow className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <CustomRightArrow onClick={() => next()} />
      {/* <CustomRightArrow onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
    </div>
  );
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const { deviceType } = this.props;
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
          (this.Carousel.state.totalItems -
            this.Carousel.state.slidesToShow) +
          150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform, currentSlide } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    const pop1 = <Popover id="popover-trigger-click" title="Popover bottom" >
      <div style={{
        margin: "20px",
        height: "400px"
      }}>
        <h3>Holy guacamole!
        </h3>Documentation and examples for adding Bootstrap popovers, like those found in iOS, to any element on your site.
      </div>
    </Popover>;
    return (
      <Carousel

        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        centerMode={false}
        partialVisbile={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        // customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["mobile"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div class="image-container increase-size">
          <div
            draggable={false}
            style={{ width: "90%", height: "460px", cursor: "pointer", backgroundColor: "transparent" }}
          >

          </div>
        </div>

        <div class="image-container increase-size">
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="auto"
            overlay={pop1}
          >
            <Card
              draggable={false}
              style={{ width: "90%", height: "460px", cursor: "pointer" }}
            >

              <div class="image-container-text">
                <img
                  src={myPhoto}
                  alt="Avatar"
                  loading="lazy"
                  className="mx-auto"
                  style={{ width: "15rem", height: "15rem", marginTop: "15px" }}
                />
                <div height="7px"></div>
                <br />
                <b>
                  Developing Single-Cell Spatial Transcriptomics by Multiplex In Situ Tagging (MIST)
                </b>
                <br />
                (2023-2024)
                <div height="7px"></div>
                <br />
                Advisor: Prof. Jun Wang
                <br />

              </div>
            </Card>
          </OverlayTrigger>
        </div>

        <div class="image-container increase-size">
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="auto"
            overlay={pop1}>
            <Card
              draggable={false}
              style={{ width: "90%", height: "460px", cursor: "pointer" }}
            >
              <div class="image-container-text">
                <img
                  src={myPhoto}
                  alt="Avatar"
                  loading="lazy"
                  className="mx-auto"
                  style={{ width: "15rem", height: "15rem", marginTop: "15px" }}
                />
                <div height="7px"></div>
                <br />
                <b>
                  Elucidating Toxicological Cell Death Mechanisms of Perfluorooctanoic Acid (PFOA) on Ledig Cell
                </b>
                <br />
                (2022-2023)
                <div height="7px"></div>
                <br />
                Advisor: Prof. Hyunjung Park
              </div>
            </Card></OverlayTrigger>
        </div>

        <div class="image-container increase-size">
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="auto"
            overlay={pop1}>
            <Card
              draggable={false}
              style={{ width: "90%", height: "460px", cursor: "pointer" }}
            >
              <div class="image-container-text">
                <img
                  src={myPhoto}
                  alt="Avatar"
                  loading="lazy"
                  className="mx-auto"
                  style={{ width: "15rem", height: "15rem", marginTop: "15px" }}
                />
                <div height="7px"></div>
                <br />
                <b>
                  Constructing Porcine and Murine Testes Organ Culture Methods for In vitro Spermatogenesis
                </b>
                <br />
                (2022)
                <div height="7px"></div>
                <br />
                Advisor: Prof. Hyuk Song
              </div>
            </Card>
          </OverlayTrigger>
        </div>

        <div class="image-container increase-size">
          <OverlayTrigger
            trigger="click"
            rootClose
            placement="auto"
            overlay={pop1}>
            <Card
              draggable={false}
              style={{ width: "90%", height: "460px", cursor: "pointer" }}
            >
              <div class="image-container-text">
                <img
                  src={myPhoto}
                  alt="Avatar"
                  loading="lazy"
                  className="mx-auto"
                  style={{ width: "15rem", height: "15rem", marginTop: "15px" }}
                />
                <div height="7px"></div>
                <br />
                <b>
                  Developing Food Additive using Mangosteen Pericarp
                </b>
                <br />
                (2021)
                <div height="7px"></div>
                <br />
                Advisor: Prof. Hyuk Song
              </div>
            </Card>
          </OverlayTrigger>
        </div>
      </Carousel>
    );
  }
}
export default function Projects() {
  const { theme } = useAppContext();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Element name={"Projects"} id="Projects" style={{ marginTop: '40px' }}>
      <section>
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <center>
            <WithScrollbar></WithScrollbar>
          </center>
        </Container>
      </section>
    </Element >
  );
}
