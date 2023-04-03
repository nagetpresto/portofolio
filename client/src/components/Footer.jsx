import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

function Footer() {
    useEffect(() => {
        AOS.init();
    })

    return(
        <Container fluid id="Footer" className="footer d-flex justify-content-center align-items-center"> 
            <div className='d-flex justify-content-center align-items-center'>
                <p className='text-center'>Bilqist Imeilia Az Zahra | Fullstack Developer | Portofolio</p> 
            </div>
        </Container>
    )
}

export default Footer