import 'aos/dist/aos.css';
import 'animate.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { Link, scroller } from 'react-scroll';
import {Container, Row, Col, Button} from 'react-bootstrap';

function Banner() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container id="Home" fluid className="bg-light banner" data-aos="fade-down" data-aos-delay="200">            <Row>
                <Col xs={7} md={7} xl={7} className="banner-left d-flex justify-content-center align-items-center">
                    <Row className="">
                        <h1>Hi! I'm Bilqist...</h1>
                        <p>A Web Developement Enthusiast.
                            <br/>
                            Here's who I am and What I do!
                        </p>

                        <div>
                            <Button variant="outline-secondary"
                                className="animate__animated animate__fade animate__infinite col-7 col-xl-3 px-3 get-started d-flex justify-content-center align-items-center"
                                onClick={() => scroller.scrollTo('About', {
                                    smooth: true,
                                    offset: -150,
                                    duration: 200,
                                })}
                                >Get Started</Button>
                        </div>
                    </Row>
                </Col>

                <Col xs={5} md={5} xl={5} className="banner-right d-flex justify-content-center align-items-center">
                    <Row className="">
                        <img className="animate__animated animate__bounce animate__infinite img-fluid banner-img" src="/header-img.svg" alt="Header Img"/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner