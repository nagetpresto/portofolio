import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card, Carousel} from 'react-bootstrap';

function Portofolio() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container fluid id="Portofolio" className="bg-light py-5 about" data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-center">   
            <h1 className='text-center'>Portofolio</h1>  
            <div className='text-center d-flex justify-content-center'>
                <hr className='col-3'/>
            </div>     
            <Row className='mt-5 d-flex justify-content-center'>
                <Carousel>
                    <Carousel.Item>
                        <Row className='py-5 d-flex justify-content-center align-items-center'>
                            <div className='car-img mb-3'>
                                <img
                                className="d-block w-100"
                                src="/waysfood.png"
                                alt="Second slide"
                                />
                            </div>
                            <Row style={{textAlign:'justify'}} className='car-body d-flex justify-content-center align-items-center'>
                                <a href='https://waysfood-three.vercel.app/' target={'_blank'} style={{cursor:'pointer'}} className='text-center mb-0'>WaysFood (2023)</a>
                                <span className='text-center mb-3'>An Online Food Delivery Site</span>
                                <p >This is my final project during my coding bootcamp at DumbWays.ID. This project took me a week to make.
                                </p>
                                <div className='d-flex flex-row' style={{columnGap:'20px'}}>
                                    <div>
                                        <p className='py-0 my-0'>Frontend</p>
                                        <p className='py-0 my-0'>Backend</p>
                                        <p className='py-0 my-0'>Features</p>
                                    </div>
                                    <div>
                                        <p className='py-0 my-0'>: ReacJs, MapBox.</p>
                                        <p className='py-0 my-0'>: Go (Echo, JWT, GORM, Clean Architecture, Go Mail), Midtrans, MySQL.</p>
                                        <p className='py-0 my-0'>: Register Email Confirmation, Search and Pick Location, Display Nearby Restaurant, Payment, Payment Email Confirmation. </p>
                                    </div>
                                </div>

                                <div className='d-flex flex-row mt-1' style={{columnGap:'20px'}}>
                                    <a href='https://waysfood-three.vercel.app/' target={'_blank'} className='py-0 my-0'>Deploy Link</a>
                                    <a href='https://github.com/nagetpresto/waysfood_be_fe' target={'_blank'} className='py-0 my-0'>Repo Link</a>
                                </div>
                            </Row>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className='py-5 d-flex justify-content-center align-items-center'>
                            <div className='car-img mb-3'>
                                <img
                                className="d-block w-100"
                                src="/waysbeans.png"
                                alt="Second slide"
                                />
                            </div>
                            <Row style={{textAlign:'justify'}} className='car-body d-flex justify-content-center align-items-center'>
                                <a href='https://waysbeans-deploy-olive.vercel.app/' target={'_blank'} style={{cursor:'pointer'}} className='text-center mb-0'>WaysBeans (2023)</a>
                                <span className='text-center mb-3'>An Online Shopping Site</span>
                                <p >Project that I made during my coding bootcamp at DumbWays.ID. This project took me 
                                    3 weeks to accomplish and improve the given mockup.
                                </p>
                                <div className='d-flex flex-row' style={{columnGap:'20px'}}>
                                    <div>
                                        <p className='py-0 my-0'>Frontend</p>
                                        <p className='py-0 my-0'>Backend</p>
                                        <p className='py-0 my-0'>Features</p>
                                    </div>
                                    <div>
                                        <p className='py-0 my-0'>: ReacJs.</p>
                                        <p className='py-0 my-0'>: Go (Echo, JWT, GORM, Clean Architecture, Go Mail), Midtrans, MySQL.</p>
                                        <p className='py-0 my-0'>: Register Email Confirmation, Payment, Payment Email Confirmation. </p>
                                    </div>
                                </div>
                                <div className='d-flex flex-row mt-1' style={{columnGap:'20px'}}>
                                    <a href='https://waysbeans-deploy-olive.vercel.app/' target={'_blank'} className='py-0 my-0'>Deploy Link</a>
                                    <a href='https://github.com/nagetpresto/waysbeans_deploy' target={'_blank'} className='py-0 my-0'>Repo Link</a>
                                </div>
                            </Row>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}

export default Portofolio