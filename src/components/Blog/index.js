"use client";
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Montserrat } from 'next/font/google';
const mont=Montserrat({subsets:['latin']});
const Blog = () => {
  return (
    <>
    <div className="blog">
        <Container>
            <Row>
                <div className="col-lg-6 mx-auto">
                   <div className="blog-sec-header text-center">
                     <h2 className={mont.className}>Our Popular Project <span>And Blog</span></h2>
                     <p className={mont.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                   </div>
                </div>
            </Row>
            <Row>

            </Row>
        </Container>
    </div>
    </>
  )
}

export default Blog;