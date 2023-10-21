"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import clientImage from "../../assets/clientImage.jpg";
import { Montserrat, DM_Sans, Open_Sans } from "next/font/google";
import { clientData } from "@/data/CommonData";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

const Clients = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <>
      <div className="clients">
        <Container>
          <Row className="justify-content-between align-items-end">
            <Col xs={5}>
              <div className="client-sec-left">
                <h2 className={montserrat.className}>
                  What we provide to <span>our Client</span>
                </h2>
                <p className={montserrat.className}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have.
                </p>
                <div className="client-sec-image">
                  <div className="img-rect">
                    <Image
                      src={clientImage}
                      width={372}
                      height={445}
                      loading="lazy"
                      alt="client"
                    />
                  </div>
                  <div className="client-experience-box">
                    <h2 className={openSans.className}>60+</h2>
                    <p className={openSans.className}>Years of experience</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6}>
              <div className="client-sec-right">
                <div className="row align-items-center row-gap-4">
                  {clientData.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                      <div
                        className={`clientCard ${click ? "bg" : ""}`}
                        onClick={handleClick}
                      >
                        <div className="card-content">
                          <item.icon />
                          <h3 className={montserrat.className}>{item.title}</h3>
                          <p className={openSans.className}>{item.text}</p>
                          <Link href="#" className={montserrat.className}>
                            {item.readmore} <BsChevronRight />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Clients;
