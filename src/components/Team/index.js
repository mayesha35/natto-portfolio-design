"use client";
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Montserrat,Open_Sans } from 'next/font/google';
import Image from 'next/image';
import team from '../../assets/team.png';
const mont=Montserrat({subsets:['latin']});
const openSans=Open_Sans({subsets:['latin']});

const Team = () => {
  return (
    <>
    <div className="team">
        <Container>
            <Row>
                <div className="col-lg-6 mx-auto">
                    <div className="team-sec-heading text-center">
                        <h2 className={mont.className}>Run Agency Smartly with Our <span>Team Member.</span></h2>
                    </div>
                </div>
            </Row>
            <Row className='justify-content-between'>
                <div className="col-lg-5">
                    <div className="team-img">
                        <Image src={team} width={472} height={445} alt='team'/>
                    </div>
                </div>
                <div className="col-lg-6 ms-auto">
                    <div className="team-right">
                        <div className="upper-sec">
                        <h3 className={mont.className}>What provide to <span>our client</span></h3>
                        <p className={mont.className}>There are many variations of passages of Lorem Ipsum availabl , but the majority have suffered alteration in some for by injected humour, or randomised words which don't look.There are many variations of passages.</p>
                        </div>
                       <div className="lower-sec">
                        <h3 className={mont.className}>Optimize for quickly <span>display.</span></h3>
                        <p className={mont.className}>There are many variations of passages of Lorem Ipsum availabl but the major.There are many variations of passages of.</p>
                       </div>
                        <button className={openSans.className}>Contact Now</button>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default Team;