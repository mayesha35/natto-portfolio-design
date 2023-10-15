"use client";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Montserrat, DM_Sans } from 'next/font/google';
import { motion } from "framer-motion";
import Image from 'next/image';
import banner from '../../assets/banner.webp';
const montserrat = Montserrat({ subsets: ['latin']});
const dmSans = DM_Sans({ subsets: ['latin']});
const Banner = () => {
  return (
    <>
     <div className="banner py-4">
        <Container>
            <Row>
                <Col xs lg='8' className='mx-auto'>
                    <div className="banner-content text-center py-4">
                        <h1 className={montserrat.className}><span>Build</span> your great portfolio <span>Website</span></h1>
                        <p className={dmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
                        <motion.button className={dmSans.className}  whileHover={{ scale: 1.06 }} whileTap={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }} >Contact Now</motion.button>
                    </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <div className="banner-img">
                  <Image src={banner} width={1200} height={158} loading='lazy' alt='banner'/>
                </div>
              </Col>
            </Row>
        </Container>
     </div>
    </>
  )
}

export default Banner;